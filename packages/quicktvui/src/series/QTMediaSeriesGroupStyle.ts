export interface QTMediaSeriesGroupStyle {
  groupMarginLeft?: number
  itemWidth?: number
  itemHeight?: number
  itemGap?: number

  textColor?: {
    normal: string
    focused: string
    selected: string
  }
  focusBackground?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
  }
  background?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
    stroke: {
      color: {
        normal: string
        selected: string
      }
      width: number
    }
  }
  textVipColor?: {
    normal: string
    focused: string
    selected: string
  }
  focusVipBackground?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
  }
  backgroundVip?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
    stroke: {
      color: {
        normal: string
        selected: string
      }
      width: number
    }
  }
  mark?: {
    color: string
  }
}
