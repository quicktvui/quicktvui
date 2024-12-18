import {QtBaseViewAPI} from "../base/QtBaseViewAPI";

export interface QtLoadingAPI extends QtBaseViewAPI {

}

export function createQtLoadingAPI(viewAPI: QtBaseViewAPI): QtLoadingAPI {

  return {
    ...viewAPI
  }
}
