<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-row class="qt-ul-control-button-class">
      <qt-button
        size="small"
        class="text-button-class"
        text="100个文本"
        :requestFocus="true"
        @click="onButtonTextClick"
      />

      <qt-button
        size="small"
        class="text-button-class"
        text="100个Movie"
        :requestFocus="true"
        @click="onButtonNegativeClick"
      />

      <qt-button
        size="small"
        class="text-button-class"
        text="100个Media"
        :requestFocus="true"
        @click="onButtonZeroClick"
      />

      <qt-button
        size="small"
        class="text-button-class"
        text="100个海报"
        :requestFocus="true"
        @click="onButtonOneClick"
      />

      <qt-button
        size="small"
        class="text-button-class"
        text="100个图片"
        @click="onButtonImageClick"
      />

      <qt-button size="small" class="text-button-class" text="50个长图" @click="onButtonTwoClick" />

      <qt-button
        size="small"
        class="text-button-class"
        text="20个中图"
        @click="onButtonThreeClick"
      />

      <qt-button
        size="small"
        class="text-button-class"
        text="100个混合"
        @click="onButtonFourClick"
      />
    </qt-row>
    <qt-view class="qt-ul-root-page">
      <qt-list-view
        class="qt-ul-class"
        ref="ulRef"
        name="ul"
        :clipChildren="false"
        :clipPadding="false"
        horizontal
      >
        <template #item="{ item }">
          <qt-ul-item-text
            :text="item.text"
            :type="3"
            :focusable="true"
            :enableFocusBorder="true"
          />

          <qt-ul-item-image :src="item.url" :type="2" :focusable="true" :enableFocusBorder="true" />

          <qt-ul-item-movie :type="11" :item="item" />

          <qt-ul-item-poster
            :type="5"
            :rootStyle="item.style"
            :focus="item.focus"
            :image="item.image"
            :shadow="item.shadow"
            :shimmer="item.shimmer"
            :title="item.title"
            :focusTitle="item.focusTitle"
            :subTitle="item.subTitle"
            :floatTitle="item.floatTitle"
            :ripple="item.ripple"
            :corner="item.corner"
            :score="item.score"
            :titleStyle="item.titleStyle"
            :titleFocusStyle="item.titleFocusStyle"
            :placeholderImg="item.placeholderImg"
          />

          <qt-ul-item-media
            :type="10"
            :focusScale="item.focusScale"
            :focusBorder="item.focusBorder"
            :imageSrc="item.imageSrc"
            :scoreStyleFontSize="item.scoreStyleFontSize"
            :scoreBackground="item.scoreBackground"
            :scoreText="item.scoreText"
            :titleText="item.titleText"
            :focusTitleText="item.focusTitleText"
            :subTitleText="item.subTitleText"
            :floatTitleText="item.floatTitleText"
            :rippleSrc="item.rippleSrc"
            :cornerText="item.cornerText"
            :cornerSrc="item.cornerSrc"
          />

          <qt-ul-item-long-image :src="item.url" :type="7" />

          <qt-ul-item-medium-image :src="item.url" :type="8" />
        </template>
      </qt-list-view>
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import qt_ul_item_image from './item/image/qt-ul-item-image.vue'
import qt_ul_item_poster from './item/poster/qt-ul-item-poster.vue'
import qt_ul_item_media from './item/media/qt-ul-item-media.vue'
import qt_ul_item_movie from './item/movie/qt-ul-item-movie.vue'
import qt_ul_item_long_image from './item/image/qt-ul-item-long-image.vue'
import qt_ul_item_medium_image from './item/image/qt-ul-item-medium-image.vue'

import { QTIListView, QTIUL, QTListViewItem } from '@quicktvui/quicktvui3'
import { useESRouter } from '@extscreen/es3-router'
import { useESToast } from '@extscreen/es3-core'
import { buildRandomPosterItemList } from './__mocks__/poster'
import {
  buildRandomImageItemList,
  buildRandomLongImageItemList,
  buildRandomMediumImageItemList,
  buildRandomTextItemList,
} from './__mocks__/list'
import { buildRandomWaterfallItemList } from './__mocks__/waterfall'
import { buildRandomCornerText, buildRandomMediaItemList } from './__mocks__/media'
import { buildRandomMovieItemList } from './__mocks__/movie'
import { QTListViewTextItem } from './item/text/QTListViewTextItem'
import { getRandomFloat } from './__mocks__/random'
import { buildRandomColor } from './__mocks__/colors'
import { QT_LIST_VIEW_ITEM_TYPE_MEDIA } from './item/type'
import { buildRandomText } from './__mocks__/text'
import { buildRandomImage } from './__mocks__/image'

export default defineComponent({
  name: '$',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-image': qt_ul_item_image,
    'qt-ul-item-poster': qt_ul_item_poster,
    'qt-ul-item-long-image': qt_ul_item_long_image,
    'qt-ul-item-medium-image': qt_ul_item_medium_image,
    'qt-ul-item-media': qt_ul_item_media,
    'qt-ul-item-movie': qt_ul_item_movie,
  },
  setup(props, context) {
    const ulRef = ref<QTIListView>()
    const itemList = ref<Array<QTListViewItem>>([])
    const router = useESRouter()
    const toast = useESToast()
    let isQuickBackPressed = false

    function onESCreate() {
      ulRef.value?.initTemplate([
        //text
        {
          text: '',
          backgroundColor: '',
        },
        //image
        {
          url: '',
          backgroundColor: '',
        },
        {
          _id: '_',
          position: '',
          focus: {
            enable: true,
            scale: 1,
            border: false,
          },
          type: 5,
          decoration: {
            top: 30,
            left: 30,
            right: 30,
          },
          title: {
            text: '主标题',
            enable: true,
            style: {
              width: 260,
              height: 60,
            },
          },
          subTitle: {
            text: '副标题',
            enable: true,
            style: {
              width: 260,
            },
          },
          floatTitle: {
            text: '浮动标题',
            enable: true,
            style: {
              width: 260,
              height: 64,
            },
            background: { colors: ['#e5000000', '#00000000'], orientation: 4 },
          },
          focusTitle: {
            text: '焦点主标题',
            enable: true,
            style: {
              width: 260,
              height: 64,
            },
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
            },
          },
          image: {
            src: '',
            enable: true,
            style: {
              width: 260,
              height: 320,
            },
          },
          score: {
            text: getRandomFloat() + '',
            enable: true,
            style: {
              width: 50,
              height: 40,
            },
            background: {
              colors: [buildRandomColor(), buildRandomColor()],
              cornerRadii4: [8, 8, 8, 8],
              orientation: 2,
            },
          },
          corner: {
            text: '角标',
            enable: true,
            style: {
              width: 100,
              height: 30,
            },
            background: {
              colors: ['#FE3824', '#F0051E'],
              cornerRadii4: [0, 8, 0, 8],
              orientation: 2,
            },
          },
          style: {
            width: 260,
            height: 400,
          },
          itemSize: 400,
          titleStyle: {
            width: 260,
            height: 120,
            marginTop: 320 - 60,
          },
          titleFocusStyle: { width: 260, marginTop: 320 - 50 },
        },
        {
          _id: '_',
          itemSize: 400,
          position: '',
          focusEnable: true,
          focusScale: 1,
          focusBorder: false,
          type: QT_LIST_VIEW_ITEM_TYPE_MEDIA,
          decoration: {
            top: 30,
            left: 30,
            right: 30,
          },
          titleText: buildRandomText(),
          titleEnable: true,
          titleStyleWidth: 260,
          titleStyleHeight: 60,

          subTitleText: buildRandomText(),
          subTitleEnable: true,
          subTitleStyleWidth: 260,

          floatTitleText: '',
          floatTitleEnable: true,
          floatTitleStyleWidth: 260,
          floatTitleStyleHeight: 64,
          floatTitleBackground: { colors: ['#e5000000', '#00000000'], orientation: 4 },

          focusTitleText: buildRandomText(),
          focusTitleEnable: true,
          focusTitleStyleWidth: 260,
          focusTitleStyleHeight: 64,

          shimmerEnable: true,

          rippleEnable: true,
          rippleStyleRight: 0,
          rippleStyleBottom: 0,
          rippleStyleMarginRight: -12,

          imageSrc: buildRandomImage(),
          imageEnable: true,
          imageStyleWidth: 260,
          imageStyleHeight: 320,

          scoreText: getRandomFloat() + '',
          scoreEnable: true,
          scoreStyleWidth: 50,
          scoreStyleHeight: 40,
          scoreBackground: {
            colors: [buildRandomColor(), buildRandomColor()],
            cornerRadii4: [8, 8, 8, 8],
            orientation: 2,
          },
          scoreStyleFontSize: 20,

          cornerText: buildRandomCornerText(),
          cornerEnable: true,
          cornerStyleWidth: 100,
          cornerStyleHeight: 30,
          cornerBackground: {
            colors: [buildRandomColor(), buildRandomColor()],
            cornerRadii4: [0, 8, 0, 8],
            orientation: 2,
          },

          styleWidth: 260,
          styleHeight: 400,

          titleNormalStyleWidth: 260,
          titleNormalStyleHeight: 120,
          titleNormalStyleMarginTop: 320 - 60,

          titleFocusStyleWidth: 260,
          titleFocusStyleMarginTop: 320 - 50,
        },
      ])

      const user = createDynamicObject<User>()
      console.log('----1----createDynamicObject----user--->>>>>>', user)

      console.log(user.id) // default_id
      console.log(user.name) // default_name
      console.log(user.email) // default_email

      const keys = Object.keys(user)

      console.log('----2----createDynamicObject------->>>>', keys)

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        console.log('----3----createDynamicObject------->>>>', key, user[key])
      }
    }

    //--------------------------------
    function createDynamicObject<T>(): T {
      return new Proxy(
        {},
        {
          get(_, prop) {
            if (typeof prop === 'string') {
              return `default_${prop}` // 生成默认值
            }
          },
        }
      ) as T
    }

    // 示例：即使 `User` 结构未知，也能动态生成对象
    type User = {
      id: number
      name: string
      email?: string
    }

    // -----------------------

    function onButtonNegativeClick() {
      const list = buildRandomMovieItemList(0, 100)
      console.log('----------buildRandomMovieItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonZeroClick() {
      const list = buildRandomMediaItemList(0, 100)
      console.log('----------buildRandomMediaItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonOneClick() {
      const list = buildRandomPosterItemList(0, 100)
      console.log('----------buildRandomPosterItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonTwoClick() {
      const list = buildRandomLongImageItemList(50)
      console.log('----------buildRandomLongImageItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonThreeClick() {
      const list = buildRandomMediumImageItemList(20)
      console.log('----------buildRandomMediumImageItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonFourClick() {
      const list = buildRandomWaterfallItemList(0, 100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonTextClick() {
      const list = buildRandomTextItemList(100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      ulRef.value?.init(list)
    }

    function onButtonImageClick() {
      const list = buildRandomImageItemList(100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      ulRef.value?.init(list)
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
      onBackPressed,
      onButtonNegativeClick,
      onButtonZeroClick,
      onButtonOneClick,
      onButtonTwoClick,
      onButtonThreeClick,
      onButtonFourClick,
      onButtonTextClick,
      onButtonImageClick,
    }
  },
})
</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 880px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.qt-ul-class {
  width: 1920px;
  height: 880px;
  background-color: darkgray;
}

.qt-ul-control-button-class {
  width: 1920px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
