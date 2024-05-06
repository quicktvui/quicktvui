export class QtChangeData {
  datas:Map<any,any> = new Map()
  names:Map<any,Set<any>> = new Map()
  dataArr?:any[]//concat 拼接数据时使用
  updateCount:number = 0
  constructor(public start:number, public end:number, public deleteCount:number = -1){}
  resetData(){
    // this.datas.clear()
    this.start = -1
    this.end = -1
    this.deleteCount = 1
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
  newDatas: '__qt_new_datas'
}

/**
 * 最长递增序列拆分
 */
export const qtLongestSequenceSplit= (maps:QtChangeData)=>{
  const changes:Map<any,QtChangeData> = new Map()
  let _preStart = -1
  maps.datas.forEach((mdv, mdi)=>{
    const _start = Array.isArray(mdi) ? Number(mdi[0]) : Number(mdi)
    let changeVal = changes.get(_preStart)
    if(changeVal && _start >= changeVal.start && _start <= changeVal.end){
      changeVal.updateCount++
      changeVal.end = changeVal.start + changeVal.updateCount
      changeVal.datas.set(mdi, mdv)
    }else{
      const start = _start
      const count = 1
      const end = start + count
      changeVal = new QtChangeData(start, end)
      changeVal.updateCount = count
      changeVal.datas.set(mdi, mdv)

      _preStart = _start
      changes.set(_preStart, changeVal)
    }
  })
  return changes
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
  changeOfsetType(target:any, prop:any, value:any, name?:any){
    let cacheTypes = this.getTargetType(target,typeEnum.qtSet)
    if(!cacheTypes){
      const start = Array.isArray(prop) ? Number(prop[0]) : Number(prop)
      cacheTypes = new QtChangeData(start, start)
      cacheTypes.datas.set(prop, value)
      cacheTypes.updateCount = 1
      if(name){
        const names = cacheTypes.names.get(prop)
        if(!names){
          cacheTypes.names.set(prop, new Set([name]))
        } else {
          names.add(name)
        }
      }
      this.setType(target, typeEnum.qtSet, cacheTypes)
    } else {
      const pos = Array.isArray(prop) ? Number(prop[0]) : Number(prop)
      cacheTypes.datas.set(prop, value)
      cacheTypes.updateCount += 1
      cacheTypes.end = pos
      if(name){
        const names = cacheTypes.names.get(prop)
        if(!names){
          cacheTypes.names.set(prop, new Set([name]))
        } else {
          names.add(name)
        }
      }
    }
  }
  recordNewData(target:any, items:any[]){
    const flag = this.getFlag(target)
    let newDatas:WeakSet<any> = flag.get(typeEnum.newDatas)
    if(!newDatas){
      flag.set(typeEnum.newDatas, newDatas = new WeakSet())
    }
    items.forEach(item=>{
      newDatas.add(item)
    })
  }
  checkIsNewData(target:any, data:any):boolean{
    const flag = this.getFlag(target)
    let newDatas:WeakSet<any> = flag.get(typeEnum.newDatas)
    if(newDatas){
      return newDatas.has(data)
    }
    return false
  }
}
const qtType = new QtType()
export default qtType