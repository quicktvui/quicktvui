import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPI";
import {QTIListItem} from "./QTIListItem";

export interface QtListItemAPI extends QtViewAPI {

  updateItem(instance: string | Ref<QTIListItem | undefined>, posInList: number, data: Object)

  dispatchItemFunction(instance: string | Ref<QTIListItem | undefined>, position: number, name: string, funcName: string, params: any)

  updateItemProps(instance: string | Ref<QTIListItem | undefined>, position: number, name: string, toUpdateMap: Object)

  batch(instance: string | Ref<QTIListItem | undefined>, position: number)

}

export function createQtListItemAPI(viewAPI: QtViewAPI): QtListItemAPI {

  function updateItem(instance: string | Ref<QTIListItem | undefined>, posInList: number, data: Object) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItem', [posInList, data]]);
    } else if (isRef(instance)) {
      instance.value?.updateItem(posInList, data)
    }
  }

  function dispatchItemFunction(instance: string | Ref<QTIListItem | undefined>, position: number, name: string, funcName: string, params: any) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'dispatchItemFunction', [position, name, funcName, params]]);
    } else if (isRef(instance)) {
      instance.value?.dispatchItemFunction(position, name, funcName, params)
    }
  }

  function updateItemProps(instance: string | Ref<QTIListItem | undefined>, position: number, name: string, toUpdateMap: Object) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItemProps', [position, name, toUpdateMap]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemProps(position, name, toUpdateMap)
    }
  }

  function batch(instance: string | Ref<QTIListItem | undefined>, position: number) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'batch', [position]]);
    } else if (isRef(instance)) {
      instance.value?.batch(position)
    }
  }

  return {
    ...viewAPI,
    updateItem,
    dispatchItemFunction,
    updateItemProps,
    batch,
  }
}
