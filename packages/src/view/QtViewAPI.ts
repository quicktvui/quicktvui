import {QTIViewVisibility} from "./QTIViewVisibility";
import {Native} from "@extscreen/es3-vue";

export interface QtViewAPI {

  requestFocus(sid: string)

  clearFocus(sid: string)

  requestFocusDirectly(sid: string)

  setVisibility(sid: string, v: QTIViewVisibility)

}

export function createQtViewAPI(): QtViewAPI {

  function requestFocus(sid: string) {
    Native.callNative('ExtendModule', 'callFunction', [sid, 'requestFocus', []]);
  }

  function clearFocus(sid: string) {
    Native.callNative('ExtendModule', 'callFunction', [sid, 'clearFocus', []]);
  }

  function requestFocusDirectly(sid: string) {
    Native.callNative('ExtendModule', 'callFunction', [sid, 'requestFocusDirectly', []]);
  }

  function setVisibility(sid: string, v: QTIViewVisibility) {
    Native.callNative('ExtendModule', 'callFunction', [sid, 'changeVisibility', [v]]);
  }


  return {
    requestFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility,
  }
}
