//
import { ESIView } from '../ESView/ESIView'

export interface ESIViewPager extends ESIView {
  translationLeft(): void

  translationRight(): void
}
