import { ESIHorizontalSeekBar } from './ESIHorizontalSeekBar'

export interface ESIVerticalSeekBar extends ESIHorizontalSeekBar {
  setOrientation(orientation: number)

  setTickMarkDirection(tickMarkDirection: number)

  setIndicatorTextOrientation(orientation: number)

  setLeftIndicatorTextOrientation(orientation: number)

  setRightIndicatorTextOrientation(orientation: number)
}
