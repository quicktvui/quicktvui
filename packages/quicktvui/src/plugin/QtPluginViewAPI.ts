import { isRef, Ref } from '@vue/reactivity'
import { isString } from '../utils/type'
import { Native } from '@extscreen/es3-vue'
import { QT_API_MODULE, QT_CALL_UI_FUNCTION } from '../qt/QtAPIModule'
import { QTIPluginView } from './QTIPluginView'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtPluginViewAPI extends QtBaseViewAPI {
  dispatchFunction(
    instance: string | Ref<QTIPluginView | undefined>,
    funName: string,
    params: Array<any>
  ): Promise<any>
}

export function createQtPluginViewAPI(viewAPI: QtBaseViewAPI): QtPluginViewAPI {
  function dispatchFunction(
    instance: string | Ref<QTIPluginView | undefined>,
    funName: string,
    params: Array<any>
  ): Promise<any> {
    if (isString(instance)) {
      return new Promise((resolve) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION,
          [instance, funName, params],
          (ret) => {
            resolve(ret)
          }
        )
      })
    } else if (isRef(instance) && instance && instance.value) {
      return instance.value!.dispatchFunction(funName, params)
    } else {
      return Promise.reject()
    }
  }

  return {
    ...viewAPI,
    dispatchFunction,
  }
}
