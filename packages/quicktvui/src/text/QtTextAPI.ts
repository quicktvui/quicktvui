import { isRef, Ref } from '@vue/reactivity'
import { isString } from '../utils/type'
import { Native } from '@extscreen/es3-vue'
import { QT_API_MODULE, QT_CALL_UI_FUNCTION } from '../qt/QtAPIModule'
import { QTTextSpan } from './QTTextSpan'
import { QTIText } from './QTIText'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtTextAPI extends QtBaseViewAPI {
  setText(instance: string | Ref<QTIText | undefined>, text: string): void

  setTextSize(instance: string | Ref<QTIText | undefined>, size: number): void

  setTextColor(instance: string | Ref<QTIText | undefined>, color: string): void

  textSpan(instance: string | Ref<QTIText | undefined>, span: QTTextSpan): void
}

export function createQtTextAPI(viewAPI: QtBaseViewAPI): QtTextAPI {
  function setText(instance: string | Ref<QTIText | undefined>, text: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setText', [text]])
    } else if (isRef(instance)) {
      instance.value?.setText(text)
    }
  }

  function setTextSize(instance: string | Ref<QTIText | undefined>, size: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTextSize', [size]])
    } else if (isRef(instance)) {
      instance.value?.setTextSize(size)
    }
  }

  function setTextColor(instance: string | Ref<QTIText | undefined>, color: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTextColor', [color]])
    } else if (isRef(instance)) {
      instance.value?.setTextColor(color)
    }
  }

  function textSpan(instance: string | Ref<QTIText | undefined>, span: QTTextSpan): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'textSpan', [span]])
    } else if (isRef(instance)) {
      instance.value?.textSpan(span)
    }
  }

  return {
    ...viewAPI,
    setText,
    setTextSize,
    setTextColor,
    textSpan,
  }
}
