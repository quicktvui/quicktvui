export interface QTLongImageDownloadChangeBean {
  fileId: string
  status: LongImageStatus
  message: string
  progress: number
  width?: number
  height?: number
  mimeType?: string
}

export interface QTLongImageLoadStatusChangeBean {
  fileId: string
  status: LongImageStatus
  message: string
  isGif: boolean
  width?: number
  height?: number
  scale?: number
  minScale?: number
  maxScale?: number
}

export interface QTLongImageScrollChangeBean {
  fileId: string
  direction: LongImageScrollDirection
  width: number
  height: number
  percent: number
  isScroll: boolean
}

export interface QTLongImageShowChangeBean {
  fileId: string
  scrollable: boolean
}

export interface QTLongImageScaleChangeBean {
  fileId: string
  scale: number
  origin: number
}

export interface QTLongImageCenterChangeBean {
  fileId: string
  scale: number
  origin: number
  x: number
  y: number
}

export enum LongImageScrollDirection {
  LEFT = 0,
  RIGHT = 1,
  TOP = 2,
  BOTTOM = 3,
}

export enum LongImageStatus {
  LOADED_SUCCESS = 1,
  LOADED_FAIL = 2,
  START = 3,
}
