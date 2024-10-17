import { isObject, isArray } from "@vue/shared"
import { qtTrack, qtTrigger } from "./effect";
import QtArray from './qtArray'
import qtType, { typeEnum } from "./types"
import { isReactive, toRaw } from "vue";
import { qtRefUid } from "./watch";

export const enum emReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
  WATCH_ALL = '__ls_watchAll',
  WATCH_RAW = '__v_raw',
  RESET_REF_VALUE = '__ls_reset_ref_value',//重置ref对象value值，时的类型
  NEW_SET = '__ls_new_set',
  qtPath = '__qt_path',
  qtRoot = '__qt_root',
  qtArrDeth = '__qt_arr_deth'
}
export const isTrackProp = (target:object, prop:string | symbol)=>{
  // && (typeof prop !== 'symbol')
  if(typeof prop === 'string'){
    return !prop.startsWith('__qt_')
  }
  return target.hasOwnProperty(prop)
}
const reactiveMap = new WeakMap()

/**
 * 获取指定层级的父级对象
 * @param root 根对象
 * @param paths 路径
 * @param layer 指定要获取哪一级的对象
 */
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

const getReactiveConfig = (root?:any, paths:any[] = [], __qt_arr_deth=1): ProxyHandler<any> => {
  return {
    get(target, prop, receiver){
      if(prop === emReactiveFlags.qtRoot){
        return root
      }
      if(prop === emReactiveFlags.qtPath){
        return paths
      }
      if(prop === emReactiveFlags.qtArrDeth){
        return __qt_arr_deth
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
        const res = createReactiveObject(result, root, [...paths, prop], isArray(result)? __qt_arr_deth+1:__qt_arr_deth)
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
      if(isObject(value) && !isArray(value) && typeof(prop)==='string'){
        if(!value.__qt_key_){
          if(isObject(oldValue)){// && !isArray(target)
            value.__qt_key_ = oldValue.__qt_key_ || qtRefUid.createUid(prop)//标记唯一值，diff对比时使用
          }else{
            value.__qt_key_ = qtRefUid.createUid(prop)
          }
        }
        if(!value.__qt_change_num_){
          if(isObject(oldValue)){// && !isArray(target)
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
            if(isObject(value) && value.__qt_change_num_ && qtType.checkArrChangeProps(target,prop)){
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
              const _prop = (Array.isArray(target)&&prop==='length')?'':prop//length并不是数组真正要更新的子项，应该是目标数组删除或新增了数据，如第二层的数组pop删除了一条数据
              qtType.changeOfsetType(_root, _path, _firstObj, _prop, receiver[emReactiveFlags.qtArrDeth])
              qtTrigger(_root, firstProp, _firstObj, typeEnum.set, oldValue)
            } else if(Array.isArray(target) && !isNaN(Number(prop))){
              const isCollect = qtType.changeTypeData(target, prop, value)
              if(!isCollect){ qtType.changeOfsetType(target, prop, value) }
              qtTrigger(target, prop, value, typeEnum.set, oldValue)
            } else {
              qtType.changeOfsetType(target, prop, value)//对象的操作类型记录-带验证
              qtTrigger(target, prop, value, typeEnum.set, oldValue)
            }
          }
        }
      } catch (error) {
        console.warn(error)
      }
      return res
    }
  }
}

function createReactiveObject(data:object, root?:any, paths?:any[],__qt_arr_deth=1){
  if(!isObject(data)){ return data }
  if( (data as any)[emReactiveFlags.IS_REACTIVE] ) return data;

  if(Array.isArray(data)){
    // @ts-ignore
    data.__proto__ = new QtArray()
  }
  if (!root) { root = data }
  return new Proxy(data, getReactiveConfig(root, paths, __qt_arr_deth))
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
