// 类型定义
// types.ts
export type GradientType = 'linear' | 'radial' | string

export interface Position2D {
  x: number
  y: number
}

export interface Position2DWithRadius extends Position2D {
  r: number
}

export interface GradientStop {
  pos: number
  color: string
}

export interface LinearGradient {
  type: 'linear'
  start_pos: Position2D
  end_pos: Position2D
  stop_count: number
  stops: GradientStop[]
}

export interface RadialGradient {
  type: 'radial'
  start_pos: Position2DWithRadius
  end_pos: Position2DWithRadius
  stop_count: number
  stops: GradientStop[]
}

export type GradientInput = LinearGradient | RadialGradient | string

// 类定义
class CanvasGradient {
  start_pos: Position2D | Position2DWithRadius
  end_pos: Position2D | Position2DWithRadius
  type: GradientType
  stop_count: number
  stops: GradientStop[]

  constructor(x0: number, y0: number, x1: number, y1?: number, r0?: number, r1?: number) {
    this.stop_count = 0
    this.stops = []

    const argLen = arguments.length

    if (argLen === 3) {
      // radial: one center, radius
      this.start_pos = { x: x0, y: y0, r: 0 }
      this.end_pos = { x: x0, y: y0, r: x1 }
      this.type = 'radial'
    } else if (argLen === 4) {
      // linear
      this.start_pos = { x: x0, y: y0 }
      this.end_pos = { x: x1!, y: y1! }
      this.type = 'linear'
    } else if (argLen === 6) {
      // radial: two circles
      this.start_pos = { x: x0, y: y0, r: x1! }
      this.end_pos = { x: x1!, y: y1!, r: r1! }
      this.type = 'radial'
    } else {
      throw new Error('Invalid parameters for CanvasGradient constructor')
    }
  }

  addColorStop(pos: number, color: string): void {
    if (this.stop_count < 5 && pos >= 0 && pos <= 1) {
      this.stops.push({ pos, color })
      this.stop_count++
    }
  }
}
export default CanvasGradient
