import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtRowAPI extends QtBaseViewAPI {}

export function createQtRowAPI(viewAPI: QtBaseViewAPI): QtRowAPI {
  return {
    ...viewAPI,
  }
}
