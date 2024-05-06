import { isObject, isArray } from "@vue/shared"
import { qtTrack, qtTrigger } from "./effect";
import QtArray from './qtArray'
import qtType, { typeEnum } from "./types"
import { isReactive, toRaw } from "vue";
import { qtCreateUid } from "./watch";

export const enum emReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
  WATCH_ALL = '__ls_watchAll',
  WATCH_RAW = '__v_raw',
  RESET_REF_VALUE = '__ls_reset_ref_value',//重置ref对象value值，时的类型
  NEW_SET = '__ls_new_set',
  qtPath = '__qt_path',
  qtRoot = '__qt_root'
}
export const isTrackProp = (target:object, prop:string | symbol)=>{
  // && (typeof prop !== 'symbol')
  if(typeof prop === 'string'){
    return !prop.startsWith('__qt_')
  }
  return target.hasOwnProperty(prop)
}
const reactiveMap = new WeakMap()

export const qtGetParent = (root:object, paths:any[], layer:number) => {
  if(!isObject(root)) return
  if(layer >= paths.length-1){
    return root
  }
  if(layer < 0){
    layer = 0
  }
  const start = 1;
  const end = paths.length - 1 - layer
  let res = root
  // console.log(root, '--getparent', paths, start, end)
  for (let i = start; i <= end; i++) {
    const path = paths[i];
    res = res[path]
    if(!isObject(res)){
      break
    }
  }
  return res
}

const getReactiveConfig = (root?:any, paths:any[] = []): ProxyHandler<any> => {
  return {
    get(target, prop, receiver){
      if(prop === emReactiveFlags.qtRoot){
        return root
      }
      if(prop === emReactiveFlags.qtPath){
        return paths
      }
      if(prop === emReactiveFlags.IS_REACTIVE){
        return true
      }
      if(prop === emReactiveFlags.WATCH_ALL || prop === emReactiveFlags.WATCH_RAW){
        return target
      }
      qtTrack(target, prop)
      // console.log(prop, '--get')
      const result = Reflect.get(target, prop, receiver)
      if(isObject(result)){
        const res = createReactiveObject(result, root, [...paths, prop])
        // console.log(result, '--', prop, target)
        return res
      }
      return result
    },
    set(target:any, prop, value, receiver){
      let oldValue = target[prop]
      if(isReactive(value)){
        value = toRaw(value)
      }
      // console.log(prop, '-r-set--')
      if(isObject(value) && !isArray(value) && typeof(prop)==='string'){
        if(!value.__qt_key_){
          if(isObject(oldValue)){
            if(qtType.checkIsNewData(target,value)){
              value.__qt_key_ = qtCreateUid(prop)
            } else {
              value.__qt_key_ = oldValue.__qt_key_ || qtCreateUid(prop)//标记唯一值，diff对比时使用
            }
          }else{
            value.__qt_key_ = qtCreateUid(prop)
          }
        }
        if(!value.__qt_change_num_){
          if(isObject(oldValue)){
            value.__qt_change_num_ = oldValue.__qt_change_num_ || 1//标记唯一值，diff对比时使用
          }else{
            value.__qt_change_num_ = 1//标记节点是否被修改，diff对比使用
          }
        }
      }
      // const _value = isObject(value) ? createReactiveObject(value, root, [...paths, prop]): value
      const res = Reflect.set(target, prop, value, receiver)
      try {
        if(isTrackProp(target, prop)){
          if(oldValue != value){
            if(isObject(value) && value.__qt_change_num_){
              value.__qt_change_num_++
            }
            const _root = receiver[emReactiveFlags.qtRoot]
            const _path = receiver[emReactiveFlags.qtPath]
            // console.log(prop, '--reactive--')
            if(_path && _path.length && !isReactive(value)) {
              const firstProp = _path[0]
              const _firstObj = _root[firstProp]//[emReactiveFlags.WATCH_RAW]
              // const parentObj = getParent(_root, _prop, 1)//父级对象
              // console.log(_root, '-qtRoot-', _path, value, _firstObj)
              if(isObject(_firstObj) && _firstObj.__qt_change_num_){
                _firstObj.__qt_change_num_++
              }
              qtType.changeOfsetType(_root, _path, _firstObj, prop)
              qtTrigger(_root, firstProp, _firstObj, typeEnum.set, oldValue)
            } else if(Array.isArray(target) && !isNaN(Number(prop))){
              const isCollect = qtType.changeTypeData(target, prop, value)
              if(!isCollect){ qtType.changeOfsetType(target, prop, value) }
              qtTrigger(target, prop, value, typeEnum.set, oldValue)
            } else {
              qtTrigger(target, prop, value, typeEnum.set, oldValue)
            }
          }
        }
      } catch (error) {
        
      }
      return res
    }
  }
}

function createReactiveObject(data:object, root?:any, paths?:any[]){
  if(!isObject(data)){ return data }
  if( (data as any)[emReactiveFlags.IS_REACTIVE] ) return data;

  if(Array.isArray(data)){
    // @ts-ignore
    data.__proto__ = new QtArray()
  }
  if (!root) { root = data }
  return new Proxy(data, getReactiveConfig(root, paths))
}

export function qtReactive(data:object, parent?:any, path?:any){
  const prevProxy = reactiveMap.get(data)
  if(prevProxy){ return prevProxy }

  const proxyObj = createReactiveObject(data,parent,path)
  reactiveMap.set(data, proxyObj)
  return proxyObj
}

export function qtToReactive(value:any, parent?:any, path?:any){
  return isObject(value) ? qtReactive(value,parent,path) : value
}
