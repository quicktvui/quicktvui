// 分集样式类型
export enum SeriesStyleType {
  NUMBER_ONLY = 'number_only', // 纯数字（第几集）
  TEXT_ONLY = 'text_only', // 纯文字（分集标题）
  IMAGE_LEFT_TEXT_RIGHT = 'image_left_text_right', // 左图右文
  IMAGE_TOP_TEXT_BOTTOM = 'image_top_text_bottom', // 上图下文
  CUSTOM = 'custom', //自定义
}

export interface SeriesItem {
  type: number
  text?: string //纯数字取值
  title?: string //纯文字取值
  subtitle?: string
  imageUrl?: string
  corner?: string
  decoration?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
  [key: string]: any
}
