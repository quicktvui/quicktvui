import { ESMediaSeries } from '@extscreen/es3-component'
import { QTMediaSeriesVip } from './QTMediaSeriesVip'

export interface QTMediaSeries extends ESMediaSeries {
  id?: string
  vip?: QTMediaSeriesVip

  [prop: string]: any
}
