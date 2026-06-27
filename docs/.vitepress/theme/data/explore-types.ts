export interface ExploreControl {
  label: string
  min: number
  max: number
  step?: number
  unit: string
  default: number
}

export interface ExploreConfig {
  hint: string
  controls: ExploreControl[]
  draw: (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    params: number[],
    t: number
  ) => void
}
