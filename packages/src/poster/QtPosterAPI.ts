import {QtViewAPI} from "../view/QtViewAPI";

export interface QtPosterAPI extends QtViewAPI {

}

export function createQtPosterAPI(viewAPI: QtViewAPI): QtPosterAPI {

  return {
    ...viewAPI
  }
}
