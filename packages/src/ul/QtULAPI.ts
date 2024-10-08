import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {QTULInitPosition} from "./QTULInitPosition";
import {QTPosition} from "../core/QTPosition";
import {QTIUL} from "./QTIUL";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION, QT_CALL_UI_FUNCTION_WITH_PROMISE} from "../qt/QtAPI";

export interface QtULAPI extends QtViewAPI {

  scrollToIndex(instance: string | Ref<QTIUL | undefined>, x: number, y: number, animated: boolean, duration: number, offset: number): void

  setInitPosition(instance: string | Ref<QTIUL | undefined>, initPosition: QTULInitPosition): void

  clearInitPosition(instance: string | Ref<QTIUL | undefined>): void

  scrollToContentOffset(instance: string | Ref<QTIUL | undefined>, x: number, y: number, animated: boolean, duration: number): void

  scrollToTop(instance: string | Ref<QTIUL | undefined>): void

  setSelectChildPosition(instance: string | Ref<QTIUL | undefined>, position: number, changeFocusTarget?: boolean): void

  setTargetFocusChildPosition(instance: string | Ref<QTIUL | undefined>, position: number): void

  refreshListData(instance: string | Ref<QTIUL | undefined>): void

  getScrollOffset(instance: string | Ref<QTIUL | undefined>): Promise<QTPosition>

}

export function createQtULAPI(viewAPI: QtViewAPI): QtULAPI {

  function scrollToIndex(instance: string | Ref<QTIUL | undefined>, x: number, y: number, animated: boolean, duration: number, offset: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToIndex', [x, y, animated, duration, offset]]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'scrollToIndex', [x, y, animated, duration, offset]);
    }
  }

  function setInitPosition(instance: string | Ref<QTIUL | undefined>, initPosition: QTULInitPosition): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setInitPosition', [initPosition]]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'setInitPosition', [initPosition]);
    }
  }

  function clearInitPosition(instance: string | Ref<QTIUL | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearInitPosition', []]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'clearInitPosition', []);
    }
  }

  function scrollToContentOffset(instance: string | Ref<QTIUL | undefined>, x: number, y: number, animated: boolean, duration: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToContentOffset', [x, y, animated, duration]]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'scrollToContentOffset', [x, y, animated, duration]);
    }
  }

  function scrollToTop(instance: string | Ref<QTIUL | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToTop', []]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'scrollToTop', []);
    }
  }

  function setSelectChildPosition(instance: string | Ref<QTIUL | undefined>, position: number, changeFocusTarget?: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSelectChildPosition', [position, changeFocusTarget]]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'setSelectChildPosition', [position, changeFocusTarget]);
    }
  }

  function setTargetFocusChildPosition(instance: string | Ref<QTIUL | undefined>, position: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTargetFocusChildPosition', [position]]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'setTargetFocusChildPosition', [position]);
    }
  }

  function refreshListData(instance: string | Ref<QTIUL | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'refreshListData', []]);
    } else if (isRef(instance) && instance.value) {
      Native.callUIFunction(instance.value, 'refreshListData', []);
    }
  }

  function getScrollOffset(instance: string | Ref<QTIUL | undefined>): Promise<QTPosition> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'getScrollOffset', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(instance.value!, 'getScrollOffset', [], (res) => {
          resolve(res);
        });
      });
    } else {
      return Promise.reject()
    }
  }

  return {
    ...viewAPI,
    scrollToIndex,
    setInitPosition,
    clearInitPosition,
    scrollToContentOffset,
    scrollToTop,
    setSelectChildPosition,
    setTargetFocusChildPosition,
    refreshListData,
    getScrollOffset,
  }
}
