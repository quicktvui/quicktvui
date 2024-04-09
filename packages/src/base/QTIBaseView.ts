import {ESIView} from "@extscreen/es3-component";
import {QTIViewVisibility} from "../view/QTIViewVisibility";

export interface QTIBaseView extends ESIView {

  requestFocus(): void

  clearFocus(): void

  requestFocusDirectly(): void

  setVisibility(visibility: QTIViewVisibility): void

  dispatchFunctionBySid(sid: string, funcName: string, args: any[]): void
}
