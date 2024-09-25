import {QtViewAPI} from "../view/QtViewAPI";
import {QtBaseListViewAPI} from "../list/QtBaseListViewAPI";

export interface QtGridViewAPI extends QtViewAPI, QtBaseListViewAPI {
}

export function createQtGridViewAPI(viewAPI: QtViewAPI, listViewAPI: QtBaseListViewAPI): QtGridViewAPI {

  return {
    ...viewAPI,
    ...listViewAPI
  }
}
