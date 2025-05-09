//
import { QTPosterElement } from './QTPosterElement'
import { ESGradient } from '@extscreen/es3-component'

export interface QTPosterCorner extends QTPosterElement {
  text: string
  background?: ESGradient
  [prop: string]: any
}
