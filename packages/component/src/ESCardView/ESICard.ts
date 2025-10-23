export interface ESICard {
  load(cardId: string, useCache: boolean)

  reload()

  showDefaultBg(data: boolean)

  requestCardFocus()
}
