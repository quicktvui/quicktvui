import {
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  reactive,
  ref,
  renderSlot,
  toRaw,
  useSlots,
  watch,
} from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import useBaseView from '../base/useBaseView'
import { useESDisplay } from '@extscreen/es3-core'
import { nextTick } from '@vue/runtime-core'
import {
  ESDirections,
  ESListViewItem,
  ESListViewItemFunctionParams,
} from '@extscreen/es3-component'
import { QTListViewItem } from '@quicktvui/quicktvui3'

function registerQTUL(app: ESApp) {
  registerElement('RecyclePool', {
    component: {
      name: 'RecyclePool',
      processEventData(evtData: any, nativeEventParams: any) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onCreateHolder':
            if (nativeEventParams) {
              event.batch = nativeEventParams.batch
              event.hashTag = nativeEventParams.hashTag
            }
            break
          case 'onBindHolder':
            if (nativeEventParams) {
              event.batch = nativeEventParams.batch
              event.hashTag = nativeEventParams.hashTag
            }
            break
          case 'onRecycleHolder':
            if (nativeEventParams) {
              event.batch = nativeEventParams.batch
              event.hashTag = nativeEventParams.hashTag
            }
            break
          case 'onBatch':
            if (nativeEventParams) {
              event.createItem = nativeEventParams.createItem
              event.bindItem = nativeEventParams.bindItem
              event.recycleItem = nativeEventParams.recycleItem
              event.hashTag = nativeEventParams.hashTag
              event.createTemplates = nativeEventParams.createTemplates
            }
            break
        }
        return event
      },
    },
  })

  const ULImpl = defineComponent({
    emits: [
      'item-click',
      'scroll',
      'item-focused',
      'item-attached',
      'item-detached',
      'item-bind',
      'item-unbind',
      'load-more',
      'scroll-state-changed',
      'focus-search-failed',
      'scrollYGreaterReference',
      'scrollYLesserReference',
    ],
    setup(props, context) {
      const viewRef = ref()
      const slots = useSlots()

      function scrollToIndex(
        x: number,
        y: number,
        animated?: boolean,
        duration?: number,
        offset?: number
      ) {
        Native.callUIFunction(viewRef.value, 'scrollToIndex', [x, y, animated, duration, offset])
      }

      function startScroll(data) {
        Native.callUIFunction(viewRef.value, 'startScroll', [data])
      }

      function setSelectChildPosition(position: number, requestFocus: boolean) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus])
      }

      function scrollToPositionWithOffset(
        x: number,
        y: number,
        anim: boolean,
        offset: number,
        duration: number
      ) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim])
      }

      function setPendingListCount(count: number) {
        console.log('setPendingListCount', count)
        Native.callUIFunction(viewRef.value, 'setListDataWithParams', [
          [],
          false,
          false,
          { pendingCount: count },
        ])
      }

      function notifyDataSetChanged(position: number, count: number, data: Array<ESListViewItem>) {
        console.log('call notifyDataSetChanged', position, count, data)

        if (syncItem.value.length < position + count) {
          syncItem.value.push(...Array(position + count - syncItem.value.length).fill({}))
        }
        syncItem.value.splice(position, count, ...data)
        Native.callUIFunction(viewRef.value, 'notifyDataSetChanged', [position, count, data])
      }

      function scrollToPositionWithOffsetInfiniteMode(
        position: number,
        offset: number,
        animated: boolean
      ): void {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffsetInfiniteMode', [
          position,
          offset,
          animated,
        ])
      }

      function scrollToPosition(index: number) {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [index])
      }

      function refreshListData(): void {
        Native.callUIFunction(viewRef.value, 'refreshListData', [])
      }

      function updateItemTraverse(
        position: number,
        data?: ESListViewItem,
        traverse?: boolean
      ): void {
        Native.callUIFunction(viewRef.value, 'updateItem', [position, data, traverse])
      }

      function requestItemLayout(position: number): void {
        Native.callUIFunction(viewRef.value, 'requestItemLayout', [position])
      }

      function updateItemRange(position: number, count: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data])
      }

      function insertItemRange(position: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data])
      }

      function updateItemMatched(params: Record<string, any>, data: ESListViewItem): void {
        Native.callUIFunction(viewRef.value, 'updateItemMatched', [params, data])
      }

      function updateItemMatchedByKey(
        idKey: string,
        params: Record<string, any>,
        data: ESListViewItem
      ): void {
        Native.callUIFunction(viewRef.value, 'updateItemMatched', [idKey, params, data])
      }

      function deleteItemRange(position: number, count: number) {
        Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count])
      }

      function setListData(data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'setListData', data)
      }

      function setListDataWithParams(data: Array<ESListViewItem>, autoChangeVisible: boolean) {
        Native.callUIFunction(viewRef.value, 'setListDataWithParams', [data, autoChangeVisible])
      }

      function addListData(data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'addListData', data)
      }

      function addListDataWithParams(data: Array<ESListViewItem>, deleteCount: number) {
        Native.callUIFunction(viewRef.value, 'addListDataWithParams', [data, deleteCount])
      }

      function destroy() {
        Native.callUIFunction(viewRef.value, 'destroy', [])
      }

      function recycle(): void {
        Native.callUIFunction(viewRef.value, 'recycle', [])
      }

      function scrollToTop() {
        Native.callUIFunction(viewRef.value, 'scrollToTop', [])
      }

      function scrollToFocus(
        position: number,
        scrollOffset: number,
        delay: number,
        target: string
      ): void {
        Native.callUIFunction(viewRef.value, 'scrollToFocus', [
          position,
          scrollOffset,
          delay,
          target,
        ])
      }

      function prepareForRecycle() {
        Native.callUIFunction(viewRef.value, 'prepareForRecycle', [])
      }

      function setDisplay(value: boolean) {
        Native.callUIFunction(viewRef.value, 'setDisplay', [value])
      }

      function changeDisplayState(display: string, autoDataState: any) {
        Native.callUIFunction(viewRef.value, 'changeDisplayState', [display, autoDataState])
      }

      function notifySaveInstance() {
        Native.callUIFunction(viewRef.value, 'notifySaveInstance', [])
      }

      function updateItemProps(position: number, name: string, toUpdateMap: Object) {
        Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true])
      }

      function dispatchItemFunction(
        position: number,
        name: string,
        funcName: string,
        params: ESListViewItemFunctionParams
      ) {
        Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [
          position,
          name,
          funcName,
          params,
        ])
      }

      function clearPostTask() {
        Native.callUIFunction(viewRef.value, 'clearAllPostTask', [])
      }

      function clearPostTaskByCate(data: Array<number>): void {
        Native.callUIFunction(viewRef.value, 'clearPostTaskByCate', [data])
      }

      function clearData(): void {
        Native.callUIFunction(viewRef.value, 'clearData', [])
      }

      function pausePostTask() {
        Native.callUIFunction(viewRef.value, 'pausePostTask', [])
      }

      function resumePostTask() {
        Native.callUIFunction(viewRef.value, 'resumePostTask', [])
      }

      function requestLayoutManual(): void {
        Native.callUIFunction(viewRef.value, 'requestLayoutManual', [])
      }

      function setSpanCount(count: number) {
        Native.callUIFunction(viewRef.value, 'setSpanCount', [count])
      }

      function searchReplaceItem(id: string, item: ESListViewItem): void {
        Native.callUIFunction(viewRef.value, 'searchReplaceItem', [])
      }

      function setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void {
        Native.callUIFunction(viewRef.value, 'setCustomStateEnableOnFocus', [id, params])
      }

      function setItemCustomState(position: number, stateName: string, stateValue: boolean) {
        Native.callUIFunction(viewRef.value, 'setItemCustomState', [
          position,
          stateName,
          stateValue,
        ])
      }

      function dispatchItemFunctionWithPromise(
        position: number,
        targetName: string,
        functionTargetName: string,
        params: Array<Record<string, any>>
      ): Promise<Record<string, any>> {
        return Native.callNativeWithPromise(viewRef.value, 'dispatchItemFunctionWithPromise', [
          position,
          targetName,
          functionTargetName,
          params,
        ])
      }

      function getScrollOffset(callback: () => void) {
        Native.callUIFunction(viewRef.value, 'getScrollOffset', [], callback)
      }

      //----------------------------------------------------------------------------------------
      //########################################################################################
      //########################################################################################
      //########################################################################################
      //----------------------------------------------------------------------------------------
      function setInitPosition(position: number) {
        Native.callUIFunction(viewRef.value, 'setInitPosition', [position])
      }

      function deleteItem(position: number, count: number) {
        Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count])
      }

      function updateItem(pos: number, data: ESListViewItem) {
        Native.callUIFunction(viewRef.value, 'updateItem', [pos, data])
      }

      function updateItemList(position: number, count: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data])
      }

      function addItem(position: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data])
      }

      function dispatchTVItemFunction(
        id: number | string,
        name: string,
        funcName: string,
        params: ESListViewItemFunctionParams
      ) {
        Native.callUIFunction(viewRef.value, 'dispatchTVItemFunction', [id, name, funcName, params])
      }

      function scrollToPositionOffset(
        x: number,
        y: number,
        anim: boolean,
        offset: number,
        duration: number
      ) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim])
      }

      function notifyRestoreInstance() {
        Native.callUIFunction(viewRef.value, 'notifyRestoreInstance', [])
      }

      function setSelectPosition(position: number, requestFocus: boolean) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus])
      }

      function requestFocus(position: number) {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
      }

      function clearFocus() {
        Native.callUIFunction(viewRef.value, 'clearFocus', [])
      }

      function blockRootFocus() {
        Native.callUIFunction(viewRef.value, 'blockRootFocus', [])
      }

      function unBlockRootFocus() {
        Native.callUIFunction(viewRef.value, 'unBlockRootFocus', [])
      }

      function hasFocus(callback: (res) => void) {
        Native.callUIFunction(viewRef.value, 'hasFocus', (res) => {
          callback(res)
        })
      }

      function setBlockFocusDirectionsOnFail(data: Array<ESDirections>) {
        Native.callUIFunction(viewRef.value, 'setBlockFocusDirectionsOnFail', [data])
      }

      function setBackgroundColor(color: string) {
        Native.callUIFunction(viewRef.value, 'setBackgroundColor', [color])
      }

      function setAutoFocus(tag: string, delay: number) {
        Native.callUIFunction(viewRef.value, 'setAutoFocus', [tag, delay])
      }

      context.expose({
        viewRef,
        ...useBaseView(viewRef),
        scrollToIndex,
        startScroll,
        setSelectChildPosition,
        scrollToPositionWithOffset,
        scrollToPositionWithOffsetInfiniteMode,
        scrollToPosition,
        setPendingListCount,
        notifyDataSetChanged,
        refreshListData,
        updateItemTraverse,
        requestItemLayout,
        updateItemRange,
        insertItemRange,
        updateItemMatched,
        updateItemMatchedByKey,
        deleteItemRange,
        setListData,
        setListDataWithParams,
        addListData,
        addListDataWithParams,
        destroy,
        recycle,
        scrollToTop,
        scrollToFocus,
        prepareForRecycle,
        setDisplay,
        changeDisplayState,
        notifySaveInstance,
        updateItemProps,
        dispatchItemFunction,
        clearPostTask,
        clearPostTaskByCate,
        clearData,
        pausePostTask,
        resumePostTask,
        requestLayoutManual,
        setSpanCount,
        searchReplaceItem,
        setCustomStateEnableOnFocus,
        setItemCustomState,
        dispatchItemFunctionWithPromise,
        getScrollOffset,
        setInitPosition,
        deleteItem,
        updateItem,
        updateItemList,
        addItem,
        dispatchTVItemFunction,
        scrollToPositionOffset,
        notifyRestoreInstance,
        setSelectPosition,
        requestFocus,
        clearFocus,
        blockRootFocus,
        unBlockRootFocus,
        hasFocus,
        setBlockFocusDirectionsOnFail,
        setBackgroundColor,
        setAutoFocus,
      })

      //------------------------------------------------------------------------------

      const holders = reactive<any[]>([])
      const templates = reactive<any[]>([])
      let expectedItemCount = -1
      let pageSize = 1
      let initHolderCount = 20
      let expectedTotalCount = -1
      let uid = getCurrentInstance()?.uid
      let currentLength = ref(0)
      let isSlotFooter = ref(false)

      let watchStartTime = 0
      let setDataStartTime = -1

      let syncItem = ref<Array<QTListViewItem>>([])
      // let recordSyncItem: Array<any> = []
      let currntPage = props.pageNo

      let pageSlices: Map<number, PageSlice> = new Map()

      let isLoadPage = props.pageSize > 0 && props.expectedTotalCount > 0

      onMounted(() => {
        const itemLength = props.items.length
        const pageSize = props.pageSize
        console.log(
          `--------QTUL-----------onMounted----->>>> itemLength: ${itemLength},expectedTotalCount ${props.expectedTotalCount} ,pageSize:${pageSize}`
        )
        if (props.expectedTotalCount > 0) {
          initPendingData()
        } else if (props.items && props.items.length > 0) {
          initItemData()
        }
      })

      watch(
        () => props.items,
        (newVal, oldVal) => {
          console.log(`--------QTUL-----------watch----->>>>`, props.items)
          if (!isLoadPage) {
            initItemData()
          }
        },
        {}
      )

      function initPendingData() {
        console.log(`--------QTUL-----------initPendingData----->>>>`)
        nextTick(() => {
          syncItem.value = props.items as unknown as Array<QTListViewItem>
          setDataStartTime = new Date().getTime()
          Native.callUIFunction(viewRef.value, 'setListDataWithParams', [
            [],
            false,
            false,
            props.expectedTotalCount > 0 ? { pendingCount: props.expectedTotalCount } : {},
          ])
        })
      }

      function loadPageIfNeeded(position: number) {
        if (isLoadPage) {
          const pageSize = props.pageSize
          const expectedTotalCount = props.expectedTotalCount
          const pageCount = Math.ceil(expectedTotalCount / pageSize)
          const currentPage = Math.floor(position / pageSize) + 1
          // let needLoad = false
          let slice: PageSlice | undefined = pageSlices.get(currentPage)
          // console.log(`loadPageIfNeeded pageSizes: ${pageSize},expectedTotalCount: ${expectedTotalCount},pageCount: ${pageCount},currentPage: ${currentPage}`)
          if (currentPage < pageCount) {
            if (slice) {
              //const slice : PageSlice = pageSlices.get(currentPage) as PageSlice
              // if(slice.dataState == 0){
              //   slice.dataState = 1
              // }
            } else {
              slice = {
                dataState: 0,
                pageNo: currentPage,
                startPosition: (currentPage - 1) * pageSize,
                endPosition: Math.min(currentPage * pageSize, expectedTotalCount),
              }
              pageSlices.set(currentPage, slice)
            }
            if (slice && slice.dataState == 0) {
              slice.dataState = 1
              console.warn(
                `exe loadPage ---->>>>> currentPage: ${currentPage},startPosition: ${slice.startPosition},endPosition: ${slice.endPosition},pageSize: ${pageSize}`
              )
              props.loadPage(currentPage, slice.startPosition, pageSize)
            }
          }
        }
      }

      function preparePaging() {
        if (props.pageSize > 0) {
          // const pageSize = props.pageSize
          // const expectedTotalCount = props.expectedTotalCount
          // const pageCount = Math.ceil(expectedTotalCount / pageSize)
          // let start = 0
          // let end = pageSize
          // for (let i = 0; i < pageCount; i++) {
          //    let slice: PageSlice = {
          //         readyState:false,
          //         pageNo: i + 1,
          //         startPosition: start,
          //         endPosition: end
          //    }
          //     pageSlices.push(slice)
          //     start = end
          //     end = Math.min(end + pageSize, expectedTotalCount)
          // }
        }
      }

      function initItemData() {
        const itemLength = props.items.length
        const expectedTotalCount = props.expectedTotalCount

        console.log(
          `--------QTUL-----------initItemData----->>>> itemLength: ${itemLength},expectedTotalCount ${expectedTotalCount} ,`
        )
        watchStartTime = new Date().getTime()
        // if (isLoadPage) {
        // if (recordSyncItem.length != props.expectedTotalCount) {
        //   recordSyncItem = Array(props.expectedTotalCount)
        //     .fill(null)
        //     .map(() => ({}))
        //   let array = new Array(props.expectedTotalCount).fill(null).map(() => ({
        //     type: (props.items as unknown as Array<QTListViewItem>)[0].type,
        //   }))
        //   syncItem.value.push(...array)
        // }
        // syncItem.value.splice(
        //   (currntPage - 1) * props.pageSize,
        //   10,
        //   ...toRaw(props.items as unknown as Array<QTListViewItem>)
        // )
        // recordSyncItem.splice((currntPage - 1) * props.pageSize, 10, ...toRaw(props.items))
        //   syncItem.value = props.items as unknown as Array<QTListViewItem>
        // }
        syncItem.value = props.items as unknown as Array<QTListViewItem>
        console.log('-----QTUL----watch---START----开始时间：--->>>>>', watchStartTime, syncItem)
        // if (holders.length < 1) {
        //   let initCount = 0
        //   if (pageSize > 0) {
        //     // initCount =   Math.min(pageSize, syncItem.length)
        //     // initCount =   Math.min(pageSize, syncItem.length)
        //     initCount = 0
        //   } else {
        //     //pageSize小于0时，表示全部加载
        //     initCount = syncItem.value.length
        //   }
        //   let batch: any = []
        //   // const {itemType,position} = list[i]
        //   for (let i = 0; i < initCount; i++) {
        //     let item: any = toRaw(syncItem.value[i])
        //     batch.push({
        //       itemType: item.type,
        //       position: i,
        //       hdIndex: i,
        //     })
        //   }
        //   crateH(batch, 'hashTag')
        // }
        const rawArray: any = []
        for (let i = 0; i < syncItem.value.length; i++) {
          const item: any = toRaw(syncItem.value[i])
          // rawArray.push({
          //   type: item.type,
          //   itemSize: item.itemSize,
          //   span: item.span,
          //   decoration: item.decoration ? item.decoration : {},
          // })
          rawArray.push(item)
        }
        currentLength.value = syncItem.value.length

        nextTick(() => {
          setDataStartTime = new Date().getTime()
          Native.callUIFunction(viewRef.value, 'setListDataWithParams', [
            rawArray,
            false,
            false,
            {},
          ])
        })
        const endTime = new Date().getTime()
        console.log('-----QTUL----watch---END---耗时---->>>>>', endTime - watchStartTime)
      }

      function crateH(batch: [], hashTag: string) {
        const startTime = new Date().getTime()
        console.log('-----QTUL----crateH---START---HOLDER--->>>>>', startTime, batch)
        const list = [...(Array.isArray(batch) ? batch : [batch])]
        let start = holders.length
        for (let i = 0; i < list.length; i++) {
          const { itemType, position, hdIndex } = list[i]
          holders.push({
            itemType: itemType,
            position: position,
            hdIndex: start + i,
          })
        }
        const endTime = new Date().getTime()
        console.log('-----QTUL----crateH---END---耗时---->>>>>', endTime - startTime)
      }

      function createT(params: any) {
        let { item, type } = params
        console.log('++createTemplate', `template:${JSON.stringify(item)}`)
        const start = templates.length
        templates.push({
          type: type,
          hdIndex: start,
          isTemplate: true,
          item: item,
        })
      }

      function bindH(batch: []) {
        const startTime = new Date().getTime()
        console.log('-----QTUL----bindH---START------->>>>>', batch)
        const list = [...(Array.isArray(batch) ? batch : [batch])]
        for (let i = 0; i < list.length; i++) {
          const { position, sid, hdIndex } = list[i]
          if (hdIndex != -1 && holders[hdIndex]) {
            holders[hdIndex].position = position
          }
        }
        const endTime = new Date().getTime()
        console.log('-----QTUL----bindH---END---耗时---->>>>>', endTime - startTime)
      }

      function handleBatch(params: any) {
        const startTime = new Date().getTime()

        let { createItem, bindItem, recycleItem, hashTag, createTemplates } = params
        // Native.callUIFunction(viewRef.value, 'notifyBatchStart', [hashTag]);
        // if(recycleItem){
        //   recycleH(recycleItem)
        // }
        if (createItem) {
          console.log(
            '--[native]---QTUL----handleBatch---START----创建Item--->>>>>',
            createItem,
            JSON.stringify(holders)
          )
          crateH(createItem, hashTag)
        }
        if (bindItem) {
          console.log(
            '--[native]---QTUL----handleBatch---START-----绑定Item-->>>>>',
            bindItem,
            JSON.stringify(holders)
          )
          bindH(bindItem)
        }
        if (createTemplates) {
          const list = [...(Array.isArray(createTemplates) ? createTemplates : [createTemplates])]
          for (let i = 0; i < list.length; i++) {
            createT(list[i])
          }
        }

        const endTime = new Date().getTime()

        console.log(
          '----[native]--QTUL----handleBatch---END-结束--耗时---HOLDER->>>>>',
          endTime - startTime,
          '总耗时：',
          endTime - watchStartTime,
          JSON.stringify(holders)
        )
      }

      function recycleH(batch: []) {
        console.log('++recycleH', batch)
        const list = [...(Array.isArray(batch) ? batch : [batch])]
        for (let i = 0; i < list.length; i++) {
          const { sid, hdIndex } = list[i]
          if (hdIndex != -1 && holders[hdIndex]) {
            holders[hdIndex].position = -1
          }
        }
      }

      const renderTemplates = (ts) => {
        console.log('renderTemplates called ', `renderTemplates:${JSON.stringify(ts)}`)
        return ts.map((t: any, index: number) => {
          return h(
            'FastItemView',
            {
              key: t.hdIndex,
              type: t.type,
              focusable: false,
              // position:hd.position
              hdIndex: t.hdIndex,
              poolItem: true,
              isTemplate: true,
              // item:props.items? props.items[hd.position] : {}
            },
            renderSlot(context.slots, 'item', {
              // key:hd.sid,
              // sid:hd.sid,
              item: t.item,
            })
            // renderSlotContent('item',[])
          )
        })
      }

      const traverseDomTree = (element) => {
        if (!element) {
          console.warn('Element is null or undefined')
          return
        }
        // 遍历元素节点的子元素
        element.children?.forEach((child) => {
          traverseDomTree(child)
        })
      }

      const renderItems = (hd) => {
        // const startTime = new Date().getTime()
        // console.log("-----QTUL----renderItems---START------->>>>>",)
        const children = [
          renderSlot(context.slots, 'item', {
            item: syncItem.value && hd.position > -1 ? syncItem.value[hd.position] : {},
          }),
        ]
        if (isSlotFooter.value) {
          let footerItem = renderSlot(context.slots, 'footer', {
            item: syncItem.value && hd.position > -1 ? syncItem.value[hd.position] : {},
            index: hd.position,
          })
          children.push(footerItem)
        }
        // const endTime = new Date().getTime()
        // console.log("-----QTUL----renderItems---END---耗时---->>>>>", (endTime - startTime))
        return children
      }

      const renderSlotContent = (slotName, fallbackContent) => {
        return slots[slotName]?.() || fallbackContent
      }

      const renderHolders = (holders) => {
        const startTime = new Date().getTime()
        console.log(
          '-----QTUL----renderHolders---START----需要渲染的Item的数量--绑定->>>>>',
          holders.length,
          holders
        )

        let children = holders.map((hd: any, index: number) => {
          return h(
            'FastItemView',
            {
              key: hd.hdIndex,
              type: hd.itemType,
              focusable: false,
              // position:hd.position,
              hdIndex: hd.hdIndex,
              hdPosition: hd.position,
              position: 'absolute',
              poolItem: true,
              // item:syncItem? syncItem[hd.position] : {}
            },
            renderItems(hd)
          )
        })
        nextTick(() => {
          nextTick(() => {
            Native.callUIFunction(viewRef.value, 'notifyBatchEnd', [])
          })
        })
        const endTime = new Date().getTime()
        console.log('-----QTUL----renderHolders---END---耗时---->>>>>', endTime - startTime)
        return children
      }
      return () => {
        isSlotFooter.value = context.slots.footer ? true : false
        // if(props.templateConfig){
        //   props.templateConfig.defaultTemplateOnly = props.templateRenderMode
        //   props.templateConfig.disableTemplate = props.disableTemplate
        // }
        const items = context.slots.item
          ? h(
              'RecyclePool',
              {
                key: 'RecyclePool',
                slot: 'item',
                pagingPageSize: pageSize,
                expectedTotalCount: expectedTotalCount,
                enableDelayLoad: true,
                disableDefaultPlaceholder: props.disableDefaultPlaceholder,
                templateConfig: props.templateConfig,
                onCreateHolder: (evt: any) => {
                  console.log('----QTUL---onCreateHolder------->>>>>', evt)
                },
                onBindHolder: (evt: any) => {
                  console.log('----QTUL---onBindHolder------->>>>>', evt)
                  //bindH(evt)
                },
                onRecycleHolder: (evt: any) => {
                  console.log('----QTUL---onRecycleHolder------->>>>>', evt)
                  //recycleH(evt)
                },
                onBatch: (evt: any) => {
                  const batchStartTime = new Date().getTime()
                  console.log(
                    '-----QTUL----onBatch事件---',
                    evt,
                    '----从watch开始耗时---->>>>>',
                    batchStartTime - watchStartTime,
                    '----从setData开始耗时----->>>>>',
                    batchStartTime - setDataStartTime
                  )
                  handleBatch(evt)
                },
              },
              [...renderHolders(holders), ...renderTemplates(templates)]
            )
          : []

        const endTime = new Date().getTime()
        console.log('-----QTUL----RecyclePool---END---耗时---->>>>>', endTime - watchStartTime)

        return h(
          'FastListView',
          {
            key: 'FastListView',
            ref: viewRef,
            disableVirtualDOM: true,
            listenBoundEvent: true,
            enableKeepFocus: true,
            onItemClick: (evt) => {
              console.log('----QTUL---onItemClick------->>>>>', evt)
              context.emit('item-click', evt)
            },
            onScroll: (evt) => {
              console.log('----QTUL---onScroll------->>>>>', evt)
              context.emit('scroll', evt)
            },
            onItemFocused: (evt) => {
              console.log('----QTUL---onItemFocused------->>>>>', evt)
              context.emit('item-focused', evt)
            },
            onAttachedToWindow: (evt) => {
              // console.log('----QTUL---onAttachedToWindow------->>>>>', evt)
              context.emit('item-attached', evt)
            },
            onDetachedFromWindow: (evt) => {
              // console.log('----QTUL---onDetachedFromWindow------->>>>>', evt)
              context.emit('item-detached', evt)
            },
            onBindItem: (evt) => {
              let { position, sid } = evt
              console.log(
                `----QTUL---onBindItem------->>>>> position:${position},isLoadPage:${isLoadPage}`
              )
              //console.log(evt.position,currentLength.value,evt.position == currentLength.value - 1,'item-binditem-binditem-bind')
              if (isLoadPage) {
                // if (recordSyncItem[evt.position]) {
                //   if (Math.floor(evt.position / props.pageSize) + 1 != currntPage) {
                //     currntPage = Math.floor(evt.position / props.pageSize) + 1
                //     props.loadPage(currntPage)
                //   }
                // }
                if (evt.position && evt.position > -1) {
                  //为了不看到空白，提前加载preLoadNumber个
                  let wishPosition = Math.min(
                    props.expectedTotalCount - 1,
                    evt.position + props.preLoadNumber
                  )
                  loadPageIfNeeded(wishPosition)
                }
              } else {
                if (evt.position == currentLength.value - 1) {
                  props.loadMore()
                }
              }
              context.emit('item-bind', evt)
            },
            onUnbindItem: (evt) => {
              // console.log('----QTUL---onUnbindItem------->>>>>', evt)
              context.emit('item-unbind', evt)
            },
            onLoadMore: (evt) => {
              // console.log('----QTUL---onLoadMore------->>>>>', evt)
              context.emit('load-more', evt)
            },
            onScrollStateChanged: (evt) => {
              // console.log('----QTUL---onScrollStateChanged------->>>>>', evt)
              context.emit('scroll-state-changed', evt)
            },
            onFocusSearchFailed: (evt) => {
              // console.log('----QTUL---onFocusSearchFailed------->>>>>', evt)
              context.emit('focus-search-failed', evt)
            },
            onScrollYGreaterReference: (evt) => {
              //console.log('----QTUL---onScrollYGreaterReference------->>>>>', evt)
              context.emit('scrollYGreaterReference', evt)
            },
            onScrollYLesserReference: (evt) => {
              // console.log('----QTUL---onScrollYLesserReference------->>>>>', evt)
              context.emit('scrollYLesserReference', evt)
            },
          },
          [context.slots.default && context.slots.default(), items]
        )
      }
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      expectedTotalCount: {
        type: Number,
        default: -1,
      },
      loadMore: {
        type: Function,
        default: null,
      },
      loadPage: {
        type: Function,
        default: null,
      },
      pageNo: {
        type: Number,
        default: -1,
      },
      pageSize: {
        type: Number,
        default: -1,
      },
      preLoadNumber: {
        type: Number,
        default: 5,
      },
      disableDefaultPlaceholder: {
        type: Boolean,
        default: false,
      },
      templateConfig: {
        type: Object,
        default: () => {
          return {
            defaultTemplateOnly: false,
            enablePostDelay: false,
            disableTemplate: false,
          }
        },
      },
    },
  })
  app.component('qt-ul', ULImpl)
}

export interface QTULTemplate {
  defaultTemplateOnly?: boolean //是否默认只使用模板渲染，不创建dom
  disableTemplate?: boolean // 暂时不用
  forceSkipWarning?: boolean // 暂时不用
  enablePostDelay?: boolean //启用后，在列表滚动时，不会更新页面，只有当
  realDOMTypes?: number[] //当defaultTemplateOnly为true时，需要创建真实dom的类型
  templateOnlyTypes?: number[] //当defaultTemplateOnly为false时，需要渲染为模板的类型
  skipWarningTypes?: number[] //暂时不用
}

interface PageSlice {
  dataState: number //0:未加载，1:加载中，2:加载完成
  pageNo: number
  startPosition: number
  endPosition: number
}

export default registerQTUL
