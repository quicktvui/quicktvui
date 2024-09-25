import {ESIView} from "@extscreen/es3-component";
import {QTIViewVisibility} from "../view/QTIViewVisibility";
import {QTFocusDirection} from "../focus/QTFocusDirection";
import {QTFocusDescendant} from "../focus/QTFocusDescendant";
import {QTDescendantFocusability} from "../focus/QTDescendantFocusability";
import {QTNativeParams} from "../core/QTNativeParams";
import {QTFocusDirectionName} from "../focus/QTFocusDirectionName";
import {QTEventData} from "../core/QTEventData";
import {QTLocation} from "../core/QTLocation";
import {QTViewState} from "../view/QTViewState";

export interface QTIBaseView extends ESIView {

  requestFocus(direction?: QTFocusDirection): void

  requestChildFocus(position: number, direction?: QTFocusDirection): void

  requestChildFocusAtIndex(position: number): void

  clearFocus(): void

  requestFocusDirectly(direction?: QTFocusDirection): void

  setVisibility(visibility: QTIViewVisibility): void

  dispatchFunctionBySid(sid: string, funcName: string, params: Array<QTNativeParams>): void

  requestRootLayout(): void

  requestLayout(): void

  setDescendantFocusability(descendant: QTFocusDescendant): void

  changeDescendantFocusability(descendant: QTDescendantFocusability): void

  forceUpdateRenderNode(): void

  setBackGroundColor(color: string): void

  layoutViewManual(): void

  blockRootFocus(): void

  unBlockRootFocus(): void

  changeAlpha(alpha: number): void

  setScale(x: number, y: number, duration: number): void

  setPosition(x: number, y: number, z: number): void

  updateLayout(width: number, height: number, x: number, y: number): void

  invalidate(): void

  dispatchFunctionForTarget(targetName: string, functionTargetName: string,
                            params: Array<QTNativeParams>, delay: number): void

  setBlockFocusDirections(directionList: Array<QTFocusDirectionName>): void

  setBlockFocusDirectionsOnFail(directionList: Array<QTFocusDirectionName>): void

  setInitFocus(sid: string, delay?: number): void

  setAutoFocus(sid: string, delay?: number): void

  enabledAutofocus(autofocus: boolean): void

  requestAutofocus(): void

  hasFocus(): Promise<boolean>

  isFocused(): Promise<boolean>

  getLocationOnScreen(): Promise<QTEventData<QTLocation>>

  getViewState(): Promise<QTViewState>

  getChildViewState(position: number): Promise<QTViewState>

  clearMemoryFocused(): void

  showDialog(show: boolean): void
}
