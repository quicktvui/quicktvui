import qtType, { typeEnum, QtChangeData } from "./types"

class QtArray extends Array {
  shift(){
    // @ts-ignore
    if(this.__v_raw.length){
      // @ts-ignore
      const start = 0
      const end = 0
      const deleteCount = 1
      // @ts-ignore
      const changeData = qtType.getTargetType(this.__v_raw, typeEnum.shift)
      if (changeData) {
        changeData.deleteCount += deleteCount
      } else {
        const datas = new QtChangeData(start, end, deleteCount)
        // @ts-ignore
        qtType.setType(this.__v_raw, typeEnum.shift, datas)
        // @ts-ignore
        qtType.getFlag(this.__v_raw).set(typeEnum.expectCangeNum, this.__v_raw.length)
      }
    }
    return super.shift()
  }
  unshift(...items: any[]){
    if(items.length){
      let start = 0
      let end = items.length-1
      // @ts-ignore
      let changeData = qtType.getTargetType(this.__v_raw, typeEnum.unshift)
      if (!changeData) {
        changeData = new QtChangeData(start, end)
        // @ts-ignore
        qtType.setType(this.__v_raw, typeEnum.unshift, changeData)
        // @ts-ignore
        qtType.getFlag(this.__v_raw).set(typeEnum.expectCangeNum, this.__v_raw.length + items.length)
      }else{
        // console.log(changeData.start, changeData.end)
        // changeData.end += items.length
      }
    }
    // @ts-ignore
    qtType.recordNewData(this.__v_raw, items)
    return super.unshift(...items)
  }
  push(...items: any[]) {
    if (items.length) {
      // @ts-ignore
      const start = this.__v_raw.length
      const end = start + items.length - 1
      // @ts-ignore
      const changeData = qtType.getTargetType(this.__v_raw, typeEnum.push)
      if (changeData) {
        changeData.end += items.length
      } else {
        const datas = new QtChangeData(start, end)
        // @ts-ignore
        qtType.setType(this.__v_raw, typeEnum.push, datas)
      }
    }
    return super.push(...items)
  }
  splice(start: number, deleteCount: number, ...items: any[]) {
    if(start < 0){ start = 0 }//防止索引越界
    // @ts-ignore
    if(deleteCount === undefined && this.__v_raw.length){
      // @ts-ignore
      deleteCount = this.__v_raw.length - start
    }
    // @ts-ignore
    if(start >= this.__v_raw.length || deleteCount < 0){//防止索引越界
      deleteCount = 0
    }

    let end = start
    if(items && items.length){
      end = start + items.length - 1
    } else {
      end = -1
    }
    
    // @ts-ignore
    let changeData = qtType.getTargetType(this.__v_raw, typeEnum.splice)
    if (!changeData) {
      changeData = new QtChangeData(start, end, deleteCount)
      // @ts-ignore
      qtType.setType(this.__v_raw, typeEnum.splice, changeData)
      // @ts-ignore
      qtType.getFlag(this.__v_raw).set(typeEnum.expectCangeNum, this.__v_raw.length + items.length - deleteCount - start)
    }
    return super.splice(start, deleteCount, ...items)
  }
  pop() {
    // @ts-ignore
    if(this.__v_raw.length){
      // @ts-ignore
      const start = this.__v_raw.length - 1
      const end = start
      const deleteCount = 1
      // @ts-ignore
      const changeData = qtType.getTargetType(this.__v_raw, typeEnum.pop)
      if (changeData) {
        changeData.start -= 1
        changeData.deleteCount += deleteCount
      } else {
        const datas = new QtChangeData(start, end, deleteCount)
        // @ts-ignore
        qtType.setType(this.__v_raw, typeEnum.pop, datas)
      }
    }
    return super.pop()
  }
  concat(items: any[]) {
    if(items.length){
      // @ts-ignore
      const start = this.__v_raw.length
      const end = start + items.length - 1
      // @ts-ignore
      let changeData = qtType.getTargetType(this.__v_raw, typeEnum.concat)
      if (changeData) {
        changeData.end += items.length
      } else {
        changeData = new QtChangeData(start, end)
        changeData.dataArr = items
        // @ts-ignore
        qtType.setType(this.__v_raw, typeEnum.concat, changeData)
      }
    }
    return super.concat(...items)
  }
}
export default QtArray