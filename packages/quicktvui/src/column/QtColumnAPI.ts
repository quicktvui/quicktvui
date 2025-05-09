import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtColumnAPI extends QtBaseViewAPI {}

export function createQtColumnAPI(viewAPI: QtBaseViewAPI): QtColumnAPI {
  return {
    ...viewAPI,
  }
}
