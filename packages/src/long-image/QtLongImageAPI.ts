import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtLongImageAPI extends QtBaseViewAPI {}

export function createQtLongImageAPI(viewAPI: QtBaseViewAPI): QtLongImageAPI {
  return {
    ...viewAPI,
  }
}
