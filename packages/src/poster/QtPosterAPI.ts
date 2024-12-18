import {QtBaseViewAPI} from "../base/QtBaseViewAPI";

export interface QtPosterAPI extends QtBaseViewAPI {

}

export function createQtPosterAPI(viewAPI: QtBaseViewAPI): QtPosterAPI {

  return {
    ...viewAPI
  }
}
