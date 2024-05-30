<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-grid-view">
      <qt-grid-view class="grid_view" ref="gridViewRef" :clipChildren="false" :clipPadding="false"
                    @item-click="onItemClick"
                    @item-bind="onItemBind" :spanCount="6" :areaWidth="1800" :itemHeight="320" :padding="'0,0,10,16'"
                    :defaultFocus="defaultFocus" :blockFocusDirections="['left','right']">
        <!-- item -->
        <qt-poster/>
      </qt-grid-view>
      <qt-list-view style="width: 1920px;height: 76px;background-color: transparent;" ref="cmdListViewRef" horizontal
                    @item-click="onCMDCLick">
        <qt-button :enable-flex-style="true" text="text" type="1" size="mini" autoWidth
                   style="padding-left: 20px;padding-right: 20px;background-color: green;"></qt-button>
      </qt-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref, reactive} from "vue";
import {QTIListView, QTIGridView, QTGridViewItem, QTPoster} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const gridViewRef = ref<QTIGridView>()
    const cmdListViewRef = ref<QTIListView>()
    const data = reactive({
      defaultFocus: 0 as number,
    })
    let listDataRec: Array<QTGridViewItem> = [];
    // let listDataRec: any = [];
    const onESCreate = (params) => {
      let arr: Array<QTGridViewItem> = []
      for (let i = 0; i < 24; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1,
            border: false
          },
          decoration: {
            top: 20,
            left: 25,
            bottom: 80
          },
          title: {
            text: '主标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: '副标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          floatTitle: {
            text: '浮动标题',
            enable: true,
            style: {
              width: 260,
            },
            background: {colors: ['#e5000000', '#00000000'], orientation: 4}
          },
          shimmer: {
            enable: true,
          },
          ripple: {
            enable: true,
            style: {
              right: 0,
              bottom: 0,
              marginRight: -12,
            }
          },
          image: {
            src: imgSrc,
            enable: true,
            style: {
              width: 260,
              height: 320
            }
          },
          corner: {
            text: '角标' + i,
            enable: true,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#A06419', '#CDA048'],
              cornerRadii4: [0, 8, 0, 8],
              orientation: 2
            }
          },
          style: {
            width: 260,
            height: 320,
          },
          titleStyle: {
            width: 260,
            height: 120,
            marginTop: 320 - 60,
          },
          placeholderImg:{
            enable: true,
            src: 'http://cdnott.holyblade.com/sxyd/GameHallResource_JSY_SXYD/UpLoadImg/07sy_spc_dt.gif',
          },
          titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        arr.push(poster)
      }
      listDataRec = gridViewRef.value!.init(arr)
      initBtnList()
    }
    const initBtnList = () => {
      let cmdData: Array<QTGridViewItem> = [
        {text: '更新Item', type: 1},
        {text: 'push(单)', type: 1},
        {text: 'push(多)', type: 1},
        {text: 'splice(1个参数)', type: 1},
        {text: 'splice(2个参数)', type: 1},
        {text: 'splice(3+参数-替换)', type: 1},
        {text: 'splice(3+参数-插入)', type: 1},
        {text: 'concat', type: 1},
        {text: 'pop', type: 1},
        //{text:'deleteItem',type: 1},
        // {text:'updateItemProps'},
        // {text:'scrollToTop',type: 1},
        // {text:'scrollToPosition',type: 1},
        // {text:'scrollToIndex',type: 1},
        // {text:'setItemFocused',type: 1},
        // {text:'scrollToFocused',type: 1},
        // {text:'setItemSelected',type: 1},
        // {text:'scrollToSelected',type: 1},
      ]
      cmdData.forEach((el) => {
        el.decoration = {right: 40, top: 6, bottom: 6}
      })
      cmdListViewRef.value?.init(cmdData)
    }
    const onCMDCLick = (e: any) => {
      let {position, item} = e
      switch (item.text) {
        case '更新Item' : //更新Item
          listDataRec![0].title.text = '修改标题'
          break;
        case 'push(单)' :
          push('单')
          break;
        case 'push(多)' :
          push('多')
          break;
        case 'splice(1个参数)' :
          splice('1个参数')
          break;
        case 'splice(2个参数)' :
          splice('2个参数')
          break;
        case 'splice(3+参数-替换)' :
          splice('3+参数-替换')
          break;
        case 'splice(3+参数-插入)' :
          splice('3+参数-插入')
          break;
        case 'concat' :  //数组拼接
          concat()
          break;
        case 'pop' :  //删除末尾数据
          listDataRec.pop()
          break;
        // case 'deleteItem' : // 根据id删除item
        //   listDataRec.deleteItem(3,1) //根据id删除 第一个参数是id 第二个参数为删除该id之后几个元素（包含当前id）
        //   break;
        // case 'updateItemProps' :
        //   listDataRec.updateItemProps(22, 'type2', {assetTitle: 'ceshi'})
        //   break;
        //       case 'scrollToTop' :
        //         this.$refs.list_view.scrollToTop()
        //         break;
        //       case 'scrollToPosition' :
        //         this.$refs.list_view.scrollToPosition(1)
        //         break;
        //       case 'scrollToIndex' :
        //         this.$refs.list_view.scrollToIndex(2, true, 20)
        //         break;
        //       case 'setItemFocused' :
        //         this.$refs.list_view.setItemFocused(22)
        //         break;
        //       case 'scrollToFocused' :
        //         this.$refs.list_view.scrollToFocused(2)
        //         break;
        //       case 'setItemSelected' :
        //         this.$refs.list_view.setItemSelected(3,true)
        //         break;
        //       case 'scrollToSelected' :
        //         this.$refs.list_view.scrollToSelected(2,true)
        //         break;
      }
    }
    const push = (type: string) => {
      let arr: Array<QTGridViewItem> = []
      for (let i = 0; i < 2; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: 'push主标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: 'push副标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          floatTitle: {
            text: 'push浮动标题',
            enable: true,
            style: {
              width: 260,
            },
            background: {colors: ['#e5000000', '#00000000'], orientation: 4}
          },
          shimmer: {
            enable: true,
          },
          ripple: {
            enable: true,
            style: {
              right: 0,
              bottom: 0,
              marginRight: -12,
            }
          },
          image: {
            src: imgSrc,
            enable: true,
            style: {
              width: 260,
              height: 320
            }
          },
          corner: {
            text: '角标' + i,
            enable: true,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#A06419', '#CDA048'],
              cornerRadii4: [0, 8, 0, 8],
              orientation: 2
            }
          },
          style: {
            width: 260,
            height: 320,
          },
          titleStyle: {
            width: 260,
            height: 120,
            marginTop: 320 - 60,
          },
          titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        arr.push(poster)
      }
      if (type == '单') {
        listDataRec!.push(arr[0]) //push 单条数据
      } else {
        listDataRec!.push(...arr) //push 多条数据
      }
    }
    const splice = (type: string) => {
      let arr: Array<QTGridViewItem> = []
      for (let i = 0; i < 2; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: type,
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: '副标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          floatTitle: {
            text: '浮动标题',
            enable: true,
            style: {
              width: 260,
            },
            background: {colors: ['#e5000000', '#00000000'], orientation: 4}
          },
          shimmer: {
            enable: true,
          },
          ripple: {
            enable: true,
            style: {
              right: 0,
              bottom: 0,
              marginRight: -12,
            }
          },
          image: {
            src: imgSrc,
            enable: true,
            style: {
              width: 260,
              height: 320
            }
          },
          corner: {
            text: '角标' + i,
            enable: true,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#A06419', '#CDA048'],
              cornerRadii4: [0, 8, 0, 8],
              orientation: 2
            }
          },
          style: {
            width: 260,
            height: 320,
          },
          titleStyle: {
            width: 260,
            height: 120,
            marginTop: 320 - 60,
          },
          titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        arr.push(poster)
      }
      if (type == '1个参数') {
        listDataRec.splice(0)  //删除当前索引及之后所有元素
      } else if (type == '2个参数') {
        listDataRec.splice(2, 1)  //（从第2个开始 删除1条数据）
      } else if (type == '3+参数-替换') {
        listDataRec.splice(4, 2, ...arr) //从索引位置 4 开始，替换两个元素，替换的data （当第二个参数不为0时 为替换）
      } else if (type == '3+参数-插入') {
        listDataRec.splice(4, 0, ...arr) //从索引位置 4 开始，替换0，插入的data （当第二个参数为0时 为插入）
      }
    }
    const concat = () => {
      let arr: Array<QTGridViewItem> = []
      for (let i = 0; i < 2; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: 'concat主标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: 'concat副标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          floatTitle: {
            text: 'concat浮动标题',
            enable: true,
            style: {
              width: 260,
            },
            background: {colors: ['#e5000000', '#00000000'], orientation: 4}
          },
          shimmer: {
            enable: true,
          },
          ripple: {
            enable: true,
            style: {
              right: 0,
              bottom: 0,
              marginRight: -12,
            }
          },
          image: {
            src: imgSrc,
            enable: true,
            style: {
              width: 260,
              height: 320
            }
          },
          corner: {
            text: '角标' + i,
            enable: true,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#A06419', '#CDA048'],
              cornerRadii4: [0, 8, 0, 8],
              orientation: 2
            }
          },
          style: {
            width: 260,
            height: 320,
          },
          titleStyle: {
            width: 260,
            height: 120,
            marginTop: 320 - 60,
          },
          titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        arr.push(poster)
      }
      listDataRec = listDataRec!.concat(arr)
    }
    const onItemClick = (e) => {
    }
    const onItemBind = () => {
    }
    return {
      gridViewRef,
      cmdListViewRef,
      listDataRec,
      ...data,
      initBtnList,
      onESCreate,
      onCMDCLick,
      push,
      splice,
      concat,
      onItemBind,
      onItemClick,
    }
  },
});

</script>

<style scoped>
.qt-grid-view {
  width: 1920px;
  height: 1000px;
  padding-top: 20px;
  flex-direction: column;
  background-color: transparent;
}

.qt-grid-view .grid_view {
  width: 1800px;
  height: 850px;
  margin-left: 60px;
}
</style>
