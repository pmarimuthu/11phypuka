import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const db = getFirestore(app)

// ── Device fingerprint ────────────────────────────────────────────────────────
// Lightweight canvas + navigator fingerprint — no external libs.
async function getFingerprint(): Promise<string> {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  ctx.textBaseline = 'top'
  ctx.font = '14px Arial'
  ctx.fillText('physics🧲', 2, 2)
  const canvasStr = canvas.toDataURL()

  const raw = [
    navigator.language,
    navigator.platform,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency ?? '',
    canvasStr.slice(-64), // last 64 chars of canvas data
  ].join('|')

  // SHA-256 via WebCrypto
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(raw)
  )
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// ── Firestore document refs ───────────────────────────────────────────────────
// /analytics/summary  → { totalVisits, uniqueVisitors }
// /visitors/{fpHash}  → { firstSeen, lastSeen, visits }

const SUMMARY_REF = () => doc(db, 'analytics', 'summary')
const VISITOR_REF = (fp: string) => doc(db, 'visitors', fp)

// ── Track a visit ─────────────────────────────────────────────────────────────
export async function trackVisit(): Promise<void> {
  try {
    const fp = await getFingerprint()
    const visitorRef = VISITOR_REF(fp)
    const summaryRef = SUMMARY_REF()

    const [visitorSnap, summarySnap] = await Promise.all([
      getDoc(visitorRef),
      getDoc(summaryRef),
    ])

    const isNew = !visitorSnap.exists()

    // Update visitor record
    if (isNew) {
      await setDoc(visitorRef, {
        firstSeen: serverTimestamp(),
        lastSeen: serverTimestamp(),
        visits: 1,
      })
    } else {
      await updateDoc(visitorRef, {
        lastSeen: serverTimestamp(),
        visits: increment(1),
      })
    }

    // Update summary counters
    if (!summarySnap.exists()) {
      await setDoc(summaryRef, {
        totalVisits: 1,
        uniqueVisitors: 1,
      })
    } else {
      await updateDoc(summaryRef, {
        totalVisits: increment(1),
        ...(isNew ? { uniqueVisitors: increment(1) } : {}),
      })
    }
  } catch (err) {
    // Non-fatal — never break the page for analytics
    console.warn('[visitor-tracker]', err)
  }
}

// ── Subscribe to live summary ─────────────────────────────────────────────────
export function subscribeToSummary(
  cb: (data: { totalVisits: number; uniqueVisitors: number }) => void
): () => void {
  return onSnapshot(SUMMARY_REF(), snap => {
    if (snap.exists()) {
      cb(snap.data() as { totalVisits: number; uniqueVisitors: number })
    }
  })
}
