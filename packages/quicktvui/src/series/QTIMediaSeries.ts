import { QTMediaSeries } from './QTMediaSeries'
import { QTMediaSeriesType } from './QTMediaSeriesType'
import { QTMediaSeriesGroup } from './QTMediaSeriesGroup'
import { QTMediaSeriesStyleType } from './QTMediaSeriesStyleType'
import { QTMediaSeriesData } from './QTMediaSeriesData'
import { QTIView } from '../view/QTIView'

export interface QTIMediaSeries extends Omit<QTIView, 'requestFocus'> {
  setup(): void

  setInitData(
    type: QTMediaSeriesType,
    group: QTMediaSeriesGroup,
    styleType: QTMediaSeriesStyleType,
    data: QTMediaSeriesData
  ): void

  setVisible(visible: boolean): void

  setPageData(page: number, data: Array<QTMediaSeries>): void

  scrollTo(position: number): void

  scrollToWithOffset(position: number, offset: number, anim: boolean): void

  setSelected(position: number): void

  setGroupSelected(position: number): void

  requestFocus(position: number): void

  release(): void
}
