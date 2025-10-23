import { ESGradientOrientation } from './ESGradientOrientation'
import { ESGradientShape } from './ESGradientShape'
import { ESGradientType } from './ESGradientType'

export interface ESGradient {
  type?: ESGradientType
  shape?: ESGradientShape
  orientation?: ESGradientOrientation
  colors: Array<string>
  gradientRadius?: number
  cornerRadius?: number
  cornerRadii4?: Array<number>
  cornerRadii8?: Array<number>
}
