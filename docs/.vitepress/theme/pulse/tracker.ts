import {
  doc, getDoc, setDoc, updateDoc,
  increment, serverTimestamp, addDoc, collection,
} from 'firebase/firestore'
import { db } from './config'
import { checkIsNew, recordFingerprint } from './uniqueness'

const PROJECTS = 'projects'

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

async function step(name: string, fn: () => Promise<void>) {
  try { await fn() } catch (e) { console.warn(`[pulse:${name}]`, e) }
}

export async function recordVisit(
  projectId: string,
  pageKey: string,
  fingerprintId: string
): Promise<void> {
  const today = todayISO()
  let isNewToProject = false, isNewToPage = false

  await step('checkIsNew', async () => {
    const r = await checkIsNew(projectId, fingerprintId, pageKey)
    isNewToProject = r.isNewToProject
    isNewToPage    = r.isNewToPage
  })

  await step('fingerprint', () =>
    recordFingerprint(projectId, fingerprintId, pageKey, isNewToProject, isNewToPage))

  await step('stats', async () => {
    const statsRef  = doc(db, PROJECTS, projectId, 'stats', 'global')
    const statsSnap = await getDoc(statsRef)
    if (!statsSnap.exists()) {
      await setDoc(statsRef, { total: 1, unique: 1, todayCount: 1, todayDate: today })
    } else {
      const d = statsSnap.data()
      await updateDoc(statsRef, {
        total:      increment(1),
        unique:     isNewToProject ? increment(1) : increment(0),
        todayCount: d.todayDate === today ? increment(1) : 1,
        todayDate:  today,
      })
    }
  })

  if (!pageKey) return

  await step('pages', async () => {
    const pageRef  = doc(db, PROJECTS, projectId, 'pages', pageKey)
    const pageSnap = await getDoc(pageRef)
    if (!pageSnap.exists()) {
      await setDoc(pageRef, { pageKey, total: 1, unique: isNewToPage ? 1 : 0 })
    } else {
      await updateDoc(pageRef, {
        total:  increment(1),
        unique: isNewToPage ? increment(1) : increment(0),
      })
    }
  })
}

export async function saveRating(
  projectId: string, pageKey: string, fingerprintId: string, score: number
): Promise<void> {
  const id = `${fingerprintId}_${pageKey}`
  await setDoc(doc(db, PROJECTS, projectId, 'ratings', id), {
    pageKey, fingerprintId, score, ts: serverTimestamp(),
  })
}

export async function saveIssue(
  projectId: string, pageKey: string, fingerprintId: string,
  category: string, comment: string
): Promise<void> {
  await addDoc(collection(db, PROJECTS, projectId, 'issues'), {
    pageKey, fingerprintId, category, comment, ts: serverTimestamp(),
  })
}
