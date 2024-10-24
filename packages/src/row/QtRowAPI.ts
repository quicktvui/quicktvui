import {QtViewAPI} from "../view/QtViewAPI";

export interface QtRowAPI extends QtViewAPI {

}

export function createQtRowAPI(viewAPI: QtViewAPI): QtRowAPI {

  return {
    ...viewAPI
  }
}
