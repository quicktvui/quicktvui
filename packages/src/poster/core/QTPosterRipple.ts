//
import {QTFlexStyleMargin} from "../../core/QTFlexStyleMargin";
import {QTFlexStylePadding} from "../../core/QTFlexStylePadding";
import {QTFlexStylePosition} from "../../core/QTFlexStylePosition";

export interface QTPosterRipple {
  enable: boolean
  src?: string
  style: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStylePosition
}
