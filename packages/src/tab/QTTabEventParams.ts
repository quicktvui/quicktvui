//
import {ESViewCoordinate, ESViewScrollState} from "@extscreen/es3-component";

export interface QTTabEventParams {
  itemPosition: number,
  x: number
  y: number
  position: number
  orientation: number
  contentOffset: ESViewCoordinate
  state: ESViewScrollState
}
