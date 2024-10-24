import {QtViewAPI} from "../view/QtViewAPI";

export interface QtColumnAPI extends QtViewAPI {

}

export function createQtColumnAPI(viewAPI: QtViewAPI): QtColumnAPI {

  return {
    ...viewAPI
  }
}
