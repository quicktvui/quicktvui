import {Native} from "@extscreen/es3-vue";
import {QTIViewVisibility} from "../view/QTIViewVisibility";
import {Ref} from "@vue/reactivity";
import {ESIView} from "@extscreen/es3-component";
import {QTFocusDirection} from "../focus/QTFocusDirection";
import {QTFocusDescendant} from "../focus/QTFocusDescendant";
import {QTDescendantFocusability} from "../focus/QTDescendantFocusability";
import {QTNativeParams} from "../core/QTNativeParams";
import {QTFocusDirectionName} from "../focus/QTFocusDirectionName";
import {QTEventData} from "../core/QTEventData";
import {QTLocation} from "../core/QTLocation";
import {QTViewState} from "../view/QTViewState";

export default function (viewRef: Ref<ESIView | undefined>) {

  function dispatchFunctionBySid(sid: string, funcName: string, args: Array<QTNativeParams>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'dispatchFunctionBySid', [sid, funcName, args]);
    }
  }

  function requestFocus(direction?: QTFocusDirection): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestFocus', [direction]);
    }
  }

  function requestChildFocus(position: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestChildFocus', [position]);
    }
  }

  function clearFocus(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'clearFocus');
    }
  }

  function requestFocusDirectly(direction?: QTFocusDirection): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestFocusDirectly', [direction]);
    }
  }

  function setVisibility(v: QTIViewVisibility): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'changeVisibility', [v])
    }
  }

  function requestRootLayout(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestRootLayout', [])
    }
  }

  function requestLayout(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestLayout', [])
    }
  }

  function setDescendantFocusability(descendant: QTFocusDescendant): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setDescendantFocusability', [descendant])
    }
  }

  function changeDescendantFocusability(descendant: QTDescendantFocusability): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'changeDescendantFocusability', [descendant])
    }
  }

  function forceUpdateRenderNode(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'forceUpdateRenderNode', [])
    }
  }

  function setBackGroundColor(color: string): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setBackGroundColor', [color])
    }
  }

  function layoutViewManual(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'layoutViewManual', [])
    }
  }

  function blockRootFocus(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'blockRootFocus', [])
    }
  }

  function unBlockRootFocus(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'unBlockRootFocus', [])
    }
  }

  function changeAlpha(alpha: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'changeAlpha', [alpha])
    }
  }

  function setScale(x: number, y: number, duration: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setScale', [x, y, duration])
    }
  }

  function setPosition(x: number, y: number, z: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setPosition', [x, y, z])
    }
  }

  function updateLayout(width: number, height: number, x: number, y: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateLayout', [width, height, x, y])
    }
  }

  function invalidate(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'invalidate', [])
    }
  }

  function dispatchFunctionForTarget(targetName: string, functionTargetName: string,
                                     params: Array<QTNativeParams>, delay: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'dispatchFunctionForTarget', [targetName, functionTargetName, params, delay])
    }
  }

  function setBlockFocusDirections(directionList: Array<QTFocusDirectionName>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setBlockFocusDirections', [directionList])
    }
  }

  function setBlockFocusDirectionsOnFail(directionList: Array<QTFocusDirectionName>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setBlockFocusDirectionsOnFail', [directionList])
    }
  }

  function setInitFocus(sid: string, delay?: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setInitFocus', [sid, delay])
    }
  }

  function setAutoFocus(sid: string, delay?: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setAutoFocus', [sid, delay])
    }
  }

  function enabledAutofocus(autofocus: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setAutofocus', [autofocus])
    }
  }

  function requestAutofocus(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestAutofocus', [])
    }
  }

  function hasFocus(): Promise<boolean> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'hasFocus', [], (res: boolean) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject(false)
    }
  }

  function isFocused(): Promise<boolean> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'isFocused', [], (res: boolean) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject(false)
    }
  }

  function getLocationOnScreen(): Promise<QTEventData<QTLocation>> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'getLocationOnScreen', [], (res: QTEventData<QTLocation>) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject()
    }
  }

  function getViewState(): Promise<QTViewState> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'getViewState', [], (res: QTViewState) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(position: number): Promise<QTViewState> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'getChildViewState', [position], (res: QTViewState) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject()
    }
  }


  return {
    dispatchFunctionBySid,
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
