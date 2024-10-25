import { isObject, isArray } from "@vue/shared"

export class QtChangeData {
  datas:Map<any,any> = new Map()
  names:Map<any,Set<any>> = new Map()
  dataArr?:any[]//concat 拼接数据时使用
  updateCount:number = 0
  rootUpdateCount:number = 0
  deth:number = -1//深度
  constructor(public start:number, public end:number, public deleteCount:number = -1){}
  resetData(){
    // this.datas.clear()
    this.start = -1
    this.end = -1
    this.deleteCount = -1
    if(this.datas.size){
      this.datas = new Map()
    }
  }
}

export const typeEnum = {
  set: 'set',
  qtSet: '__qt_set',
  push: 'push',
  splice: 'splice',
  pop: 'pop',
  concat: 'concat',
  unknownSet: '__qt_unknownSet',
  currentType: '__qt_currentType',
  expectCangeNum: '__qt_expectCangeNum',
  isInit: '__qt_is_init',
  shift: 'shift',
  unshift: 'unshift',
  newDatas: '__qt_new_datas',
  arrChangeProp: '__qt_splice_change_prop',
}

/**
 * 指定层级，获取按层级去重后的数据，子集被多次修改时，如果只关系父级的变化则需要按层级去重
 */
export const qtFilterChangeMap = (deth = 1, datas:Map<any,any>) => {
  const res = new Map()
  datas.forEach((dv, dk)=>{
    let rk = dk
    if(Array.isArray(dk) && deth > 0){
      rk = dk.slice(0, deth).join()
    }
    res.set(rk, dv)
  })
  return res
}

/**
 * 最长递增序列拆分
 */
export const qtLongestSequenceSplit= (maps:QtChangeData)=>{
  const changes:Map<any,QtChangeData> = new Map()
  let _preStart = -1
  maps.datas.forEach((mdv, mdi)=>{
    const _start = Array.isArray(mdi)?Number(mdi[0]):Number(mdi)
    let changeVal = changes.get(_preStart)
    if(changeVal && _start >= changeVal.start && _start <= changeVal.end+1){
      changeVal.updateCount++
      if(_start != changeVal.end){
        changeVal.rootUpdateCount++
      }
      changeVal.end = _start
      changeVal.datas.set(mdi, mdv)
    }else{
      const start = _start
      const count = 1
      const end = start// + count
      changeVal = new QtChangeData(start, end)
      changeVal.updateCount = count
      changeVal.rootUpdateCount = count
      changeVal.datas.set(mdi, mdv)
      changeVal.deth = maps.deth
      _preStart = _start
      changes.set(_preStart, changeVal)
    }
    if(maps.names.get(mdi)){
      changeVal.names.set(mdi, (maps.names.get(mdi) as Set<any>))
    }
  })
  return changes
}

interface IparseChildUpdateRef {
  isArr:boolean,arrDeeps:number[], oldData:any,newData:any,ouData:any,
  k:any
}
/**
 * 解析子列表更新层级
 */
export const parseChildUpdate = (changeData:QtChangeData, orData:any,exFn:(res:IparseChildUpdateRef)=>void,maxDeep?:number) => {
  const maps = changeData.names.size?changeData.names:changeData.datas
  maps.forEach((v,k)=>{
    let orUdata:any
    let newUdata:any
    const cvalue = changeData.datas.get(k)
    const res:IparseChildUpdateRef = {
      isArr: false, arrDeeps: [], ouData: cvalue,
      newData: null, oldData:null, k
    }
    if(Array.isArray(k)){
      let isOver = false
      for (let kindex = 0; kindex < k.length; kindex++) {
        const kitem = k[kindex];
        if(!isNaN(Number(kitem))){
          res.arrDeeps.push(Number(kitem))
        }
        orUdata = orUdata ? orUdata[kitem] : orData[kitem]
        let nexNewData;
        if(kindex>0){
          nexNewData = newUdata ? newUdata[kitem] : cvalue[kitem]
        } else {
          nexNewData = cvalue
        }
        if(isNaN(Number(kitem)) && isObject(nexNewData) && !Array.isArray(nexNewData)){
          break
        }
        newUdata = nexNewData
        if(maxDeep && res.arrDeeps.length >= maxDeep){
          isOver = true
          break
        }
      }
      if(!isOver && changeData.names.size && changeData.names.get(k)?.size == 1){
        const namev = changeData.names.get(k)?.values().next().value
        if(isObject(orUdata) && isObject(newUdata) && isArray(orUdata[namev]) && isArray(newUdata[namev])){
          orUdata = orUdata[namev]
          newUdata = newUdata[namev]
        } else if(!isNaN(Number(namev)) && orUdata[namev]){
          orUdata = orUdata[namev]
          newUdata = newUdata[namev]
          res.arrDeeps.push(Number(namev))
        }
      }
      res.oldData = orUdata
      res.newData = newUdata
    } else {
      res.oldData = orData[k]
      res.newData = v
    }
    res.isArr = Array.isArray(newUdata)
    exFn(res)
  })
}

class QtType {
  private targetFlags:WeakMap<any,Map<string, any>> = new WeakMap()
  private targetMaps:WeakMap<any,Map<any, QtChangeData>> = new WeakMap()
  // private targetMapMultiple:WeakMap<any,Map<any, Map<any,QtChangeData>>> = new WeakMap()

  getFlag(target:any){
    let flag = this.targetFlags.get(target)
    if(!flag){
      this.targetFlags.set(target, flag = new Map())
    }
    return flag
  }
  getTargetType(target:any, type:any){
    return this.getType(target)?.get(type)
  }
  getType(target:any){
    return this.targetMaps.get(target)
  }
  setType(target:any, type:string, datas:QtChangeData){
    let targetMap = this.targetMaps.get(target)
    if(!targetMap){
      this.targetMaps.set(target, (targetMap = new Map()))
    }
    targetMap.set(type, datas)

    this.getFlag(target).set(typeEnum.currentType, type)
  }
  deleteType(target:any, type?:string){
    if(typeof target !== 'object') { return }
    let targetMap = this.targetMaps.get(target)
    this.targetFlags.delete(target)
    if(!targetMap) return
    if(type){
      targetMap.delete(type)
    }else{
      this.targetMaps.delete(target)
    }
  }
  clear(){
    this.targetFlags = new WeakMap()
    this.targetMaps = new WeakMap()
  }
  changeTypeData(target:any, prop:any, value:any){
    if(this.getFlag(target).get(typeEnum.currentType) === typeEnum.pop){
      return false
    }
    const cacheTypes = this.getType(target)
    let isCollect = false
    if(cacheTypes && !isNaN(Number(prop))){
      cacheTypes.forEach((cacheType, key)=>{
        if(Number(prop) >= cacheType.start && Number(prop) <= cacheType.end){
          cacheType.datas.set(prop, value)
          isCollect = true
        }
      })
    }
    let eNum = this.getFlag(target).get(typeEnum.expectCangeNum)
    if(eNum && eNum>0){
      this.getFlag(target).set(typeEnum.expectCangeNum, --eNum)
      return true
    }

    return isCollect
  }
  changeOfsetType(target:any, prop:any, value:any, name?:any, deth = 1){
    let cacheTypes = this.getTargetType(target,typeEnum.qtSet)
    if(!cacheTypes){
      const start = (Array.isArray(prop) ? Number(prop[0]) : Number(prop))||0
      cacheTypes = new QtChangeData(start, start)
      cacheTypes.datas.set(prop, value)
      cacheTypes.updateCount = 1
      cacheTypes.rootUpdateCount = 1
      cacheTypes.deth = deth
      this.setType(target, typeEnum.qtSet, cacheTypes)
    } else {
      const pos = (Array.isArray(prop) ? Number(prop[0]) : Number(prop))||0
      if(!cacheTypes.datas.has(prop)){
        if(pos !== cacheTypes.end){
          cacheTypes.rootUpdateCount++
        }
        cacheTypes.updateCount += 1
      }
      cacheTypes.datas.set(prop, value)
      if(pos >= cacheTypes.end){
        cacheTypes.end = pos
      }else if(pos < cacheTypes.start) {
        cacheTypes.start = pos
      }
      if(deth != cacheTypes.deth){
        cacheTypes.deth = -1//如果同时修改了不通层级的数据，则无法给出固定层级
      }
    }
    if(name){
      const names = cacheTypes.names.get(prop)
      if(!names){
        cacheTypes.names.set(prop, new Set([name]))// todo: names 扁平化处理
      } else {
        names.add(name)
      }
    }
  }
  /**
   * 记录splice操作数据时，具体哪些索引是真的被修改了
   */
  recordArrChangeProps(target:any, start:number, end:number){
    const flag = this.getFlag(target)
    let changeProps:Set<any> = flag.get(typeEnum.arrChangeProp)
    if(!changeProps){
      changeProps = new Set()
      flag.set(typeEnum.arrChangeProp, changeProps)
    }
    if(end > start){
      for (let index = start; index < end; index++) {
        changeProps.add(index)
      }
    }
  }
  /**
   * 检测指定prop是否是由splice操作而修改的
   * 返回true时，要么没有做splice操作，要么做了splice操作但是指定prop并不是真正被修改的索引
   */
  checkArrChangeProps(target:any, prop:any){
    const flag = this.getFlag(target)
    const ctype = flag.get(typeEnum.currentType)

    if(ctype === typeEnum.splice){
      let changeProps:Set<any> = flag.get(typeEnum.arrChangeProp)
      prop = Number(prop)
      if(!changeProps) {
        return true
      } else if(!isNaN(prop) && changeProps.has(prop)){
        changeProps.delete(prop)//只可被识别一次，即销毁
        return true
      } else {
        return false
      }
    }
    if(ctype === typeEnum.shift){
      return false
    }
    if(ctype === typeEnum.unshift){
      return false
    }
    return true
  }
}
const qtType = new QtType()
export default qtType