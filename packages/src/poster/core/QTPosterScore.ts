//
import {QTFlexStyleMargin} from "../../core/QTFlexStyleMargin";
import {QTFlexStylePadding} from "../../core/QTFlexStylePadding";
import {QTFlexStyleSize} from "../../core/QTFlexStyleSize";
import {QTFlexStyleText} from "../../core/QTFlexStyleText";

export interface QTPosterScore {
  text: string
  style?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize & QTFlexStyleText
  enable: boolean
}
