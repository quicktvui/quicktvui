//
import { ESFocusable } from '@extscreen/es3-core'

export interface ESIView extends ESFocusable {
  setAutoFocus(tag: string, delay: number)
}
