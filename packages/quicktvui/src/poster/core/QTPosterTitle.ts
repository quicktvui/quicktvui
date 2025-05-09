//
import { QTFlexStyleMargin } from '../../core/QTFlexStyleMargin'
import { QTFlexStylePadding } from '../../core/QTFlexStylePadding'
import { QTFlexStyleSize } from '../../core/QTFlexStyleSize'
import { ESGradient } from '@extscreen/es3-component'
import { QTFlexStyleText } from '../../core/QTFlexStyleText'

export interface QTPosterTitle {
  text: string
  focusTitle?: string
  background?: ESGradient
  style?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize & QTFlexStyleText
  enable: boolean
}
