import { QtChangeData } from './types'
import type { IQtWatchOptions } from './watch'
const compareType = (oldObj: object, newObj: object) => {
  if (oldObj === null || newObj === null || oldObj === undefined || newObj === undefined) {
    return oldObj === newObj
  }
  if (!oldObj || !newObj) {
    return typeof (oldObj) === typeof (newObj)
  }
  return oldObj.constructor.name === newObj.constructor.name
}

const compareObj = (oldObj: any, newObj: any) => {
  if(oldObj.__qt_key_ && newObj.__qt_key_){
    return oldObj.__qt_key_ === newObj.__qt_key_
  }
  return JSON.stringify(oldObj) === JSON.stringify(newObj)
}
const compareNode = (oldNode: any, newNode: any) => {
  if (!compareType(oldNode, newNode)) {
    return false
  }
  if (typeof oldNode === 'object') {
    return compareObj(oldNode, newNode)
  }
  return oldNode == newNode
}

const qtDiffNodeChange = (oldNode: any, newNode: any) => {
  let diffRes = false
  if(oldNode.__qt_key_ && newNode.__qt_key_){
    // console.log(oldNode.__qt_key_ !== newNode.__qt_key_, '-oldNode.__qt_key_ !== newNode.__qt_key_')
    diffRes = oldNode.__qt_key_ === newNode.__qt_key_
  }
  if(diffRes && oldNode.__qt_change_num_ && newNode.__qt_change_num_){
    diffRes = newNode.__qt_change_num_ > oldNode.__qt_change_num_
  }
  return diffRes
}

export const qtDiff = (oldt: any[], newt: any[], options:IQtWatchOptions) => {
  // console.log('diff-', oldt, newt)
  // if(oldt.length===0) return //init 初始化
  // if(newt.length===0) return //clear 清空

  // const adds = new QtChangeData(-1,-1)
  const updates = new QtChangeData(-1,-1)
  const deletes = new QtChangeData(-1,-1)
  const inserts = new QtChangeData(-1,-1)
  
  for (let i = 0; i < oldt.length; i++) {//比较oldt中存在但在newt中不存在的元素
    // 删除newt中不存在的节点
    const oldItem = oldt[i];
    const newItem = newt.find(nItem=> compareNode(oldItem, nItem) )
    if (newItem) {
      if(deletes.deleteCount>0){
        options.delete(deletes.start, deletes.deleteCount)
        deletes.resetData()
      }
    }else{
      if(deletes.start === -1){
        deletes.start = i
        deletes.deleteCount = 1
      } else {
        deletes.deleteCount++
      }
    }
  }
  if(deletes.deleteCount>0){
    options.delete(deletes.start, deletes.deleteCount)
  }

  let repeatOldIndex = -1
  for (let i = 0; i < newt.length; i++) {//比较newt中存在但在oldt中不存在的元素
    const newItem = newt[i];
    const oldItem = oldt.find((oItem, oIndex) => {
      if(compareNode(oItem,newItem) && oIndex > repeatOldIndex){
        repeatOldIndex = oIndex//已经比较过的不在比较
        return true
      }
      return false
    })
    if (oldItem) {
      if(inserts.datas.size){
        options.insert(inserts.start, Array.from(inserts.datas.values()))
        inserts.resetData()
      }
      const isChange = qtDiffNodeChange(oldItem, newItem)
      // console.log(isChange, i, '--updates', oldItem.__qt_change_num_, newItem.__qt_change_num_)
      
      if(isChange){
        if(updates.start === -1){
          updates.start = i
          updates.updateCount = 1
          updates.rootUpdateCount = 1
          updates.end = updates.start+updates.updateCount
        }else{
          if(i > updates.start && i <= updates.end){
            updates.updateCount++
            updates.end++
            updates.rootUpdateCount++
          }else{
            options.update(updates.start, updates,oldt)
            updates.resetData()
            updates.start = i
            updates.updateCount = 1
            updates.rootUpdateCount = 1
            updates.end = updates.start+updates.updateCount
          }
        }
        updates.datas.set(i, newItem)
      }
    } else {
      if(inserts.start === -1){
        inserts.start = i
      }
      inserts.datas.set(i, newItem)
      if(updates.datas.size){
        options.update(updates.start, updates,oldt)
        updates.resetData()
      }
    }
  }
  if(updates.datas.size){
    options.update(updates.start, updates,oldt)
  }
  
  if(inserts.datas.size){
    options.add(Array.from(inserts.datas.values()))
  }
}