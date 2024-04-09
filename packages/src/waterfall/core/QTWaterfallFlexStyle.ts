//


import {QTFlexStyleMargin} from "../../core/QTFlexStyleMargin";
import {QTFlexStylePadding} from "../../core/QTFlexStylePadding";
import {QTFlexStyleSize} from "../../core/QTFlexStyleSize";
import {QTFlexStyleSpacing} from "../../core/QTFlexStyleSpacing";
import {QTFlexStyleDecoration} from "../../core/QTFlexStyleDecoration";
import {QTFlexStyleCoordinate} from "../../core/QTFlexStyleCoordinate";
import {QTFlexStyleBackground} from "../../core/QTFlexStyleBackground";
import {QTFlexStyleGradientBackground} from "../../core/QTFlexStyleGradientBackground";

export type QTWaterfallFlexStyle =
  QTFlexStyleMargin & QTFlexStylePadding &
  QTFlexStyleSize & QTFlexStyleSpacing &
  QTFlexStyleDecoration & QTFlexStyleCoordinate &
  QTFlexStyleBackground & QTFlexStyleGradientBackground
