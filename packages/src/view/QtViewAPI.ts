import {QTIViewVisibility} from "./QTIViewVisibility";
import {Native} from "@extscreen/es3-vue";
import {Ref, isRef} from "@vue/reactivity";
import {QTIView} from "./QTIView";
import {QTFocusDirection} from "../focus/QTFocusDirection";
import {QTFocusDescendant} from "../focus/QTFocusDescendant";
import {QTDescendantFocusability} from "../focus/QTDescendantFocusability";
import {QTNativeParams} from "../core/QTNativeParams";
import {QTFocusDirectionName} from "../focus/QTFocusDirectionName";
import {QTEventData} from "../core/QTEventData";
import {QTLocation} from "../core/QTLocation";
import {QTViewState} from "./QTViewState";
import {QT_CALL_UI_FUNCTION, QT_CALL_UI_FUNCTION_WITH_PROMISE, QT_API_MODULE} from "../qt/QtAPI";
import {isString} from "../utils/type";

export interface QtViewAPI {

  requestFocus(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection): void

  requestChildFocus(instance: string | Ref<QTIView | undefined>, position: number): void

  clearFocus(instance: string | Ref<QTIView | undefined>): void

  requestFocusDirectly(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection): void

  setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility): void

  requestRootLayout(instance: string | Ref<QTIView | undefined>): void

  requestLayout(instance: string | Ref<QTIView | undefined>): void

  //
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


  //
  hasFocus(instance: string | Ref<QTIView | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTIView | undefined>): Promise<boolean>

  getLocationOnScreen(instance: string | Ref<QTIView | undefined>): Promise<QTEventData<QTLocation>>

  getViewState(instance: string | Ref<QTIView | undefined>): Promise<QTViewState>

  getChildViewState(instance: string | Ref<QTIView | undefined>, position: number): Promise<QTViewState>
}

export function createQtViewAPI(): QtViewAPI {

  function requestFocus(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestFocus', [direction]]);
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(instance: string | Ref<QTIView | undefined>, position: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestChildFocus', [position]]);
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIView | undefined>) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(instance: string | Ref<QTIView | undefined>, direction?: QTFocusDirection) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestFocusDirectly', [direction]]);
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'changeVisibility', [v]]);
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIView | undefined>) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestRootLayout', []]);
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIView | undefined>) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestLayout', []]);
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }


  function setDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTFocusDescendant): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setDescendantFocusability', [descendant]]);
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(instance: string | Ref<QTIView | undefined>, descendant: QTDescendantFocusability): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'changeDescendantFocusability', [descendant]]);
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'forceUpdateRenderNode', []]);
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(instance: string | Ref<QTIView | undefined>, color: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setBackGroundColor', [color]]);
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'layoutViewManual', []]);
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'blockRootFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'unBlockRootFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(instance: string | Ref<QTIView | undefined>, alpha: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'changeAlpha', [alpha]]);
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(instance: string | Ref<QTIView | undefined>, x: number, y: number, duration: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setScale', [x, y, duration]]);
    } else if (isRef(instance)) {
      instance.value?.setScale(x, y, duration)
    }
  }

  function setPosition(instance: string | Ref<QTIView | undefined>, x: number, y: number, z: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setPosition', [x, y, z]]);
    } else if (isRef(instance)) {
      instance.value?.setPosition(x, y, z)
    }
  }

  function updateLayout(instance: string | Ref<QTIView | undefined>, width: number, height: number, x: number, y: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateLayout', [width, height, x, y]]);
    } else if (isRef(instance)) {
      instance.value?.updateLayout(width, height, x, y)
    }
  }

  function invalidate(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'invalidate', []]);
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(instance: string | Ref<QTIView | undefined>,
                                     targetName: string, functionTargetName: string,
                                     params: Array<QTNativeParams>, delay: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'dispatchFunctionForTarget', [targetName, functionTargetName, params, delay]]);
    } else if (isRef(instance)) {
      instance.value?.dispatchFunctionForTarget(targetName, functionTargetName, params, delay)
    }
  }

  function setBlockFocusDirections(instance: string | Ref<QTIView | undefined>,
                                   directionList: Array<QTFocusDirectionName>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setBlockFocusDirections', [directionList]]);
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(instance: string | Ref<QTIView | undefined>,
                                         directionList: Array<QTFocusDirectionName>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setBlockFocusDirectionsOnFail', [directionList]]);
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(instance: string | Ref<QTIView | undefined>,
                        sid: string, delay?: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setInitFocus', [sid, delay]]);
    } else if (isRef(instance)) {
      instance.value?.setInitFocus(sid, delay)
    }
  }

  function setAutoFocus(instance: string | Ref<QTIView | undefined>, sid: string, delay?: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setAutoFocus', [sid, delay]]);
    } else if (isRef(instance)) {
      instance.value?.setAutoFocus(sid, delay)
    }
  }

  function enabledAutofocus(instance: string | Ref<QTIView | undefined>, autofocus: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setAutoFocus', [autofocus]]);
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(instance: string | Ref<QTIView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestAutofocus', []]);
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(instance: string | Ref<QTIView | undefined>): Promise<boolean> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'hasFocus', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(instance: string | Ref<QTIView | undefined>): Promise<boolean> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'isFocused', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(instance: string | Ref<QTIView | undefined>): Promise<QTEventData<QTLocation>> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'getLocationOnScreen', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(instance: string | Ref<QTIView | undefined>): Promise<QTViewState> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'getViewState', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(instance: string | Ref<QTIView | undefined>, position: number): Promise<QTViewState> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'getChildViewState', [position]], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    requestFocus,
    requestChildFocus,
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
    requestAutofocus,
    hasFocus,
    isFocused,
    getLocationOnScreen,
    getViewState,
    getChildViewState
  }
}
