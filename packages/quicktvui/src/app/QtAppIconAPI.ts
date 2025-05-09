import { isRef, Ref } from '@vue/reactivity'
import { isString } from '../utils/type'
import { Native } from '@extscreen/es3-vue'
import { QT_API_MODULE, QT_CALL_UI_FUNCTION } from '../qt/QtAPIModule'
import { QTIAppIcon } from './QTIAppIcon'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtAppIconAPI extends QtBaseViewAPI {
  setPackageName(instance: string | Ref<QTIAppIcon | undefined>, packageName: string): void

  setRoundingRadius(instance: string | Ref<QTIAppIcon | undefined>, roundingRadius: number): void
}

export function createQtAppIconAPI(viewAPI: QtBaseViewAPI): QtAppIconAPI {
  function setPackageName(
    instance: string | Ref<QTIAppIcon | undefined>,
    packageName: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setPackageName',
        [packageName],
      ])
    } else if (isRef(instance)) {
      instance.value?.setPackageName(packageName)
    }
  }

  function setRoundingRadius(
    instance: string | Ref<QTIAppIcon | undefined>,
    roundingRadius: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setRoundingRadius',
        [roundingRadius],
      ])
    } else if (isRef(instance)) {
      instance.value?.setRoundingRadius(roundingRadius)
    }
  }

  return {
    ...viewAPI,
    setPackageName,
    setRoundingRadius,
  }
}
