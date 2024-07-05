import { Native } from '@extscreen/es3-vue'

export const VirtualView = {
  /**
   * 使用UIManagerModule模块，根据sid，调用指定view node的函数 
   */
  callUIModule(sid:string, fnName:string, params){
    Native.callNative('UIManagerModule','callUIFunction', sid,fnName, params)
  },
  /**
   * 使用UIManagerModule模块，callUIModule方法的异步实现
   * @returns 返回Promise，在.then中接收原生应用返给web端的数据
   */
  async callUIModuleAsync(sid:string, fnName:string, params:Array<any>, maxTime = 1000){
    return new Promise(resolve=>{
      let timeoutId = setTimeout(() => {
        resolve(false);
      }, maxTime);
      Native.callNative('UIManagerModule','callUIFunctionWithPromise', sid,fnName, params,(res)=>{
        clearTimeout(timeoutId)
        resolve(res);
      })
    })
  },
  /**
   * 根据sid，调用指定view node的函数 
   */
  call(sid:string, fnName:string, params:Array<any>){
    Native.callNative('ExtendModule','callUIFunction', sid,fnName, params)
  },
  /**
   * call方法的异步实现
   * @returns 返回Promise，在.then中接收原生应用返给web端的数据
   */
  async callAsync(sid:string, fnName:string, params:Array<any>, maxTime = 1000){
    return new Promise(resolve=>{
      let timeoutId = setTimeout(() => {
        resolve(false);
      }, maxTime);
      Native.callNative('ExtendModule','callUIFunctionWithPromise', sid,fnName, params,(res)=>{
        clearTimeout(timeoutId)
        resolve(res);
      })
    })
  },
  /**
   * 扩展组件的sid，调用指定view node的函数，效率比call方法高 
   * @param tvsid 扩展组件的sid，如：qt-list-view、qt-grid-view、qt-waterfall、qt-tabs
   */
  tvCall(tvsid:string, sid:string, fnName:string, params:Array<any>){
    Native.callNative('ExtendModule','callUIFunction', tvsid, fnName, [sid,...params])
  },
  /**
   * tvCall方法的异步实现
   * @returns 返回Promise，在.then中接收原生应用返给web端的数据
   */
  tvCallAsync(tvsid:string, sid:string, fnName:string, params:Array<any>, maxTime=1000){
    return new Promise(resolve=>{
      let timeoutId = setTimeout(() => {
        resolve(false);
      }, maxTime);
      Native.callNative('ExtendModule','callUIFunctionWithPromise', tvsid, fnName, [sid,...params], (res)=>{
        clearTimeout(timeoutId)
        resolve(res)
      })
    })
  },
  /**
   * 更新虚拟列表子节点数据
   */
  updateChild(tvsid:string, sid:string, data:object){
    this.tvCall(tvsid, sid, 'searchReplaceItem', [data])
  },
  /**
   * 更新指定view数据
   * @deprecated 不推荐使用，频繁使用该方法会降低应用渲染性能 
   */
  updateBySid(sid:string, data:object){
    this.tvCall('', sid, 'searchReplaceItem', [data])
  },
  // requestFocusBySid(sid:string){
  //   this.call(sid, 'requestFocusBySid', [])
  // }
}
