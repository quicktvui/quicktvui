import {QtViewAPI} from "../view/QtViewAPI";

export interface QtLoadingAPI extends QtViewAPI {

}

export function createQtLoadingAPI(viewAPI: QtViewAPI): QtLoadingAPI {

  return {
    ...viewAPI
  }
}
