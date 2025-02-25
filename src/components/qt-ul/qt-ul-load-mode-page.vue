<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :loadMore="loadMore"
          :enablePlaceholder="false">
        <template #item="{item}">
          <qt-ul-item-text
              :text="item.text"
              gravity="left|centerVertical"
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 3"
              :focusable="true"
              :enableFocusBorder="true"/>
          <qt-view v-if="item.type == 1002" class="loading">
            <qt-loading-view color="#409eff" style="height: 150px; width: 150px;background-color: transparent;" />
          </qt-view>
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {buildFixedTextItemList} from "./__mocks__/list";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import {QTIUL, QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '分页',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text
  },
  setup(props, context) {
    // :loadPage="loadpage"
    //       :listenBoundEvent="false"
    //       :pagesize=50
    //       :expectItemCount="1000"
    const itemList = ref<Array<QTListViewItem>>([])
    const ulRef = ref<QTIUL>()

    function onESCreate() {
      const list = buildFixedTextItemList(5)
      // list.push({
      //   type: 1002,
      //   itemSize: 300,
      // })
      itemList.value = list
    }
    const loadMore = () => {
      const list = buildFixedTextItemList(5)
      console.log('------buildTextItemList-------->>>', list)
      itemList.value = itemList.value.concat(list)
      // if(itemList.value[itemList.value.length - 1].type == 1002){
      //   itemList.value.pop()
      //   itemList.value = itemList.value.concat(list)
      // }
      
    }
    
    

    return {
      ulRef,
      itemList,
      onESCreate,
      loadMore,
    }
  }
});

</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 1080px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.qt-ul-scroll-class {
  width: 400px;
  height: 1080px;
  margin-right: 40px;
}

.qt-ul-class {
  width: 800px;
  height: 1080px;
}

.text-button-class {
  margin: 20px;
}

.loading{
  width: 1920px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: pink;
}

</style>
