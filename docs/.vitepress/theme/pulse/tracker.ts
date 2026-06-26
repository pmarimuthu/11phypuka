import {
  doc, getDoc, setDoc, updateDoc,
  increment, serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'

const VISITORS = 'visitors'
const PROJECTS = 'projects'

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

export async function recordVisit(
  projectId: string,
  pageKey: string,
  fingerprintId: string
): Promise<void> {
  const today = todayISO()

  const visitorRef = doc(db, VISITORS, fingerprintId)
  const visitorSnap = await getDoc(visitorRef)
  const isNewGlobal = !visitorSnap.exists()

  if (isNewGlobal) {
    await setDoc(visitorRef, { firstSeen: serverTimestamp(), lastSeen: serverTimestamp() })
  } else {
    await updateDoc(visitorRef, { lastSeen: serverTimestamp() })
  }

  const pvRef = doc(db, VISITORS, fingerprintId, PROJECTS, projectId)
  const pvSnap = await getDoc(pvRef)
  const isNewToProject = !pvSnap.exists()

  if (isNewToProject) {
    await setDoc(pvRef, { firstSeen: serverTimestamp(), lastSeen: serverTimestamp() })
  } else {
    await updateDoc(pvRef, { lastSeen: serverTimestamp() })
  }

  const statsRef = doc(db, PROJECTS, projectId, 'stats', 'global')
  const statsSnap = await getDoc(statsRef)

  if (!statsSnap.exists()) {
    await setDoc(statsRef, { total: 1, unique: 1, todayCount: 1, todayDate: today })
  } else {
    const d = statsSnap.data()
    await updateDoc(statsRef, {
      total: increment(1),
      unique: isNewToProject ? increment(1) : increment(0),
      todayCount: d.todayDate === today ? increment(1) : 1,
      todayDate: today,
    })
  }

  if (!pageKey) return

  const ppRef = doc(db, VISITORS, fingerprintId, PROJECTS, projectId, 'pages', pageKey)
  const ppSnap = await getDoc(ppRef)
  const isNewToPage = !ppSnap.exists()

  if (isNewToPage) {
    await setDoc(ppRef, { firstSeen: serverTimestamp(), lastSeen: serverTimestamp() })
  } else {
    await updateDoc(ppRef, { lastSeen: serverTimestamp() })
  }

  const pageRef = doc(db, PROJECTS, projectId, 'pages', pageKey)
  const pageSnap = await getDoc(pageRef)
  if (!pageSnap.exists()) {
    await setDoc(pageRef, { pageKey, total: 1, unique: isNewToPage ? 1 : 0 })
  } else {
    await updateDoc(pageRef, {
      total: increment(1),
      unique: isNewToPage ? increment(1) : increment(0),
    })
  }
}
