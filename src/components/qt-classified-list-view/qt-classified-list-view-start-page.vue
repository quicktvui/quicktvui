<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="classified_list_view_box">
      <qt-classified-list-view
        class="classified_list_view"
        ref="classifiedListViewRef"
        :currentFocusIndex='5'
        @item-focused='onItemFocused'
        @item-click='onItemClick'
        :navType="10006"
      >
        <template v-slot:item>
          <qt-view :type="10006" name="custom_item" class="custom_item" :focusable="false" :clipChildren="false"
                   style="width: 100px;height: 178px;background-color: transparent;">
            <qt-image src="${bg}" alt="" :focusable="false"
                      style="width: 100px;height: 178px;background-color: transparent;"/>
          </qt-view>
        </template>
      </qt-classified-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIListView, QTIClassifiedListView, QTClassifiedListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const classifiedListViewRef = ref<QTIClassifiedListView>()
    const cmdListViewRef = ref<QTIListView>()
    const onESCreate = (params: any) => {
      let arr: Array<QTClassifiedListViewItem> = []
      for (let i = 0; i < 81; i++) {
        let assetTitle: string = ''
        let categoryname: string = ''
        if (i < 2) {
          categoryname = '天气';
          assetTitle = 'title:天气'
        } else if (i < 6) {
          categoryname = '助眠';
          assetTitle = 'title:助眠'
        } else if (i < 10) {
          categoryname = '浪漫';
          assetTitle = 'title:浪漫'
        } else if (i < 14) {
          categoryname = '纯音乐';
          assetTitle = 'title:纯音乐'
        } else if (i < 21) {
          categoryname = '庆祝';
          assetTitle = 'title:庆祝'
        } else if (i < 31) {
          categoryname = '庆祝2';
          assetTitle = 'title:庆祝'
        } else if (i < 41) {
          categoryname = '庆祝3';
          assetTitle = 'title:庆祝'
        } else if (i < 51) {
          categoryname = '庆祝4';
          assetTitle = 'title:庆祝'
        } else if (i < 61) {
          categoryname = '庆祝5';
          assetTitle = 'title:庆祝'
        } else if (i < 71) {
          categoryname = '庆祝6';
          assetTitle = 'title:庆祝'
        } else if (i < 81) {
          categoryname = '庆祝7';
          assetTitle = 'title:庆祝'
        } else if (i < 91) {
          categoryname = '庆祝8';
          assetTitle = 'title:庆祝'
        }
        
        if (i == 0 || i == 2 || i == 6 || i == 10 || i == 14 || i == 21 || i == 31 || i == 41 || i == 51 || i == 61 || i == 71 || i == 81) {
          let preSortObj: QTClassifiedListViewItem = {
            categoryname: categoryname,
            bg: require('../../assets/celebrate.png').default,
            type: 10006,
            isNeedFocus: false,
            decoration: {top: 20, left: 40, bottom: 10}
          }
          arr.push(preSortObj)
        }
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const item: QTClassifiedListViewItem = {
          type: 10001,
          decoration: {
            top: 20,
            left: 40,
            bottom: 10,
          },
          isNeedFocus: true,
          coverV: imgSrc,
          assetTitle: assetTitle,
          categoryname: categoryname
        }
        arr.push(item)
      }
      arr[0].decoration!.left = 90
      console.log(arr, '5555555555555555555555')
      classifiedListViewRef.value?.init(arr)
    }
    const onItemFocused = (e) => {
      console.log(e)
    }
    const onItemClick = (e) => {
      console.log(e)
    }
    return {
      classifiedListViewRef,
      cmdListViewRef,
      onESCreate,
      onItemFocused,
      onItemClick,
    }
  },
});

</script>

<style>
.classified_list_view_box {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 300px;
}

.classified_list_view {
  width: 1920px;
  height: 300px;
  background-color: transparent;
}

.custom_item {
  width: 100px;
  height: 178px;
  background-color: transparent;
}

.custom_item img {
  width: 100px;
  height: 178px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
