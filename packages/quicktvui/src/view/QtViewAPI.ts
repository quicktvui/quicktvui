import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtViewAPI extends QtBaseViewAPI {}

export function createQtViewAPI(viewAPI: QtBaseViewAPI): QtViewAPI {
  return {
    ...viewAPI,
  }
}
