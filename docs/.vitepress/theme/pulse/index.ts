import { getFingerprint } from './fingerprint'
import { recordVisit } from './tracker'

const PROJECT_ID = import.meta.env.VITE_PULSE_ANALYTICS_KEY as string

export async function trackVisit(pageKey: string): Promise<void> {
  try {
    const fingerprintId = await getFingerprint()
    await recordVisit(PROJECT_ID, pageKey, fingerprintId)
  } catch (err) {
    console.warn('[pulse]', err)
  }
}
