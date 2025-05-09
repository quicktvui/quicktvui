import { qtIsTracking, qtTrackEffects, qtTrigger, qtTriggerEffects } from './effect'
import { qtToReactive, emReactiveFlags } from './reactive'
import { qtCloneObj } from './watch'

class QtRefImpl<T extends Object> {
  public dep: Set<any> = new Set()
  public __v_isRef = true
  public _value: any
  public _rawValue: any
  constructor(_rawValue: object) {
    this._rawValue = qtCloneObj(_rawValue)
    this._value = qtToReactive(this._rawValue)
  }
  get value(): T {
    if (qtIsTracking()) {
      qtTrackEffects(this.dep || (this.dep = new Set())) //依赖收集
    }
    return this._value
  }
  set value(newV: T) {
    newV = qtCloneObj(newV)
    if (newV !== this._rawValue) {
      this._value = qtToReactive(newV)
      //触发watchALl依赖监听
      qtTrigger(
        this._rawValue,
        emReactiveFlags.WATCH_ALL,
        newV,
        emReactiveFlags.RESET_REF_VALUE,
        this._rawValue
      )
      // 触发属性监听
      qtTriggerEffects(this.dep, this._rawValue, undefined, newV, '', this._rawValue)
      this._rawValue = newV
    }
  }
}

export interface IQtRef<T = any> {
  value: T //自定义返回类型，隐藏示例内部属性，防止被修改
  [k: string]: any
}

function qtCreateRef<T extends Array<any>>(value?: T): QtRefImpl<T> {
  return new QtRefImpl<T>(value || [])
}
export function qtRef<T extends Array<any>>(value?: T): IQtRef<T> {
  return qtCreateRef<T>(value)
}
function qtCreateRefObject<T extends object>(value?: T): QtRefImpl<T> {
  return new QtRefImpl<T>(value || {})
}
export function qtRefObject<T extends object>(value?: T): IQtRef<T> {
  return qtCreateRefObject<T>(value)
}

export interface IQtTabDatas {
  // tab
  _id: string
  type: number
  text: string
  titleSize: number
  decoration: { left: number; right: number }
  // tab-waterfall
  useDiff?: boolean
  disableScrollOnFirstScreen?: boolean
  firstFocusTargetID?: string
  bindingPlayer?: string
  content: Array<{
    title?: string
    titleStyle?: any
    itemList: Array<{
      style: any
      [prop: string]: any
    }>
    style: any
    placeholder?: { enable: boolean }
    [k: string]: any
  }>
  [k: string]: any
}
export function qtTabsRef(value?: Array<IQtTabDatas>): IQtRef<Array<IQtTabDatas>> {
  return qtCreateRef<Array<IQtTabDatas>>(value)
}
