<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <tv-list ref="listViewRef" class="qt_tv_list_view_root_css" horizontal="true"
               :clipChildren="false" :clipPadding="false"
               @item-click="onItemClick" @item-bind="onItemBind">
        <qt-poster :borderRadius="20" :rippleColor="'#157AFC'"/>
      </tv-list>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIListView, QTListViewItem, QTPoster} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()

    const onESCreate = (params) => {
      console.log('------------onESCreate------>>>>')
      let data: Array<QTListViewItem> = []
      let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
      for (let i = 0; i < 2; i++) {
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
            text: '主标题',
            enable: true,
            style: {
              width: 260,
            }
          },
          focusTitle: {
            text: '焦点主标题',
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: '副标题',
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
            src: imgURL,
            enable: true,
            style: {
              width: 260,
              height: 100
            }
          },
          corner: {
            text: '角标角标',
            enable: true,
            showCornerRight:true,
            showCornerLeft:false,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#FE3824', '#F0051E'],
              cornerRadii4: [0, 20, 0, 20],
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
        data.push(poster)
      }
      console.log('-------xxx-----onESCreate------>>>>', data)
      listViewRef.value?.setListData(data)
    }

    function onItemClick(el) {
    }

    function onItemBind(el) {
    }

    return {
      listViewRef,
      onESCreate,
      onItemClick,
      onItemBind,
    }
  },
});

</script>

<style>
.qt_tv_list_view_root_css {
  width: 1920px;
  height: 1080px;
}

</style>
