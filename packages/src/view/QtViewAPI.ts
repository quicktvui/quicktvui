import {QTIViewVisibility} from "./QTIViewVisibility";
import {Native} from "@extscreen/es3-vue";
import {Ref, isRef} from "@vue/reactivity";
import {QTIView} from "./QTIView";
import {QTFocusDirection} from "../focus/QTFocusDirection";
import {QTFocusDescendant} from "../focus/QTFocusDescendant";
import {QTDescendantFocusability} from "../focus/QTDescendantFocusability";
import {QTNativeParams} from "../core/QTNativeParams";
import {QTFocusDirectionName} from "../focus/QTFocusDirectionName";

export interface QtViewAPI {

  requestFocus(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection)

  clearFocus(instance: string | Ref<QTIView | undefined>)

  requestFocusDirectly(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection)

  setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility)

  requestRootLayout(instance: string | Ref<QTIView | undefined>): void

  requestLayout(instance: string | Ref<QTIView | undefined>): void


  setDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTFocusDescendant): void

  changeDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTDescendantFocusability): void

  forceUpdateRenderNode(instance: string | Ref<QTIView | undefined>): void

  setBackGroundColor(instance: string | Ref<QTIView | undefined>, color: string): void

  layoutViewManual(instance: string | Ref<QTIView | undefined>): void

  blockRootFocus(instance: string | Ref<QTIView | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIView | undefined>): void

  changeAlpha(instance: string | Ref<QTIView | undefined>, alpha: number): void

  setScale(instance: string | Ref<QTIView | undefined>, x: number, y: number, duration: number): void

  setPosition(instance: string | Ref<QTIView | undefined>, x: number, y: number, z: number): void

  updateLayout(instance: string | Ref<QTIView | undefined>, width: number, height: number, x: number, y: number): void

  invalidate(instance: string | Ref<QTIView | undefined>): void

  dispatchFunctionForTarget(instance: string | Ref<QTIView | undefined>,
                            targetName: string, functionTargetName: string,
                            params: Array<QTNativeParams>, delay: number): void

  setBlockFocusDirections(instance: string | Ref<QTIView | undefined>,
                          directionList: Array<QTFocusDirectionName>): void

  setBlockFocusDirectionsOnFail(instance: string | Ref<QTIView | undefined>,
                                directionList: Array<QTFocusDirectionName>): void

  setInitFocus(instance: string | Ref<QTIView | undefined>,
               sid: string, delay?: number): void

  setAutoFocus(instance: string | Ref<QTIView | undefined>, sid: string, delay?: number): void

  enabledAutofocus(instance: string | Ref<QTIView | undefined>, autofocus: boolean): void

  requestAutofocus(instance: string | Ref<QTIView | undefined>): void
}

export function createQtViewAPI(): QtViewAPI {

  function requestFocus(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestFocus', [direction]]);
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function clearFocus(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'clearFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestFocusDirectly', [direction]]);
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'changeVisibility', [v]]);
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestRootLayout', []]);
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestLayout', []]);
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }


  function setDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTFocusDescendant): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setDescendantFocusability', [descendant]]);
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTDescendantFocusability): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'changeDescendantFocusability', [descendant]]);
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'forceUpdateRenderNode', []]);
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(instance: string | Ref<QTIView | undefined>, color: string): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setBackGroundColor', [color]]);
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'layoutViewManual', []]);
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'blockRootFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'unBlockRootFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(instance: string | Ref<QTIView | undefined>, alpha: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'changeAlpha', [alpha]]);
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(instance: string | Ref<QTIView | undefined>, x: number, y: number, duration: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setScale', [x, y, duration]]);
    } else if (isRef(instance)) {
      instance.value?.setScale(x, y, duration)
    }
  }

  function setPosition(instance: string | Ref<QTIView | undefined>, x: number, y: number, z: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setPosition', [x, y, z]]);
    } else if (isRef(instance)) {
      instance.value?.setPosition(x, y, z)
    }
  }

  function updateLayout(instance: string | Ref<QTIView | undefined>, width: number, height: number, x: number, y: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'updateLayout', [width, height, x, y]]);
    } else if (isRef(instance)) {
      instance.value?.updateLayout(width, height, x, y)
    }
  }

  function invalidate(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'invalidate', []]);
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(instance: string | Ref<QTIView | undefined>,
                                     targetName: string, functionTargetName: string,
                                     params: Array<QTNativeParams>, delay: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'dispatchFunctionForTarget', [targetName, functionTargetName, params, delay]]);
    } else if (isRef(instance)) {
      instance.value?.dispatchFunctionForTarget(targetName, functionTargetName, params, delay)
    }
  }

  function setBlockFocusDirections(instance: string | Ref<QTIView | undefined>,
                                   directionList: Array<QTFocusDirectionName>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setBlockFocusDirections', [directionList]]);
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(instance: string | Ref<QTIView | undefined>,
                                         directionList: Array<QTFocusDirectionName>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setBlockFocusDirectionsOnFail', [directionList]]);
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(instance: string | Ref<QTIView | undefined>,
                        sid: string, delay?: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setInitFocus', [sid, delay]]);
    } else if (isRef(instance)) {
      instance.value?.setInitFocus(sid, delay)
    }
  }

  function setAutoFocus(instance: string | Ref<QTIView | undefined>, sid: string, delay?: number): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setAutoFocus', [sid, delay]]);
    } else if (isRef(instance)) {
      instance.value?.setAutoFocus(sid, delay)
    }
  }

  function enabledAutofocus(instance: string | Ref<QTIView | undefined>, autofocus: boolean): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'setAutoFocus', [autofocus]]);
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(instance: string | Ref<QTIView | undefined>): void {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestAutofocus', []]);
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  return {
    requestFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility,
    requestRootLayout,
    requestLayout,
    setDescendantFocusability,
    changeDescendantFocusability,
    forceUpdateRenderNode,
    setBackGroundColor,
    layoutViewManual,
    blockRootFocus,
    unBlockRootFocus,
    changeAlpha,
    setScale,
    setPosition,
    updateLayout,
    invalidate,
    dispatchFunctionForTarget,
    setBlockFocusDirections,
    setBlockFocusDirectionsOnFail,
    setInitFocus,
    setAutoFocus,
    enabledAutofocus,
    requestAutofocus
  }
}
