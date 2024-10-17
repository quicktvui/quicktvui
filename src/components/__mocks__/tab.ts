import {QTTabItem} from "@quicktvui/quicktvui3";

export function buildTabItemList() {
  //tab item list
  const tabItemList: Array<QTTabItem> = []
  for (let i = 0; i < 15; i++) {
    let tabItem: QTTabItem = {
      _id: '' + i,
      type: 20000,
      text: 'Tab:' + i,
      titleSize: 20,
      decoration: {
        left: 40,
        right: 20,
      },
      sections: []
    }
    tabItemList.push(tabItem)
  }
  return tabItemList
}
