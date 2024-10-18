import {onMounted, onBeforeUnmount, toRaw} from "vue";
import {qtWatchAll, qtDiff, parseChildUpdate} from "../qtListen/index";
import type {IQtTabDatas} from "../qtListen/index";
import type {IQtWatchOptions} from '../qtListen//watch'
// import {QTTabPageState} from "./QTTabPageState";

// {
//   initPage, initTab,
//   setPageData, addPageData, updatePageData, insertPageData,
//   updatePageSection, deletePageSection,
//   addPageItemList, updatePageItem, deletePageItem
// }
const cloneObj = (obj: object) => {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch (error) {
  }
  return obj
}
export const useQtTabWatch = (props: any, instance: any) => {
  let initTabData: IQtTabDatas[] = []

  /**
   * 设置或添加指定页面的板块
   */
  const addSection = (pageIndex: number, sections: any[]) => {
    const tabPageData = initTabData[pageIndex]
    if (tabPageData) {
      const pageSections = instance.getPageSectionList(pageIndex)
      if (pageSections && pageSections.length) {
        instance.addPageData(pageIndex, {
          useDiff: tabPageData.useDiff,
          disableScrollOnFirstScreen: tabPageData.disableScrollOnFirstScreen ?? false,
          firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
          data: cloneObj(sections)
        }, 0)
      } else {
        instance.setPageData(pageIndex, {
          useDiff: false,
          disableScrollOnFirstScreen: tabPageData.disableScrollOnFirstScreen ?? false,
          firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
          bindingPlayer: tabPageData.bindingPlayer,
          data: cloneObj(sections)
        })
      }
    }
  }

  const watchOptions: IQtWatchOptions = {
    resetValue(newData) {
    },
    init(datas) {
      instance.initTab({
        ...props.tabConfig,
        itemList: cloneObj(datas)
      })
      initTabData = datas
    },
    add(datas) {
      console.log('lsj-add-', datas)
    },
    update(position, dataMaps, oldt) {
      // console.log(position, dataMaps, '-lsj--position, dataMaps')
      parseChildUpdate(dataMaps, oldt, (updateRes) => {
        // console.log(updateRes.arrDeeps, 'lsj-updateRes-arrDeeps')
        const pageIndex = updateRes.arrDeeps[0]
        const sectionIndex = updateRes.arrDeeps[1]
        const itemIndex = updateRes.arrDeeps[2]
        if (updateRes.isArr) {
          qtDiff(updateRes.oldData, updateRes.newData, {
            update(difPosition, difDataMaps, difOldt) {
              // console.log('lsj-update2-', difPosition, difDataMaps, difOldt)
              if (updateRes.arrDeeps.length == 1) {
                difDataMaps.datas.forEach((ddv, ddk) => {
                  instance.updatePageSection(pageIndex, ddk, cloneObj(ddv))
                })
              }
              if (updateRes.arrDeeps.length == 2) {
                difDataMaps.datas.forEach((ddv, ddk) => {
                  instance.updatePageItem(pageIndex, sectionIndex, ddk, cloneObj(ddv))
                })
              }
            },
            delete(difPosition, difCount) {
              // console.log('lsj-delete2-', difPosition, difCount)

              if (updateRes.arrDeeps.length == 1) {
                instance.deletePageSection(pageIndex, difPosition, difCount)
              }
              if (updateRes.arrDeeps.length == 2) {
                instance.deletePageItem(pageIndex, sectionIndex, difPosition, difCount)
              }
            },
            insert(difPosition, difDatas) {
              console.log('lsj-insert2-', difPosition, difDatas)

              if (updateRes.arrDeeps.length == 1) {
                instance.insertPageData(pageIndex, difPosition, cloneObj(difDatas))
              }
              if (updateRes.arrDeeps.length == 2) {
                instance.addPageItemList(pageIndex, sectionIndex, cloneObj(difDatas), difPosition)
                // instance.insertPageItemList(pageIndex, sectionIndex, difPosition, difDatas)
              }
            },
            add(difDatas) {
              // console.log('lsj-add2-', difDatas)

              if (updateRes.arrDeeps.length == 1) {
                addSection(pageIndex, difDatas)
              }
              if (updateRes.arrDeeps.length == 2) {
                instance.addPageItemList(pageIndex, sectionIndex, cloneObj(difDatas))
              }
            }
          })
        } else {
          // console.log('lsj-update-obj', updateRes.newData)

          if (updateRes.arrDeeps.length == 2) {
            instance.updatePageSection(pageIndex, sectionIndex, cloneObj(updateRes.newData))
          }
          if (updateRes.arrDeeps.length == 3) {
            instance.updatePageItem(pageIndex, sectionIndex, itemIndex, cloneObj(updateRes.newData))
          }
        }
      })
    },
    insert(position, datas) {
      // console.log('lsj-insert-', position, datas)
    },
    delete(position, count) {
      // console.log('lsj-delete-', position, count)
    },
    clear() {
      // console.log('lsj-clear')
    }
  }
  const watchRes = qtWatchAll(props.content, watchOptions)
  onMounted(()=>{
    if(props.waterfallConfig){
      instance.initPage(props.waterfallConfig)
    }
    if(props.content&&props.content.length){
      initTabData = cloneObj(toRaw(props.content))
      watchOptions.init(initTabData)
    }
  })
  onBeforeUnmount(() => {
    watchRes?.stop()
  })

  return {
    checkIsStaticDatas(pageIndex: number, pageNo: number) {
      if (pageNo === 0 && initTabData && initTabData.length) {
        const pageData = initTabData[pageIndex]
        if (pageData && pageData.sections && pageData.sections.length) {
          instance.setPageData(pageIndex, {
            useDiff: false,// pageNo==0是不可useDiff必须是false，因为没有旧数据可进行diff对比
            data: pageData.sections
          })
          return true
        }
      }
      return false
    }
  }
}
