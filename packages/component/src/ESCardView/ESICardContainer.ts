import { ESCardEvent } from './ESCardEvent'

export interface ESICardContainer {
  load(cardId: string)

  loadWithoutCache(cardId: string)

  reload()

  autoRecycle(value: boolean)

  getLoadingStatus()

  sendEvent2Vue(event: ESCardEvent)

  reset()

  recycle()

  removeCache()

  resizeCacheSize(size: number)

  clearAllCache()
}
