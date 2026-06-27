import siteConfig from './site.config.json'

export interface FontConfig {
  id: string
  name: string
  description: string
  family: string
  googleUrl: string
  active: boolean
}

export const FONTS: FontConfig[] = siteConfig.fonts as FontConfig[]
export const ACTIVE_FONT: FontConfig =
  FONTS.find(f => f.active) ?? FONTS[0]

export interface SubjectConfig {
  id: string
  name: string
  icon: string
  path: string
  chaptersPath: string
  status: 'active' | 'coming-soon'
  visible?: boolean
}

export const SUBJECTS: Record<string, SubjectConfig> = Object.fromEntries(
  siteConfig.subjects.map(s => [s.id, s as SubjectConfig])
)

export const SUBJECTS_LIST: SubjectConfig[] = (siteConfig.subjects as SubjectConfig[]).filter(s => s.visible !== false)

export const SITE = siteConfig.site
export const HEADER_WIDGETS: string[] = siteConfig.header.widgets
export const FOOTER_WIDGETS: string[] = siteConfig.footer.widgets

/** Resolve subject config from a URL path, e.g. '/physics/chapters/...' → physics */
export function subjectFromPath(path: string): SubjectConfig {
  const match = SUBJECTS_LIST.find(s => s.id !== 'student' && path.startsWith(s.path))
  return match ?? { id: 'student', name: 'Student', icon: '📚', path: '/', chaptersPath: '/', status: 'active' }
}

export const BOARD = siteConfig.board as { label: string; fullLabel: string }
export const CLASSES = siteConfig.classes as Array<{ id: string; label: string; fullLabel: string; active: boolean }>
export const ACTIVE_CLASS = CLASSES.find(c => c.active) ?? CLASSES[0]
