import {QtViewAPI} from "../view/QtViewAPI";

export interface QtQRCodeAPI extends QtViewAPI {

}

export function createQtQRCodeAPI(viewAPI: QtViewAPI): QtQRCodeAPI {

  return {
    ...viewAPI
  }
}
