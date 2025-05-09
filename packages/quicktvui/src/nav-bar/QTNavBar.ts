//

import { QTNavBarItem } from './QTNavBarItem'

export interface QTNavBar {
  defaultIndex?: number
  focusIndex?: number
  data: Array<QTNavBarItem>
}
