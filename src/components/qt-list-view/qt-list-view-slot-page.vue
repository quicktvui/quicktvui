<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-list-view">
      <qt-list-view class="list-view" ref="listViewRef">

        <template v-slot:1="{item}">
          <div class="qt-list-view-button-root-css"
               ref="textButtonRef"
               :type="1"
               :clipChildren="false"
               :focusable="true"
               :enableFocusBorder="true"
               :focusScale="1.1">
            <qt-text :text="item.title.text" gravity="center" style="width: 150px; height: 60px;"/>
          </div>
        </template>

        <template v-slot:2="{item}">
          <div class="qt-list-view-button-root-css"
               ref="textButtonRef"
               :type="2"
               :clipChildren="false"
               :focusable="true"
               :enableFocusBorder="true"
               :focusScale="1.1">
            <qt-text :text="item.text" gravity="center" style="width: 150px; height: 60px;"/>
          </div>
        </template>

      </qt-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {QTIListView, QTListViewItem} from "@quicktvui/quicktvui3";
import {ref} from "vue";

export default defineComponent({
  name: '插槽',
  emits: [],
  setup() {
    const listViewRef = ref<QTIListView>()
    let listData: Array<QTListViewItem> = [];

    const onESCreate = () => {
      let arr: Array<QTListViewItem> = []
      for (let i = 0; i < 4; i++) {
        const item: QTListViewItem = {
          type: 1,
          text: '测试：' + i,
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: '主标题' + i,
          },
        }
        arr.push(item)
      }

      for (let i = 0; i < 4; i++) {
        const item: QTListViewItem = {
          type: 2,
          text: '测试：' + i,
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: '主标题' + i,
          },
        }
        arr.push(item)
      }

      listData = listViewRef.value!.init(arr)
    }
    return {
      listViewRef,
      onESCreate,
    }
  },
});

</script>

<style scoped>
.quick-list-view {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 20px;
  flex-direction: column;
}

.quick-list-view .list-view {
  width: 1800px;
  height: 800px;
  margin-left: 60px;
  background-color: transparent;
}

.qt-list-view-button-root-css {
  width: 250px;
  height: 80px;
  margin: 20px;
  border-style: solid;
  border-color: #40b883;
  border-width: 2px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  focus-background-color: #40b883;
}

.qt-list-view-text-root-css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}


</style>
