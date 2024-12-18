import {QtBaseViewAPI} from "../base/QtBaseViewAPI";

export interface QtButtonAPI extends QtBaseViewAPI {

}

export function createQtButtonAPI(viewAPI: QtBaseViewAPI): QtButtonAPI {

  return {
    ...viewAPI
  }
}
