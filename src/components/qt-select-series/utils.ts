export function getDataByPage(page, pageSize, totalSize, needFlag = true) {
  let result: Array<any> = [];
  let isLast = Math.floor(totalSize / pageSize) <= page;
  let size = isLast ? totalSize - page * pageSize : pageSize;
  for (let i = 0; i < size; i++) {
    let index = page * pageSize + i + 1;
    let index2 = index > 9 ? '' + index : '0' + index;
    result.push({
      // 选集标题
      title: i % 2 === 0 ? `第${page * pageSize + i + 1}集内容`:`第${page * pageSize + i + 1}集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容`,
      // 图文图片
      // cover: 'https://i.328888.xyz/2023/01/04/W49yq.md.jpeg',
      cover: 'https://www.huikez.com/uploads/allimg/2009/1-200921144Ub07.jpg',
      // flagText: needFlag ? `flag${page * pageSize + i}` : '',
      // flagText: (i !== 0 || page !== 0) ? i % 2 === 0 ? 'VIP' : '付费' : '',
      flagText: (i !== 0 || page !== 0) ? i % 2 === 0 ? true : true : false,
      // floatText: `float${page * pageSize + i}`,
      floatText: i % 2 === 0 ? '05:30' : '10:06',
      index2
    })
  }
  return result;
}

export function onLoadData(event, target, pageSize, totalCount) {
  let page = event.page; // 要加载的页数
  let dataArray = getDataByPage(page, pageSize, totalCount);
  target.setPageData(page, dataArray);
}

export function onLoadLRData(event, target, pageSize, totalCount) {
  let page = event.page; // 要加载的页数
  let dataArray = getLRDataByPage(page, pageSize, totalCount);
  target.setPageData(page, dataArray);
}

function getLRDataByPage(page, pageSize, totalSize) {
  let result: Array<any> = [];
  let isLast = Math.floor(totalSize / pageSize) <= page;
  let size = isLast ? totalSize - page * pageSize : pageSize;
  for (let i = 0; i < size; i++) {
    let index = page * pageSize + i + 1;
    let index2 = index > 9 ? '' + index : '0' + index;
    result.push({
      // 选集标题
      title: i % 2 === 0 ? `第${page * pageSize + i + 1}集内容`:`第${page * pageSize + i + 1}集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容集内容`,
      // 图文图片
      // cover: 'https://i.328888.xyz/2023/01/04/W49yq.md.jpeg',
      cover: 'https://www.huikez.com/uploads/allimg/2009/1-200921144Ub07.jpg',
      // flagText: needFlag ? `flag${page * pageSize + i}` : '',
      // flagText: (i !== 0 || page !== 0) ? i % 2 === 0 ? 'VIP' : '付费' : '',
      showVip: (i !== 0 || page !== 0) ? i % 2 === 0 ? true : true : false,
      // floatText: `float${page * pageSize + i}`,
      floatText: i % 2 === 0 ? '05:30' : '10:06',
      vip: {
        enable: true,
        text: 'VIP',
      },
      vipTitleStyle:{width:150,height:100},
      index2
    })
  }
  return result;
}

export function onLoadNumberData(event, target, pageSize, totalCount) {
  let page = event.page; // 要加载的页数
  let dataArray = getNumberDataByPage(page, pageSize, totalCount);
  target.setPageData(page, dataArray);
}

function getNumberDataByPage(page, pageSize, totalSize) {
  let result: Array<any> = [];
  let isLast = Math.floor(totalSize / pageSize) <= page;
  let size = isLast ? totalSize - page * pageSize : pageSize;
  for (let i = 0; i < size; i++) {
    result.push({
      showVip: (i !== 0 || page !== 0) ? i % 2 === 0 ? true : true : false,
      vip: {
        enable: false,
        text: 'VIP',
      },
      title: 'Z--' + page * pageSize + i
    })
  }
  return result;
}

export let initBean;
initBean = {
  initParam: {
    totalCount: 50, // 总数量
    pageSize: 15, // 每次数据加载量
    contentWidth: 1800,
    contentHeight: 160,
    enableGroup: true,
    // groupSize: 5,
    // pageDisplayCount: 4,
    itemGap: 20,
    groupHeight: 46,
    groupTopMargin: 24,
    // scrollTargetOffset: 0
  },
  template: {
    type: '',
    width: 560,
    height: 160,
    titleSize: 26,
    focusScale: 1.1,
    floatTitleSize: 20,
    isFree: true,
    extra: {
      imgWidth: 268,
      imgHeight: 160,
      textColor: {
        normal: '#80FFFFFF',
        focused: '#ffFFFFFF',
        selected: '#ffFFFFFF',
      },
      cornerBgColor: {
        orientation: 'LEFT_RIGHT',
        cornerRadius: [0, 0, 0, 6],
        color: ['#B67827', '#DBAF5C']
      },
    }
  },
  group: {
    itemWidth: 85,
    itemHeight: 46,
    itemGap: 50,
    textSize: 30,
    textColor: {
      normal: '#80FFFFFF',
      focused: '#000000',
      selected: '#F5F5F5',
    },
    focusBackground: {
      orientation: 'TL_BR',
      cornerRadius: [40, 40, 40, 40],
      color: ['#F5F5F5', '#F5F5F5'],
      padding: [34, 6]
    }
  }
}
