import {Native} from "@extscreen/es3-vue";
import {QTIViewVisibility} from "../view/QTIViewVisibility";
import {Ref} from "@vue/reactivity";
import {ESIView} from "@extscreen/es3-component";
import {QTFocusDirection} from "../focus/QTFocusDirection";
import {QTFocusDescendant} from "../focus/QTFocusDescendant";
import {QTDescendantFocusability} from "../focus/QTDescendantFocusability";
import {QTNativeParams} from "../core/QTNativeParams";
import {QTFocusDirectionName} from "../focus/QTFocusDirectionName";

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


  return {
    dispatchFunctionBySid,
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
