import {QTMediaSeriesType} from "./QTMediaSeriesType";
import {QTMediaSeriesGroup} from "./QTMediaSeriesGroup";
import {QTMediaSeriesStyleType} from "./QTMediaSeriesStyleType";
import {QTMediaSeriesData} from "./QTMediaSeriesData";
import {QTMediaSeries} from "./QTMediaSeries";


export function buildGroupParams(type: QTMediaSeriesType,
                                 group: QTMediaSeriesGroup,
                                 styleType: QTMediaSeriesStyleType,
                                 data: QTMediaSeriesData) {
  const groupParams: any = {}
  if (group.enable) {

    switch (type) {
      case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER:
        groupParams.groupSize = 10;
        break;
      case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT:
        groupParams.groupSize = 3;
        break;
      default:
        groupParams.groupSize = group.size;
        break;
    }
    const groupStyle = group.groupStyle
    if (groupStyle){
      if (groupStyle.groupMarginLeft) groupParams.groupMarginLeft = groupStyle.groupMarginLeft
      if (groupStyle.itemWidth) groupParams.itemWidth = groupStyle.itemWidth
      if (groupStyle.itemHeight) groupParams.itemHeight = groupStyle.itemHeight
      if (groupStyle.itemGap) groupParams.itemGap = groupStyle.itemGap
      if (groupStyle.mark) groupParams.mark = groupStyle.mark
    }
    if (styleType == QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_VIP) {
      groupParams.textColor = groupStyle?.textVipColor ?? {
        normal: '#80FFFFFF',
        focused: '#603314',
        selected: '#FFD97C',
      }
      groupParams.focusBackground = groupStyle?.focusVipBackground ?? {
        orientation: 'LEFT_RIGHT',
        cornerRadius: [40, 40, 40, 40],
        color: ['#FFE398', '#EEB364'],
        padding: [34, 6]
      }
      groupParams.mark = groupStyle?.mark ?? {
        color: '#FFD97C'
      }
    }
    else if (groupStyle){
      if (groupStyle.textColor) groupParams.textColor = groupStyle.textColor
      if (groupStyle.focusBackground) groupParams.focusBackground = groupStyle.focusBackground
      if (groupStyle.background) groupParams.background = groupStyle.background
    }
  }
  return groupParams
}

export function buildScrollParams(type: QTMediaSeriesType,
                                  group: QTMediaSeriesGroup,
                                  styleType: QTMediaSeriesStyleType,
                                  data: QTMediaSeriesData) {
  if (type === QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER) {
    return {
      scrollType: 1,
      pageDisplayCount: 10,
      paddingForPageLeft: 0,
      paddingForPageRight: 0,
    };
  }
}

export function buildCommonParams(type: QTMediaSeriesType,
                                  group: QTMediaSeriesGroup,
                                  styleType: QTMediaSeriesStyleType,
                                  data: QTMediaSeriesData) {
  const contentHeight = buildMediaSeriesContentHeight(type, group, styleType, data)
  switch (type) {
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TOP_DOWN:
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT:
      return {
        contentWidth: 1740,
        itemGap: data?.dataStyle?.itemGap ?? 36,
        initPosition: data.initPosition,
        contentHeight: contentHeight
      };
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER:
      return {
        contentWidth: 1740,
        itemGap: data?.dataStyle?.itemGap ?? 15.6,
        initPosition: data.initPosition,
        contentHeight: contentHeight
      };
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT:
      return {};
  }
}

export function buildLeftRightParams(type: QTMediaSeriesType,
                                     group: QTMediaSeriesGroup,
                                     styleType: QTMediaSeriesStyleType,
                                     data: QTMediaSeriesData) {
  const isVip = styleType == QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_VIP
  let param: any = {

    //data
    initPosition: data.initPosition,

    //content
    contentWidth: 1740,
    contentHeight: 160,
    itemGap: 36,

    //group
    enableGroup: group.enable,
    groupSize: group.size,
    groupHeight: 46,
    groupTopMargin: 24,
    group: null,
    //
    template: null,
  };
  param.template = {
    titleSize: 28,
    floatTitleSize: 20,
    isFree: !isVip,
    type: 'leftRight',
    width: 560,
    height: 160,
    focusScale: 1.1,
  };
  param.template.extra = {
    imgWidth: 268,
    imgHeight: 160,
    textColor: {
      normal: '#80FFFFFF',
      focused: isVip ? '#FFD97C' : '#ffffffff',
      selected: isVip ? '#FFD97C' : '#ffffffff',
    },
    cornerBgColor: {
      orientation: 'LEFT_RIGHT',
      cornerRadius: [4, 4, 4, 4],
      color: ['#B67827', '#DBAF5C']
    },
  }
  param.group = {
    itemWidth: 85,
    itemHeight: 46,
    itemGap: 50,
    textSize: 30,
    textColor: {
      normal: '#80FFFFFF',
      focused: isVip ? '#603314' : '#000000',
      selected: isVip ? '#FFD97C' : '#F5F5F5',
    },
    focusBackground: {
      orientation: 'LEFT_RIGHT',
      cornerRadius: [40, 40, 40, 40],
      color: [isVip ? '#FFE398' : '#F5F5F5', isVip ? '#EEB364' : '#F5F5F5'],
      padding: [34, 6]
    },
    mark: {
      color: isVip ? '#FFD97C' : '#FFFFFF'
    }
  };
  return param;
}

export function buildMediaSeriesContentHeight(type: QTMediaSeriesType,
                                              group: QTMediaSeriesGroup,
                                              styleType: QTMediaSeriesStyleType,
                                              data: QTMediaSeriesData) {
  switch (type) {
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT:
      break
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER:
      return data.dataStyle?.itemHeight ?? 80
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT:
      return data.dataStyle?.itemHeight ?? 100
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TOP_DOWN:
      break
  }
  return -1
}


export function buildMediaSeriesHeight(type: QTMediaSeriesType,
                                       group: QTMediaSeriesGroup,
                                       styleType: QTMediaSeriesStyleType,
                                       data: QTMediaSeriesData) {
  switch (type) {
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT:
      break
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER:
      return 80 + (group.enable ? 70 : 0);
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT:
      return 100 + (group.enable ? 70 : 0);
    case QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TOP_DOWN:
      break
  }
  return -1
}


export function buildSeriesLeftRightHeight(type: QTMediaSeriesType,
                                           group: QTMediaSeriesGroup,
                                           styleType: QTMediaSeriesStyleType,
                                           data: QTMediaSeriesData,
                                           params: any) {
  return group.enable ?
    params.value.template.height
    + params.value.groupHeight
    + params.value.groupTopMargin
    : params.value.template.height;
}


export function buildSeriesNumberData(page: number, pageSize: number, dataArray: Array<QTMediaSeries>)
  : Array<QTMediaSeries> {
  const result: Array<QTMediaSeries> = [];
  if (dataArray.length > 0) {
    const titleStyle = {
      width: 160,
      height: 80
    }
    const noneStyle = {
      width: 0,
      height: 0
    }
    const markStyle = {
      width: 24,
      height: 25
    }

    dataArray.forEach((item, index) => {
      let title = page * pageSize + index + 1;
      let title2 = title > 9 ? '' + title : '0' + title;
      const numberItem: QTMediaSeries = {
        id: item.id,
        title: title2,
        vip: item.vip,
      }
      if (item.vip && item.vip!.enable) {
        numberItem.vipTitleStyle = titleStyle
        numberItem.vipMarkStyle = markStyle
        numberItem.normalTitleStyle = noneStyle
        numberItem.normalMarkStyle = noneStyle
      } else {
        numberItem.vipTitleStyle = noneStyle
        numberItem.vipMarkStyle = noneStyle
        numberItem.normalTitleStyle = titleStyle
        numberItem.normalMarkStyle = markStyle
      }
      result.push(numberItem);
    });
  }
  return result;
}

export function buildSeriesTextData(page: number, pageSize: number, dataArray: Array<QTMediaSeries>)
  : Array<QTMediaSeries> {
  if (dataArray.length > 0) {
    const titleStyle = {
      width: 373,
      height: 100
    }
    const noneStyle = {
      width: 0,
      height: 0
    }
    const markStyle = {
      width: 24,
      height: 25
    }
    dataArray.forEach((item, index) => {
      if (item.vip && item.vip!.enable) {
        item.vipTitleStyle = item?.vipTitleStyle ?? titleStyle
        item.vipMarkStyle = item?.vipMarkStyle ?? markStyle
        item.normalTitleStyle = noneStyle
        item.normalMarkStyle = noneStyle
      } else {
        item.vipTitleStyle = noneStyle
        item.vipMarkStyle = noneStyle
        item.normalTitleStyle = item?.normalTitleStyle ?? titleStyle
        item.normalMarkStyle = item?.normalMarkStyle ?? markStyle
      }
    });
  }
  return dataArray;
}

export function buildSeriesLeftRightData(page: number, pageSize: number, dataArray: Array<QTMediaSeries>)
  : Array<QTMediaSeries> {
  return dataArray;
}

export function buildSeriesTopDownData(page: number, pageSize: number, dataArray: Array<QTMediaSeries>)
  : Array<QTMediaSeries> {
  return dataArray;
}
