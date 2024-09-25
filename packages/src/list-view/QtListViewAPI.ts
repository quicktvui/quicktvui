import {QtViewAPI} from "../view/QtViewAPI";
import {QtBaseListViewAPI} from "../list/QtBaseListViewAPI";

export interface QtListViewAPI extends QtViewAPI, QtBaseListViewAPI {
}

export function createQtListViewAPI(viewAPI: QtViewAPI, listViewAPI: QtBaseListViewAPI): QtListViewAPI {

  return {
    ...viewAPI,
    ...listViewAPI
  }
}
