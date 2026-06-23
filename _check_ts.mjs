import { transform } from 'esbuild'
import { readFile } from 'node:fs/promises'

const files = [
  'docs/.vitepress/theme/components/simulations/MissionLaunchSatellite/types.ts',
  'docs/.vitepress/theme/components/simulations/MissionLaunchSatellite/PhysicsEngine.ts',
  'docs/.vitepress/theme/components/simulations/MissionLaunchSatellite/OrbitRenderer.ts',
  'docs/.vitepress/theme/components/simulations/MissionLaunchSatellite/MissionManager.ts',
]

let ok = true
for (const f of files) {
  try {
    const code = await readFile(f, 'utf8')
    await transform(code, { loader: 'ts', target: 'es2020' })
    console.log('OK  ', f)
  } catch (e) {
    ok = false
    console.log('FAIL', f)
    console.error(e.message)
  }
}
process.exit(ok ? 0 : 1)
