import { isObject, isArray } from '@vue/shared'
import { nextTick } from 'vue'//markRawn isReactive
import { qtClearupTrack, QtReactiveEffect, qtTrack } from "./effect";
import { qtDiff } from "./qtDiff";
import { emReactiveFlags } from './reactive'//qtToReactive
import qtType, { qtLongestSequenceSplit, typeEnum, QtChangeData } from './types'

export interface IQtWatchOptions {
  init: (datas: any[]) => void;
  add: (datas: any[]) => void;
  update: (position: number, dataMaps: QtChangeData, oldTarget: any[]) => void;//keyPath?:Map<any,any[]>
  insert: (position: number, datas: any[]) => void;
  delete: (position: number, count: number) => void;
  clear: () => void;
  resetValue?: (datas: any[]) => void;
  [k: string]: any
}
export class QtRefUid {
  private pointer = 0
  /**
   * 生成全局唯一id
   */
  createUid(key: string = '_') {
    this.pointer++
    return this.pointer + key + Date.now()
  }
  /**
   * 对象添加uid
   */
  addUid(data: any, uk?: string, oldData?: any) {
    if (data !== null && typeof data === 'object') {
      if (!data.__qt_key_) {
        data.__qt_key_ = this.createUid(uk)
      }
      if (!data._id) {
        if (oldData && oldData._id) {
          data._id = oldData._id
        } else {
          data._id = 'sid-' + data.__qt_key_
        }
        // data.listSID = 'listSID_'+data.__qt_key_
      }
    }
    return data
  }
  /**
   * 批量添加uid
   */
  addUidBatch(arr: any[], uk?: string, oldArr?: any[]) {
    for (let i = 0; i < arr.length; i++) {
      this.addUid(arr[i], uk, oldArr ? oldArr[i] : null)
    }
  }
}
export const qtRefUid = new QtRefUid()

export const qtCloneObj = (target: object, isKey = true) => {
  if (isObject(target)) {
    const res: any = isArray(target) ? [] : {}
    for (const k in target) {
      if (Object.prototype.hasOwnProperty.call(target, k)) {
        const targetItem = (target as any)[k]
        if (isObject(targetItem)) {
          if (!isArray(targetItem)) {
            if (!targetItem.__qt_key_) {
              qtRefUid.addUid(targetItem, k) //标记唯一值，diff对比时使用
            }
            if (!targetItem.__qt_change_num_) {
              targetItem.__qt_change_num_ = 1//标记节点是否被修改，diff对比使用
            }
          }
          res[k] = qtCloneObj(targetItem, isKey)
        } else {
          res[k] = targetItem
        }
      }
    }
    return res
  }
  return target
}

// 监听器，注意必须在组件销毁时调用返回值的stop函数清除缓存依赖，防止内存泄露
export function qtWatchAll(target: any, options: IQtWatchOptions) {
  if (!target || !isObject(target)) return;
  let __v_raw = target.__v_raw
  let oldTarget = qtCloneObj(__v_raw)

  let watchNextTickFlag = false
  const watchNextTick = (fn: any) => {
    if (!watchNextTickFlag) {
      watchNextTickFlag = true
      nextTick(() => {
        watchNextTickFlag = false
        fn()
      })
    }
  }

  const _effect = new QtReactiveEffect(
    () => {
      qtTrack(__v_raw, emReactiveFlags.WATCH_ALL)
    },
    (target, prop, newValue, type, oldValue) => {
      const _target = type === emReactiveFlags.RESET_REF_VALUE ? newValue : target
      const _currentType = qtType.getFlag(target).get(typeEnum.currentType)
      if (type === emReactiveFlags.RESET_REF_VALUE) {
        options.resetValue?.(newValue)
      }
      if (type === emReactiveFlags.RESET_REF_VALUE && !(_currentType === typeEnum.concat && oldTarget && (oldTarget.length || Object.keys(newValue).length))) {
        // if (_isInit && !((oldTarget && oldTarget.length) && _currentType === typeEnum.concat)) {
        // 初始化数据和清空数据时，不走异步，否则页面会有闪烁或卡顿的情况
        if (newValue && (newValue.length || Object.keys(newValue).length)) {
          options.init(qtCloneObj(newValue, false))
        } else {
          options.clear()
        }
        __v_raw = newValue

        qtType.deleteType(oldTarget)
        qtType.deleteType(target)
        qtType.deleteType(__v_raw)
        qtType.deleteType(_target)
        qtType.clear()
        oldTarget = qtCloneObj(__v_raw)
      } else if (!(oldTarget && (oldTarget.length || Object.keys(newValue).length)) && _target) {
        watchNextTick(() => {
          options.init(qtCloneObj(_target, false))
          __v_raw = _target

          qtType.deleteType(oldTarget)
          qtType.deleteType(target)
          qtType.deleteType(__v_raw)
          qtType.deleteType(_target)
          qtType.clear()
          oldTarget = qtCloneObj(__v_raw)
        })
      } else if (_currentType === typeEnum.splice && !(target && (target.length || Object.keys(newValue).length))) {
        options.clear()
        __v_raw = target

        qtType.deleteType(oldTarget)
        qtType.deleteType(target)
        qtType.deleteType(__v_raw)
        qtType.deleteType(_target)
        qtType.clear()
        oldTarget = qtCloneObj(__v_raw)
      } else {
        watchNextTick(() => {
          const _target = type === emReactiveFlags.RESET_REF_VALUE ? newValue : target
          const types = qtType.getType(target)
          // console.log('--type', type, target, types?.size, '异步1',_currentType)
          // 如果单个时间片段内只进行了一种类型的数组操作，则优先执行数组操作，否则就需要进行diff算法对比
          if (types && types.size === 1) {
            types.forEach((tvalue, key) => {
              // console.log(key, '--types-',tvalue)
              if (key === typeEnum.push || key === typeEnum.concat) {
                options.add(tvalue.dataArr || Array.from(tvalue.datas.values()))
              }
              if (key === typeEnum.pop) {
                options.delete(tvalue.start, tvalue.deleteCount)
              }
              if (key === typeEnum.qtSet) {
                // console.log(tvalue,'-tvalue')
                if (tvalue.end - tvalue.start + 1 == tvalue.rootUpdateCount) {
                  options.update(tvalue.start, tvalue, oldTarget)
                } else {
                  const equence = qtLongestSequenceSplit(tvalue)
                  equence.forEach((evalue, epos) => {
                    // console.log(evalue,'-epos',epos)
                    options.update(evalue.start, evalue, oldTarget)
                  })
                }
              }
              if (key === typeEnum.splice) {
                if (tvalue.deleteCount) {
                  options.delete(tvalue.start, tvalue.deleteCount)
                }
                if (tvalue.datas.size) {
                  options.insert(tvalue.start, Array.from(tvalue.datas.values()))
                }
              }
              if (key === typeEnum.unshift) {
                options.insert(tvalue.start, Array.from(tvalue.datas.values()))
              }
              if (key === typeEnum.shift) {
                options.delete(tvalue.start, tvalue.deleteCount)
              }
            })
          } else {
            qtDiff(oldTarget, _target, options)
          }

          // if(type === emReactiveFlags.RESET_REF_VALUE){}
          qtType.deleteType(oldTarget)
          qtType.deleteType(target)
          qtType.deleteType(__v_raw)
          qtType.deleteType(_target)
          qtType.clear()

          oldTarget = qtCloneObj(__v_raw)
        })
      }

      if (type === emReactiveFlags.RESET_REF_VALUE) {
        qtClearupTrack(__v_raw)
        __v_raw = newValue
        _effect.run();
      }
    }
  )
  _effect.run();
  // const runner: any = _effect.run.bind(_effect)
  return {
    stop() {
      qtClearupTrack(__v_raw)
      _effect.stop()
    }
  }
}