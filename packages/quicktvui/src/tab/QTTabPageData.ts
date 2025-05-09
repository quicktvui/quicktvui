import { QTWaterfallSection } from '../waterfall/core/QTWaterfallSection'

export interface QTTabPageData {
  useDiff?: boolean
  disableScrollOnFirstScreen?: boolean
  firstFocusTargetID?: string
  data: Array<QTWaterfallSection>
  bindingPlayer?: string

  [prop: string]: any
}
