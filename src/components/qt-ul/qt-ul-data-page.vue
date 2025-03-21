<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" />
    <qt-row class="qt-ul-control-button-class">
      <qt-button
        size="medium"
        class="text-button-class"
        text="随机图片+文字"
        @click="setRandomImageTextData"
      />

      <qt-button
        size="medium"
        class="text-button-class"
        text="随机图片"
        @click="setRandomImageData"
      />

      <qt-button
        size="medium"
        class="text-button-class"
        text="随机文字"
        @click="setRandomTextData"
      />

      <qt-button
        size="medium"
        class="text-button-class"
        text="固定图片文字"
        @click="setFixedImageTextData"
      />

      <qt-button
        size="medium"
        class="text-button-class"
        text="固定图片"
        @click="setFixedImageData"
      />

      <qt-button
        size="medium"
        class="text-button-class"
        text="固定文字"
        @click="setFixedTextData"
      />
    </qt-row>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-ul-root-page">
      <qt-ul
        class="qt-ul-class"
        ref="ulRef"
        name="ul"
        :items="itemList"
        :spanCount="1920"
        :cachePool="{
          name: 'waterfall',
          size: {
            2: 40,
            3: 40,
          },
        }"
        :enablePlaceholder="false"
      >
        <template #item="{ item }">
          <qt-ul-item-text
            :text="item.text"
            v-if="item.type == 3"
            :focusable="true"
            :enableFocusBorder="true"
          />

          <qt-ul-item-image
            :src="item.url"
            :backgroundColor="item.backgroundColor"
            v-if="item.type == 2"
            :focusable="true"
            :enableFocusBorder="true"
          />
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import {
  buildFixedImageItem,
  buildFixedTextItem,
  buildRandomImageItem,
  buildRandomTextItem,
} from './__mocks__/list'
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import qt_ul_item_image from './item/image/qt-ul-item-image.vue'
import { getRandomInt } from './__mocks__/random'
import { QTIUL, QTListViewItem } from '@quicktvui/quicktvui3'
import { useESRouter } from '@extscreen/es3-router'
import { useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: '数据',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-image': qt_ul_item_image,
  },
  setup(props, context) {
    const ulRef = ref<QTIUL>()
    const itemList = ref<Array<QTListViewItem>>([])
    const router = useESRouter()
    const toast = useESToast()
    let isQuickBackPressed = false

    function onESCreate() {
      setRandomImageTextData()
    }

    function setRandomImageTextData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        const index = getRandomInt(0, 100)
        if (index % 2) {
          dataList.push(buildRandomImageItem(i))
        } else {
          dataList.push(buildRandomTextItem(i))
        }
      }
      console.log('------setRandomImageTextData-------->>>', dataList)
      itemList.value = dataList
    }

    function setRandomImageData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        dataList.push(buildRandomImageItem(i))
      }
      console.log('------setRandomImageData-------->>>', dataList)
      itemList.value = dataList
    }

    function setRandomTextData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        dataList.push(buildRandomTextItem(i))
      }
      console.log('------setRandomTextData-------->>>', dataList)
      itemList.value = dataList
    }

    function setFixedImageTextData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        if (i % 2) {
          dataList.push(buildFixedImageItem(i))
        } else {
          dataList.push(buildFixedTextItem(i))
        }
      }
      console.log('------setFixedImageTextData-------->>>', dataList)
      itemList.value = dataList
    }

    function setFixedImageData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        dataList.push(buildFixedImageItem(i))
      }
      console.log('------setFixedImageData-------->>>', dataList)
      itemList.value = dataList
    }

    function setFixedTextData() {
      const dataList = []
      for (let i = 0; i < 100; i++) {
        dataList.push(buildFixedTextItem(i))
      }
      console.log('------setFixedTextData-------->>>', dataList)
      itemList.value = dataList
    }

    function onBackPressed() {
      if (!isQuickBackPressed) {
        isQuickBackPressed = true

        ulRef.value?.scrollToTop()

        toast.showToast('再按一次返回退出')

        setTimeout(() => {
          isQuickBackPressed = false
        }, 2000)
      } else {
        router.back()
      }
    }

    return {
      ulRef,
      itemList,
      onESCreate,
      setRandomImageTextData,
      setFixedImageTextData,
      setRandomImageData,
      setFixedImageData,
      setRandomTextData,
      setFixedTextData,
      onBackPressed,
    }
  },
})
</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 1080px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-ul-class {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
}

.qt-ul-control-button-class {
  width: 1920px;
  height: 200px;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
