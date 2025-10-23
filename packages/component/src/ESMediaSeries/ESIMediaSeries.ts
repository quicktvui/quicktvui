import { ESMediaSeries } from './ESMediaSeries'
import { ESIView } from '../ESView/ESIView'

export interface ESIMediaSeries extends ESIView {
  setup(): void

  setInitData(totalCount: number, pageSize: number): void

  setVisible(visible: boolean): void

  setPageData(page: number, data: Array<ESMediaSeries>): void

  scrollTo(position: number): void

  scrollToWithOffset(position: number, offset: number, anim: boolean): void

  requestFocus(position: number): void

  setSelected(position: number): void

  setGroupSelected(position: number): void

  release(): void
}
