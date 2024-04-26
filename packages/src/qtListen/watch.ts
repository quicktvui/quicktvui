import { isObject, isArray } from '@vue/shared'
// import { isReactive } from 'vue'//markRaw
import { qtClearupTrack, QtReactiveEffect, qtTrack } from "./effect";
import { qtDiff } from "./qtDiff";
import { emReactiveFlags } from './reactive'//qtToReactive
import qtType, { typeEnum } from './types'

export interface IQtWatchOptions {
  init: (datas: any[]) => void;
  add: (datas: any[]) => void;
  update: (position: number, datas: Map<any, any>, names?: Map<any, Set<any>>) => void;//keyPath?:Map<any,any[]>
  insert: (position: number, datas: Map<any, any>) => void;
  delete: (position: number, count: number) => void;
  clear: () => void;
  resetValue?:(datas:any[])=>void;
  isNoAsync?:boolean;
  [k: string]: any
}

export const qtCreateUid = (key:string) => {
  return key + (Date.now() + (Math.random()*1000000))
}
export const qtCloneObj = (target: object, isKey=true) => {
  if (isObject(target)) {
    const res: any = isArray(target) ? [] : {}
    for (const k in target) {
      if (Object.prototype.hasOwnProperty.call(target, k)) {
        const targetItem = (target as any)[k]
        if (isObject(targetItem)) {
          if(!isArray(targetItem)){
            if(!targetItem.__qt_key_){
              targetItem.__qt_key_ = qtCreateUid(k)//标记唯一值，diff对比时使用
            }
            if(!targetItem.__qt_change_num_){
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

  let watchTimeoutId: any = null
  const watchNextTick = (fn: any) => {
    clearTimeout(watchTimeoutId)
    watchTimeoutId = setTimeout(() => {
      fn()
    }, 10);
  }
  
  const _effect = new QtReactiveEffect(
    () => {
      qtTrack(__v_raw, emReactiveFlags.WATCH_ALL)
    },
    (target, prop, newValue, type, oldValue) => {
      // console.log(target,'-watch--change',prop)
      const _target = type === emReactiveFlags.RESET_REF_VALUE ? newValue : target 
      const _currentType = qtType.getFlag(target).get(typeEnum.currentType)
      if (type === emReactiveFlags.RESET_REF_VALUE) {
        options.resetValue?.(newValue)
      }
      if(type === emReactiveFlags.RESET_REF_VALUE && !(_currentType === typeEnum.concat && oldTarget && oldTarget.length)){
        // if (_isInit && !((oldTarget && oldTarget.length) && _currentType === typeEnum.concat)) {
        // 初始化数据和清空数据时，不走异步，否则页面会有闪烁或卡顿的情况
        if (newValue && newValue.length) {
          options.init(qtCloneObj(newValue,false))
        } else {
          options.clear()
        }
        __v_raw = newValue
        oldTarget = qtCloneObj(__v_raw) 
      } else  if (!(oldTarget && oldTarget.length) && _target) {
        options.init(qtCloneObj(_target,false))
        __v_raw = _target
        oldTarget = qtCloneObj(__v_raw) 
      } else if(_currentType === typeEnum.splice && !(target && target.length)){
        options.clear()
        __v_raw = target
        oldTarget = qtCloneObj(__v_raw) 
      } else {
        watchNextTick(() => {
          const _target = type === emReactiveFlags.RESET_REF_VALUE ? newValue : target        
          const types = qtType.getType(target)
          // console.log('--type', type, target, types?.size, '异步1',_currentType)
          // 如果单个时间片段内只进行了一种类型的数组操作，则优先执行数组操作，否则就需要进行diff算法对比
          if (types && types.size === 1) {
          // console.log(types, '--types')
          types.forEach((tvalue, key) => {
            // console.log(key, '--types-',tvalue)
            if (key === typeEnum.push || key === typeEnum.concat) {
              options.add(tvalue.dataArr || Array.from(tvalue.datas.values()))
            }
            if (key === typeEnum.pop) {
              options.delete(tvalue.start, tvalue.deleteCount)
            }
            if (key === typeEnum.qtSet) {
              options.update(tvalue.start, tvalue.datas, tvalue.names)
            }
            if (key === typeEnum.splice) {
              if(tvalue.deleteCount){
                options.delete(tvalue.start, tvalue.deleteCount)
              }
              if (tvalue.datas.size) {
                options.insert(tvalue.start, tvalue.datas)
              }
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
      clearTimeout(watchTimeoutId)
    }
  }
}