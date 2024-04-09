<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-list-view-colum">
      <qt-list-view class="list_view" ref="listViewRef" :clipChildren="false" :clipPadding="false"
                    @item-click="onItemClick"
                    @item-bind="onItemBind" :padding="'0,0,30,0'" :defaultFocus="defaultFocus"
                    :blockFocusDirections="['left','right']">
        <!-- item -->
        <qt-poster/>
      </qt-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref, reactive} from "vue";
import {QTIListView, QTListViewItem, QTPoster} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'listview-纵向',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()
    const data = reactive({
      defaultFocus: 0 as number,
      preloadNo: 0 as number,
      openPage: true
    })
    let listDataRec: Array<QTListViewItem> = [];
    const onESCreate = (params) => {
      let arr: Array<QTListViewItem> = []
      for (let i = 0; i < 6; i++) {
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
          titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        arr.push(poster)
      }
      listDataRec = listViewRef.value!.init(arr)
    }
    const onItemClick = () => {
    }
    const onItemBind = () => {
    }
    return {
      listViewRef,
      listDataRec,
      ...data,
      onESCreate,
      onItemBind,
      onItemClick,
    }
  },
});

</script>

<style scoped>
.qt-list-view-colum {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 20px;
}

.qt-list-view-colum .list_view {
  width: 360px;
  height: 850px;
  margin-left: 810px;
}
</style>
