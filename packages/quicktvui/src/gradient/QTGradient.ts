import { QTGradientOrientation } from './QTGradientOrientation'
import { QTGradientShape } from './QTGradientShape'
import { QTGradientType } from './QTGradientType'

export interface QTGradient {
  type?: QTGradientType
  shape?: QTGradientShape
  orientation?: QTGradientOrientation
  colors: Array<string>
  gradientRadius?: number
  cornerRadius?: number
  cornerRadii4?: Array<number>
  cornerRadii8?: Array<number>
}
