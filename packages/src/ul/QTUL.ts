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
    watch
} from 'vue';
import {ESApp, Native, registerElement} from "@extscreen/es3-vue";
import useBaseView from '../base/useBaseView'
import {useESDisplay} from "@extscreen/es3-core";
import {nextTick} from "@vue/runtime-core";
import {ESDirections, ESListViewItem, ESListViewItemFunctionParams} from "@extscreen/es3-component";

function registerQTUL(app: ESApp) {

    registerElement('RecyclePool', {
        component: {
            name: 'RecyclePool',
            processEventData(evtData: any, nativeEventParams: any) {
                const {handler: event, __evt: nativeEventName} = evtData;
                switch (nativeEventName) {
                    case 'onCreateHolder':
                        if (nativeEventParams) {
                            event.batch = nativeEventParams.batch;
                            event.hashTag = nativeEventParams.hashTag;
                        }
                        break;
                    case 'onBindHolder':
                        if (nativeEventParams) {
                            event.batch = nativeEventParams.batch;
                            event.hashTag = nativeEventParams.hashTag;
                        }
                        break;
                    case 'onRecycleHolder':
                        if (nativeEventParams) {
                            event.batch = nativeEventParams.batch;
                            event.hashTag = nativeEventParams.hashTag;
                        }
                        break;
                    case 'onBatch':
                        if (nativeEventParams) {
                            event.createItem = nativeEventParams.createItem;
                            event.bindItem = nativeEventParams.bindItem;
                            event.recycleItem = nativeEventParams.recycleItem;
                            event.hashTag = nativeEventParams.hashTag;
                        }
                        break;
                }
                return event;
            },
        },
    });


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

            function scrollToIndex(x: number, y: number, animated?: boolean, duration?: number, offset?: number) {
                Native.callUIFunction(viewRef.value, 'scrollToIndex', [x, y, animated, duration, offset]);
            }

            function startScroll(data) {
                Native.callUIFunction(viewRef.value, 'startScroll', [data]);
            }

            function setSelectChildPosition(position: number, requestFocus: boolean) {
                Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus]);
            }

            function scrollToPositionWithOffset(x: number, y: number, anim: boolean, offset: number, duration: number) {
                Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim]);
            }

            function scrollToPositionWithOffsetInfiniteMode(position: number, offset: number, animated: boolean): void {
                Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffsetInfiniteMode', [position, offset, animated]);
            }

            function scrollToPosition(index: number) {
                Native.callUIFunction(viewRef.value, 'scrollToPosition', [index]);
            }

            function refreshListData(): void {
                Native.callUIFunction(viewRef.value, 'refreshListData', []);
            }

            function updateItemTraverse(position: number, data?: ESListViewItem, traverse?: boolean): void {
                Native.callUIFunction(viewRef.value, 'updateItem', [position, data, traverse]);
            }

            function requestItemLayout(position: number): void {
                Native.callUIFunction(viewRef.value, 'requestItemLayout', [position]);
            }

            function updateItemRange(position: number, count: number, data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data]);
            }

            function insertItemRange(position: number, data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data]);
            }

            function updateItemMatched(params: Record<string, any>, data: ESListViewItem): void {
                Native.callUIFunction(viewRef.value, 'updateItemMatched', [params, data]);
            }

            function updateItemMatchedByKey(idKey: string, params: Record<string, any>, data: ESListViewItem): void {
                Native.callUIFunction(viewRef.value, 'updateItemMatched', [idKey, params, data]);
            }

            function deleteItemRange(position: number, count: number) {
                Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count]);
            }

            function setListData(data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'setListData', data);
            }

            function setListDataWithParams(data: Array<ESListViewItem>, autoChangeVisible: boolean) {
                Native.callUIFunction(viewRef.value, 'setListDataWithParams', [data, autoChangeVisible]);
            }

            function addListData(data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'addListData', data);
            }

            function addListDataWithParams(data: Array<ESListViewItem>, deleteCount: number) {
                Native.callUIFunction(viewRef.value, 'addListDataWithParams', [data, deleteCount]);
            }

            function destroy() {
                Native.callUIFunction(viewRef.value, 'destroy', []);
            }

            function recycle(): void {
                Native.callUIFunction(viewRef.value, 'recycle', []);
            }

            function scrollToTop() {
                Native.callUIFunction(viewRef.value, 'scrollToTop', []);
            }

            function scrollToFocus(position: number, scrollOffset: number, delay: number, target: string): void {
                Native.callUIFunction(viewRef.value, 'scrollToFocus', [position, scrollOffset, delay, target]);
            }

            function prepareForRecycle() {
                Native.callUIFunction(viewRef.value, 'prepareForRecycle', []);
            }

            function setDisplay(value: boolean) {
                Native.callUIFunction(viewRef.value, 'setDisplay', [value]);
            }

            function changeDisplayState(display: string, autoDataState: any) {
                Native.callUIFunction(viewRef.value, 'changeDisplayState', [display, autoDataState]);
            }

            function notifySaveInstance() {
                Native.callUIFunction(viewRef.value, 'notifySaveInstance', []);
            }

            function updateItemProps(position: number, name: string, toUpdateMap: Object) {
                Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true]);
            }

            function dispatchItemFunction(position: number, name: string, funcName: string, params: ESListViewItemFunctionParams) {
                Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [position, name, funcName, params]);
            }

            function clearPostTask() {
                Native.callUIFunction(viewRef.value, 'clearAllPostTask', []);
            }

            function clearPostTaskByCate(data: Array<number>): void {
                Native.callUIFunction(viewRef.value, 'clearPostTaskByCate', [data]);
            }

            function clearData(): void {
                Native.callUIFunction(viewRef.value, 'clearData', []);
            }

            function pausePostTask() {
                Native.callUIFunction(viewRef.value, 'pausePostTask', []);
            }

            function resumePostTask() {
                Native.callUIFunction(viewRef.value, 'resumePostTask', []);
            }

            function requestLayoutManual(): void {
                Native.callUIFunction(viewRef.value, 'requestLayoutManual', []);
            }

            function setSpanCount(count: number) {
                Native.callUIFunction(viewRef.value, 'setSpanCount', [count]);
            }

            function searchReplaceItem(id: string, item: ESListViewItem): void {
                Native.callUIFunction(viewRef.value, 'searchReplaceItem', []);
            }

            function setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void {
                Native.callUIFunction(viewRef.value, 'setCustomStateEnableOnFocus', [id, params]);
            }

            function setItemCustomState(position: number, stateName: string, stateValue: boolean) {
                Native.callUIFunction(viewRef.value, 'setItemCustomState', [position, stateName, stateValue]);
            }

            function dispatchItemFunctionWithPromise(position: number,
                                                     targetName: string,
                                                     functionTargetName: string,
                                                     params: Array<Record<string, any>>): Promise<Record<string, any>> {
                return Native.callNativeWithPromise(viewRef.value, 'dispatchItemFunctionWithPromise', [position, targetName, functionTargetName, params]);
            }

            function getScrollOffset(callback: () => void) {
                Native.callUIFunction(viewRef.value, 'getScrollOffset', [], callback);
            }

            //----------------------------------------------------------------------------------------
            //########################################################################################
            //########################################################################################
            //########################################################################################
            //----------------------------------------------------------------------------------------
            function setInitPosition(position: number) {
                Native.callUIFunction(viewRef.value, 'setInitPosition', [position]);
            }

            function deleteItem(position: number, count: number) {
                Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count]);
            }

            function updateItem(pos: number, data: ESListViewItem) {
                Native.callUIFunction(viewRef.value, 'updateItem', [pos, data]);
            }

            function updateItemList(position: number, count: number, data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data]);
            }

            function addItem(position: number, data: Array<ESListViewItem>) {
                Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data]);
            }

            function dispatchTVItemFunction(id: number | string, name: string, funcName: string, params: ESListViewItemFunctionParams) {
                Native.callUIFunction(viewRef.value, 'dispatchTVItemFunction', [id, name, funcName, params]);
            }

            function scrollToPositionOffset(x: number, y: number, anim: boolean, offset: number, duration: number) {
                Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim]);
            }

            function notifyRestoreInstance() {
                Native.callUIFunction(viewRef.value, 'notifyRestoreInstance', []);
            }

            function setSelectPosition(position: number, requestFocus: boolean) {
                Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus]);
            }

            function requestFocus(position: number) {
                Native.callUIFunction(viewRef.value, 'requestChildFocus', [position]);
            }

            function clearFocus() {
                Native.callUIFunction(viewRef.value, 'clearFocus', []);
            }

            function blockRootFocus() {
                Native.callUIFunction(viewRef.value, 'blockRootFocus', []);
            }

            function unBlockRootFocus() {
                Native.callUIFunction(viewRef.value, 'unBlockRootFocus', []);
            }

            function hasFocus(callback: (res) => void) {
                Native.callUIFunction(viewRef.value, 'hasFocus', (res) => {
                    callback(res);
                });
            }

            function setBlockFocusDirectionsOnFail(data: Array<ESDirections>) {
                Native.callUIFunction(viewRef.value, 'setBlockFocusDirectionsOnFail', [data]);
            }

            function setBackgroundColor(color: string) {
                Native.callUIFunction(viewRef.value, 'setBackgroundColor', [color]);
            }

            function setAutoFocus(tag: string, delay: number) {
                Native.callUIFunction(viewRef.value, 'setAutoFocus', [tag, delay]);
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

            let expectedItemCount = -1;
            let pageSize = -1;
            let initHolderCount = 20;
            let expectedTotalCount = -1;
            let uid = getCurrentInstance()?.uid;


            watch(() => props.items, (hs) => {
                console.log('----QTUL---watch----START--->>>>>', props.items)
                console.log('data changed', hs)
                if (holders.length < 1) {
                    let initCount = 0;
                    if (pageSize > 0) {
                        // initCount =   Math.min(pageSize, props.items.length)
                        // initCount =   Math.min(pageSize, props.items.length)
                        initCount = 0;
                    } else {
                        //pageSize小于0时，表示全部加载
                        initCount = props.items.length
                    }
                    let batch: any = []
                    // const {itemType,position} = list[i]
                    for (let i = 0; i < initCount; i++) {
                        let item: any = props.items[i]
                        batch.push({
                            itemType: item.type,
                            position: i,
                        })
                    }
                    crateH(batch, 'hashTag')
                    console.log('----QTUL---watch-----END-->>>>>', props.items)
                }
                nextTick(() => {
                    console.log('----QTUL---watch----setListDataWithParams--->>>>>', props.items)
                    Native.callUIFunction(viewRef.value, 'setListDataWithParams', [toRaw(props.items), false, false, {}]);
                })
            })


            function crateH(batch: [], hashTag: string) {
                // console.log('++createHolder', batch.length,'hashTag', hashTag)
                // let {batch ,hashTag} = evt
                const list = [...(Array.isArray(batch) ? batch : [batch])];
                let start = holders.length
                for (let i = 0; i < list.length; i++) {
                    // console.log('++createHolder list[i]:',list[i])
                    const {itemType, position, hdIndex} = list[i]
                    holders.push({
                        itemType: itemType,
                        sid: `hd-${uid}-${position}`,
                        position: position,
                        hdIndex: start + i,
                    })
                    console.log('createHolder:' + JSON.stringify(holders[holders.length - 1]))
                    // holders[holders.length - 1].sid = `hd-${hashTag}-${holders.length - 1}`
                }
                //children.push(h(type, params))
            }

            function bindH(batch: []) {
                // console.log('++bindHolder', batch)
                // let {batch } = params
                const list = [...(Array.isArray(batch) ? batch : [batch])];
                for (let i = 0; i < list.length; i++) {
                    const {position, sid, hdIndex} = list[i]
                    // let hIndex = extractNum(sid)
                    if (hdIndex != -1 && holders[hdIndex]) {
                        // console.log('--bindHolder', `position:${position}, childIndex:${hIndex} holder:${holders[hIndex]}-sid:${sid}`)
                        holders[hdIndex].position = position
                    }
                }
            }

            function handleBatch(params: any) {
                let {createItem, bindItem, recycleItem, hashTag} = params
                // Native.callUIFunction(viewRef.value, 'notifyBatchStart', [hashTag]);
                // if(recycleItem){
                //   recycleH(recycleItem)
                // }
                if (createItem) {
                    crateH(createItem, hashTag)
                }
                if (bindItem) {
                    bindH(bindItem)
                }
                // nextTick(() => {
                //   Native.callUIFunction(viewRef.value, 'notifyBatchEnd', []);
                // })
            }

            function recycleH(batch: []) {
                console.log('++recycleH', batch)
                // let {batch} = params
                const list = [...(Array.isArray(batch) ? batch : [batch])];
                for (let i = 0; i < list.length; i++) {
                    const {sid, hdIndex} = list[i]
                    if (hdIndex != -1 && holders[hdIndex]) {
                        // console.log('--recycleHolder', `childIndex:${hIndex} holder:${holders[hIndex]}-sid:${sid}`)
                        holders[hdIndex].position = -1
                    }
                }
            }

            const traverseDomTree = (element) => {
                if (!element) {
                    console.warn("Element is null or undefined");
                    return;
                }
                // 遍历元素节点的子元素
                element.children?.forEach((child) => {
                    traverseDomTree(child);
                });
            };

            onMounted(() => {
                // console.log(`mounted called viewRef.value.element ${viewRef.value.element} , value :${viewRef.value}`)
                const root = viewRef.value
                // traverseDomTree(root)
            })

            const renderItems = (hd) => {
                return [
                    renderSlot(context.slots, 'item', {
                        // key:hd.sid,
                        // sid:hd.sid,
                        item: (props.items && hd.position > -1) ? props.items[hd.position] : {},
                    })
                ]
            }

            const renderSlotContent = (slotName, fallbackContent) => {
                return slots[slotName]?.() || fallbackContent;
            };

            const renderHolders = (holders) => {
                // console.log('holders called ', `holderCount:${holders.length}`)
                let children = holders.map((hd: any, index: number) => {
                    // console.log('holders called ', `index:${index} position:${hd.position},holderCount:${holders.length},sid:${hd.sid}`)
                    // console.log('holders called ', `index:${index} item:${JSON.stringify(listData[hd.position])}`)
                    return h("FastItemView", {
                            key: hd.hdIndex,
                            sid: hd.sid,
                            type: hd.itemType,
                            focusable: false,
                            // position:hd.position,
                            hdPosition: hd.position,
                            hdIndex: hd.hdIndex,
                            poolItem: true,
                            // item:props.items? props.items[hd.position] : {}
                        },
                        renderItems(hd)
                        // renderSlotContent('item',[])
                    )
                    // return  renderItems(hd)
                })
                nextTick(() => {
                    nextTick(() => {
                        Native.callUIFunction(viewRef.value, 'notifyBatchEnd', []);
                    })
                })
                return children
            }
            return () => {
                const items = context.slots.item ? h('RecyclePool',
                    {
                        slot: 'item',
                        pagingPageSize: pageSize,
                        expectedTotalCount: expectedTotalCount,
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
                            console.log('----QTUL---onBatch------->>>>>', evt)
                            handleBatch(evt)
                        },
                    },
                    renderHolders(holders)
                    )
                    : []

                return h(
                    'FastListView',
                    {
                        ref: viewRef,
                        disableVirtualDOM: true,
                        onItemClick: (evt) => {
                            console.log('----QTUL---onItemClick------->>>>>', evt)
                            context.emit('item-click', evt);
                        },
                        onScroll: (evt) => {
                            console.log('----QTUL---onScroll------->>>>>', evt)
                            context.emit('scroll', evt);
                        },
                        onItemFocused: (evt) => {
                            console.log('----QTUL---onItemFocused------->>>>>', evt)
                            context.emit('item-focused', evt);
                        },
                        onAttachedToWindow: (evt) => {
                            console.log('----QTUL---onAttachedToWindow------->>>>>', evt)
                            context.emit('item-attached', evt);
                        },
                        onDetachedFromWindow: (evt) => {
                            console.log('----QTUL---onDetachedFromWindow------->>>>>', evt)
                            context.emit('item-detached', evt);
                        },
                        onBindItem: (evt) => {
                            console.log('----QTUL---onBindItem------->>>>>', evt)
                            context.emit('item-bind', evt);
                        },
                        onUnbindItem: (evt) => {
                            console.log('----QTUL---onUnbindItem------->>>>>', evt)
                            context.emit('item-unbind', evt);
                        },
                        onLoadMore: (evt) => {
                            console.log('----QTUL---onLoadMore------->>>>>', evt)
                            context.emit('load-more', evt);
                        },
                        onScrollStateChanged: (evt) => {
                            console.log('----QTUL---onScrollStateChanged------->>>>>', evt)
                            context.emit('scroll-state-changed', evt);
                        },
                        onFocusSearchFailed: (evt) => {
                            console.log('----QTUL---onFocusSearchFailed------->>>>>', evt)
                            context.emit('focus-search-failed', evt);
                        },
                        onScrollYGreaterReference: (evt) => {
                            console.log('----QTUL---onScrollYGreaterReference------->>>>>', evt)
                            context.emit('scrollYGreaterReference', evt);
                        },
                        onScrollYLesserReference: (evt) => {
                            console.log('----QTUL---onScrollYLesserReference------->>>>>', evt)
                            context.emit('scrollYLesserReference', evt);
                        },
                    },
                    [context.slots.default && context.slots.default(), items,]
                )
            }
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    })
    app.component('qt-ul', ULImpl)
}

export default registerQTUL;
