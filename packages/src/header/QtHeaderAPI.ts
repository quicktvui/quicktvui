import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtHeaderAPI extends QtBaseViewAPI {}

export function createQtHeaderAPI(viewAPI: QtBaseViewAPI): QtHeaderAPI {
  return {
    ...viewAPI,
  }
}
