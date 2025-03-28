<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-ul-root-page">
      <qt-ul
        class="qt-ul-root"
        :stableItemSize="100"
        ref="ulRef"
        name="qt_selections"
        :pageNo="pageNo"
        :pageSize="10"
        :clipChildren="false"
        :chipPadding="false"
        padding="80,0,60,0"
        :horizontal="true"
        :loadPage="loadPage"
        :enablePlaceholder="false"
      >
        <template #item="{ item, index }">
          <div class="qt-ul-item-div" name="qtUlItem" v-if="item.type === 3" :focusable="true">
            <qt-text
              class="qt-ul-item-text-demo"
              duplicateParentState
              :textSize="40"
              gravity="center"
              :text="item.text ?? ''"
            />
          </div>
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { buildFixedTextItemList } from './__mocks__/list'
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import { QTIUL, QTListViewItem } from '@quicktvui/quicktvui3'
import { Native } from '@extscreen/es3-vue'

export default defineComponent({
  name: '分页',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
  },
  setup(props, context) {
    const img = ref<string>(
      'https://img1.baidu.com/it/u=1726075624,1307327070&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667'
    )
    const itemList = ref<Array<QTListViewItem>>([])
    const mockCount = 10000
    const list = ref([])
    const count = ref(10000)
    const ulRef = ref<QTIUL>()
    let index = 1
    let pageNo = ref(3)
    const buildData = (pIndex): any => {
      let arr: Array<any> = []
      for (let i = pIndex * 10 - 10; i < pIndex * 10; i++) {
        arr.push({
          id: 'id' + i,
          name: 'name' + Math.random(),
          type: 3,
          backgroundColor: 'red',
          img: img,
          tag: i % 2 == 0 ? '' : 'VIP',
          text: `${i}`,
        })
      }
      return arr
    }
    function onESCreate() {
      //list.value = buildData(pageNo.value)
      console.log('------buildViewItemList-------->>>', list)
      ulRef.value?.setPendingListCount(1000)
      // Native.callUIFunction(ulRef, 'setListDataWithParams', [
      //   [],
      //   false,
      //   false,
      //   {pendingCount:count},
      // ])
    }
    const loadPage = (page) => {
      setTimeout(() => {
        list.value = buildData(page)
      }, 500)
    }
    return {
      ulRef,
      count,
      pageNo,
      list,
      onESCreate,
      loadPage,
    }
  },
})
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

.qt-ul-root {
  width: 1920px;
  height: 140px;
  background-color: #a04660;
}

.qt-ul-item-div {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 16px;
  background-color: rgba(66, 99, 66, 0.8);
  focus-background-color: yellowgreen;
}
</style>
