import { ESIView } from '../ESView/ESIView'

export interface ESIScrollView extends ESIView {
  scrollTo(x: number, y: number): void

  scrollToWithOptions(x: number, y: number, duration: number): void
}
