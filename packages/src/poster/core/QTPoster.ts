//
import {QTWaterfallItem} from "../../waterfall/core/QTWaterfallItem";
import {QTPosterShadow} from "./QTPosterShadow";
import {QTPosterShimmer} from "./QTPosterShimmer";
import {QTPosterTitle} from "./QTPosterTitle";
import {QTPosterRipple} from "./QTPosterRipple";
import {QTPosterCorner} from "./QTPosterCorner";
import {QTPosterImage} from "./QTPosterImage";
import {QTFlexStyleMargin} from "../../core/QTFlexStyleMargin";
import {QTFlexStylePadding} from "../../core/QTFlexStylePadding";
import {QTFlexStyleSize} from "../../core/QTFlexStyleSize";
import {QTPosterScore} from "./QTPosterScore";
import {QTFocusable} from "../../core/QTFocusable";
import {QTPosterPlaceholderImg} from "./QTPosterPlaceholderImg";

export interface QTPoster extends QTWaterfallItem {
  focus?: QTFocusable
  image?: QTPosterImage
  shadow?: QTPosterShadow
  shimmer?: QTPosterShimmer
  title?: QTPosterTitle
  focusTitle?:QTPosterTitle
  subTitle?: QTPosterTitle
  floatTitle?: QTPosterTitle
  ripple?: QTPosterRipple
  corner?: QTPosterCorner
  score?: QTPosterScore
  titleStyle?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize,
  titleFocusStyle?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize
  placeholderImg?: QTPosterPlaceholderImg
  [prop: string]: any
}
