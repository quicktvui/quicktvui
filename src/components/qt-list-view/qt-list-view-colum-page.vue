<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-list-view_colum-page">
      <qt-list-view class="list_view" ref="listViewRef" :clipChildren="false" :clipPadding="false"
                    @item-click="onItemClick"
                    @item-bind="onItemBind" :padding="'0,0,30,0'" :defaultFocus="defaultFocus"
                    :blockFocusDirections="['left','right']"
                    :listenBoundEvent="true" :loadMore="loadMore" :openPage='openPage' :preloadNo="preloadNo">
        <!-- item -->
        <qt-poster/>
        <!-- 分页type样式 -->
        <qt-view class="loading" type="1002" name="loading" ref="loading" :focusable="false">
          <qt-loading-view color="#409eff" style="height: 30px;width: 30px;"/>
        </qt-view>
      </qt-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent, nextTick} from "@vue/runtime-core";
import {ref, reactive} from "vue";
import {QTIListView, QTListViewItem, QTPoster} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'listview-纵向分页',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()
    const data = reactive({
      defaultFocus: 0 as number,
      preloadNo: 0 as number,
      openPage: true
    })
    let listDataRec: Array<QTListViewItem> = [];
    const onESCreate = (params) => {
    }
    const loadMore = (pageNo: number) => {
      let arr: Array<QTListViewItem> = []
      for (let i = pageNo * 2 - 2; i < pageNo * 2; i++) {
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
      if (listDataRec.length > 0) {
        if (pageNo > 4) { //如果分页请求完毕 调用 stopPage 方法
          listViewRef.value?.stopPage()
        } else {
          listDataRec.push(...arr)
        }
      } else {
        nextTick(() => {
          listDataRec = listViewRef.value!.init(arr)
        })
      }
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
      loadMore,
      onItemBind,
      onItemClick,
    }
  },
});

</script>

<style scoped>
.qt-list-view_colum-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 20px;
}

.qt-list-view_colum-page .list_view {
  width: 360px;
  height: 850px;
  margin-left: 810px;
}

.qt-list-view_colum-page .loading {
  width: 360px;
  height: 60px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
}
</style>
