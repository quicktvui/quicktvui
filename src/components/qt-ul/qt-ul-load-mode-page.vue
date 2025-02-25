<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :clipChildren="false"
          :stableItemSize="300"
          :enablePlaceholder="false">
        <template #item="{item}">
          <div class="qt-ul-item" v-if="item.type == 3" :focusable="true" 
            :enableFocusBorder="true">
            <img :src="item ? item.img : ''" class="tv_item_img" />
            <p class="tv_item_title">{{item ?item.text :''}}</p>
          </div>
          <!-- <qt-view v-if="item.type == 1002" class="loading">
            <qt-loading-view color="#409eff" style="height: 150px; width: 150px;background-color: transparent;" />
          </qt-view> -->
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
    const img = ref<string>('https://img1.baidu.com/it/u=1726075624,1307327070&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667');
    const itemList = ref<Array<QTListViewItem>>([])
    const ulRef = ref<QTIUL>()
    const buildData = (): any => {
      let arr:Array<any> = []
      for (let i = 0; i < 20; i++) {
        arr.push({
          id: 'id'+i, name: 'name'+Math.random(),
          type: 3,
          backgroundColor: 'red',
          img: img,
          tag: i % 2 == 0 ? '' : 'VIP',
          text: `pos:${i}`,
          decoration : {
            top:20,
            right:20
          }
        })
      }
      return arr
    }
    function onESCreate() {
      itemList.value = buildData()
    }
    const loadMore = () => {
      // itemList.value = itemList.value.concat(buildData())
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
  background-color: transparent;
}

.text-button-class {
  margin: 20px;
}


.qt-ul-item {
  position: relative;
  width: 800px;
  height: 250px;
  border-radius: 20px;
  background-color: pink;
  focus-background-color: blue;
}
.tv_item_img {
  width: 300px;
  height: 200px;
  background-color: red;
}
.tv_item_title{
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  color: #000000;
  background-color: transparent;
}
.tv_item_tag{
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: gold;
  color: #000000;
  font-size: 22px;
  background-color: transparent;
}
.loading{
  width: 1920px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: pink;
}

</style>
