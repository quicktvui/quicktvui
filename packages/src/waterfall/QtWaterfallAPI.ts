import {QtViewAPI} from "../view/QtViewAPI";
import {QtBaseListViewAPI} from "../list/QtBaseListViewAPI";

export interface QtWaterfallAPI extends QtViewAPI, QtBaseListViewAPI {
}

export function createQtWaterfallAPI(viewAPI: QtViewAPI, listViewAPI: QtBaseListViewAPI): QtWaterfallAPI {

  return {
    ...viewAPI,
    ...listViewAPI
  }
}
