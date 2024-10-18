import {QTTabItem} from "@quicktvui/quicktvui3";

export function buildTabItemList(count: number = 15) {
  //tab item list
  const tabItemList: Array<QTTabItem> = []
  for (let i = 0; i < count; i++) {
    let tabItem: QTTabItem = {
      _id: '' + i,
      type: 20000,
      text: 'Tab:' + i,
      titleSize: 20,
      decoration: {
        left: 40,
        right: 20,
      },
      content: []
    }
    tabItemList.push(tabItem)
  }
  return tabItemList
}
