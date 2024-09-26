export interface QTIListItem {

  updateItem(posInList: number, data: Object)

  dispatchItemFunction(position: number, name: string, funcName: string, params: any)

  updateItemProps(position: number, name: string, toUpdateMap: Object)

  batch(position: number)

}
