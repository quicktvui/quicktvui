import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtQRCodeAPI extends QtBaseViewAPI {}

export function createQtQRCodeAPI(viewAPI: QtBaseViewAPI): QtQRCodeAPI {
  return {
    ...viewAPI,
  }
}
