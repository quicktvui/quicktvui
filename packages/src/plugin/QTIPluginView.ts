import {QTIView} from "../view/QTIView";

export interface QTIPluginView extends QTIView {
  dispatchFunction(funName: string, params: Array<any>): Promise<any>
}

export interface QTPluginViewEvent {
  sid?: string
  errorCode?: number
  errorMessage?: string
}

