import {QtViewAPI} from "../view/QtViewAPI";

export interface QtButtonAPI extends QtViewAPI {

}

export function createQtButtonAPI(viewAPI: QtViewAPI): QtButtonAPI {

  return {
    ...viewAPI
  }
}
