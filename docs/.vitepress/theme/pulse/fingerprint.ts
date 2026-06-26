import FingerprintJS from '@fingerprintjs/fingerprintjs'

type FpAgent = Awaited<ReturnType<typeof FingerprintJS.load>>
let fpPromise: Promise<FpAgent> | null = null

export async function getFingerprint(): Promise<string> {
  if (!fpPromise) fpPromise = FingerprintJS.load()
  const fp = await fpPromise
  const result = await fp.get()
  return result.visitorId
}
