<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="justify-content: center">
      <tv-ul
        id="list"
        ref="list"
        :name="name"
        :sid="id"
        :nextFocusIds="nextFocusId"
        :clipChildren="false"
        :style="horizontal && { height: 50, flex: 0 }"
        :horizontal="horizontal"
        :exposureEventEnabled="true"
        :bounces="true"
        :focusable="true"
        :rowShouldSticky="true"
        :overScrollEnabled="true"
        :scrollEventThrottle="1000"
        :autofocusPosition="autofocusPosition"
        :enableSelectOnFocus="true"
        :opacity="opacity"
        :Visibility="Visibility"
        :backGroundColor="backGroundColor"
        :tabStop="tabStop"
        @endReached="onEndReached"
        @scroll="onScroll"
        @momentumScrollBegin="onMomentumScrollBegin"
        @momentumScrollEnd="onMomentumScrollEnd"
        @scrollBeginDrag="onScrollBeginDrag"
        @scrollEndDrag="onScrollEndDrag"
        @click.stop="changeFocus(name)"
        @scrollStateChanged="pageScrollStateChanged"
      >
        <tv-li
          v-for="(ui, index) in dataSource"
          :key="index"
          :class="horizontal && 'item-horizontal-style'"
          :type="ui.style"
          :sticky="index === 1"
          @appear="onAppear(index)"
          @disappear="onDisappear(index)"
          @willAppear="onWillAppear(index)"
          @willDisappear="onWillDisappear(index)"
        >
          <div v-if="ui.style === 1" class="container">
            <div class="item-container">
              <p :numberOfLines="1">
                {{ `${index}:Style 1 UI ` }}
              </p>
            </div>
          </div>
          <div v-else-if="ui.style === 2" class="container">
            <div class="item-container">
              <p :numberOfLines="1">
                {{ `${index}: Style2 UI` }}
              </p>
            </div>
          </div>
          <div v-else-if="ui.style === 5" class="container">
            <div class="item-container">
              <p :numberOfLines="1">
                {{ `${index}: Style 5 UI` }}
              </p>
            </div>
          </div>
          <div v-else class="container">
            <div class="item-container">
              <p id="loading">
                {{ loadingState }}
              </p>
            </div>
          </div>
          <div v-if="index !== dataSource.length - 1" class="separator-line" />
        </tv-li>
      </tv-ul>
      <div
        :style="{
          position: 'absolute',
          left: 20,
          bottom: 20,
          width: 67,
          height: 67,
          borderRadius: 30,
          boxShadowOpacity: 0.6,
          boxShadowRadius: 5,
          boxShadowOffsetX: 3,
          boxShadowOffsetY: 3,
          boxShadowColor: '#40b883',
        }"
        @click="requestFocus"
      >
        <div
          :style="{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#40b883',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <p :style="{ color: 'white' }">请求焦点</p>
        </div>
      </div>
      <div
        :style="{
          position: 'absolute',
          left: 20,
          bottom: 100,
          width: 67,
          height: 67,
          borderRadius: 30,
          boxShadowOpacity: 0.6,
          boxShadowRadius: 5,
          boxShadowOffsetX: 3,
          boxShadowOffsetY: 3,
          boxShadowColor: '#40b883',
        }"
        @click="clearFocus"
      >
        <div
          :style="{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#40b883',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <p :style="{ color: 'white' }">清除焦点</p>
        </div>
      </div>
      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 20,
          width: 67,
          height: 67,
          borderRadius: 30,
          boxShadowOpacity: 0.6,
          boxShadowRadius: 5,
          boxShadowOffsetX: 3,
          boxShadowOffsetY: 3,
          boxShadowColor: '#40b883',
        }"
        @click="changeDirection"
      >
        <div
          :style="{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#40b883',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <p :style="{ color: 'white' }">切换方向</p>
        </div>
      </div>
      <div
        :style="{
          position: 'absolute',
          right: 20,
          top: 220,
          width: 200,
          borderRadius: 30,
          boxShadowOpacity: 0.6,
          boxShadowRadius: 5,
          boxShadowOffsetX: 3,
          boxShadowOffsetY: 3,
          boxShadowColor: '#40b883',
        }"
      >
        <div
          :style="{
            borderRadius: 30,
            backgroundColor: '#40b883',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <p :style="{ color: 'white' }">
            {{ eventInfo }}
          </p>
        </div>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 100,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="changeAlpha(0.5)"
      >
        <p :style="{ color: 'white' }">切换透明度</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 160,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="changeVisibility('visible')"
      >
        <p :style="{ color: 'white' }">visibility: visible</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 230,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="changeVisibility('invisible')"
      >
        <p :style="{ color: 'white' }">visibility: invisible</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 300,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="changeVisibility('gone')"
      >
        <p :style="{ color: 'white' }">visibility:gone</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          top: 10,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="setVisibility(QTVisibility.VISIBLE)"
      >
        <p :style="{ color: 'white' }">setVisible: visibile</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          top: 70,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="setVisibility(QTVisibility.INVISIBLE)"
      >
        <p :style="{ color: 'white' }">setVisible: invisible</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          top: 150,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="setVisibility(QTVisibility.GONE)"
      >
        <p :style="{ color: 'white' }">setVisible: gone</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 20,
          bottom: 370,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="setBackGroundColor('#dde38e27')"
      >
        <p :style="{ color: 'white' }">背景颜色切换</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 90,
          bottom: 100,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="blockRootFocus"
      >
        <p :style="{ color: 'white' }">阻塞焦点</p>
      </div>

      <div
        :style="{
          position: 'absolute',
          right: 90,
          bottom: 160,
          width: 60,
          height: 60,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#40b883',
        }"
        @click="unBlockRootFocus"
      >
        <p :style="{ color: 'white' }">取消阻塞焦点</p>
      </div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { ListViewEvent, Native } from '@extscreen/es3-vue'
import { defineComponent, ref, onMounted, Ref } from '@vue/runtime-core'

enum QTVisibility {
  VISIBLE = 'visible',
  INVISIBLE = 'invisible',
  GONE = 'gone',
}
const STYLE_LOADING = 100
const mockDataArray = [
  { style: 1 },
  { style: 2 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 1 },
  { style: 2 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
]

/**
 * 获取 mock 数据
 */
const mockFetchData = async () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockDataArray), 3000)
  })

// item fully exposed
const onAppear = (index: number) => {
  console.log('onAppear', index)
}
// item is completely hidden
const onDisappear = (index: number) => {
  console.log('onDisappear', index)
}
// item at least one pixel exposure
const onWillAppear = (index: number) => {
  console.log('onWillAppear', index)
}
// item is hidden by at least one pixel
const onWillDisappear = (index: number) => {
  console.log('onWillDisappear', index)
}

const onMomentumScrollBegin = (event) => {
  console.log('momentumScrollBegin', event)
}

const onMomentumScrollEnd = (event) => {
  console.log('momentumScrollEnd', event)
}

const onScrollBeginDrag = (event) => {
  console.log('onScrollBeginDrag', event)
}

const onScrollEndDrag = (event) => {
  console.log('onScrollEndDrag', event)
}

export default defineComponent({
  name: 'ul',
  emits: [],
  setup() {
    const loadingState = ref('')
    const dataSource: Ref<any[]> = ref([])
    const list = ref(null)
    const horizontal = ref(false)
    let isLoading = false
    const name = ref('name555')
    const name1 = ref('name1555')
    const name2 = ref('name2555')
    const id = ref('id28868')
    const divRef = ref(null)
    const isFocused = ref(false)
    const autofocusPosition = -1
    const eventInfo = ref('eventInfo')
    const opacity = ref(1)
    const Visibility = ref('visible')
    const backGroundColor = ref('')
    const tabStop = ref(false)

    const nextFocusId = ref({ up: 'name2555', right: 'name555', down: 'name1555' })
    /**
     * scroll to the end of the list, trigger the event, you can load the next page
     *
     * @param evt
     */
    const onEndReached = async (evt) => {
      console.log('endReached', evt)

      if (isLoading) {
        return
      }

      const data = dataSource.value
      isLoading = true
      loadingState.value = 'Loading now...'
      dataSource.value = [...data, [{ style: STYLE_LOADING }]]
      // get data
      const newData: any = await mockFetchData()
      if (dataSource.value.length < 50) {
        dataSource.value = [...data, ...newData]
      }

      // release lock
      isLoading = false
    }
    const changeFocus = (name: string) => {
      if (divRef.value) {
        isFocused.value = !isFocused.value
        // @ts-ignore
        divRef.value.changeFocus(isFocused.value, name)
      }
    }
    /**
     * change direction
     */
    const changeDirection = () => {
      horizontal.value = !horizontal.value
    }

    const changeAlpha = (alpha: number) => {
      if (opacity.value == 1) {
        opacity.value = alpha
      } else {
        opacity.value = 1
      }
    }

    const changeVisibility = (visibility: string) => {
      Visibility.value = visibility
    }
    const setVisibility = (v: QTVisibility) => {
      Visibility.value = v
    }
    const setBackGroundColor = (focusAbility: string) => {
      backGroundColor.value = focusAbility
    }
    const blockRootFocus = () => {
      tabStop.value = true
    }
    const unBlockRootFocus = () => {
      tabStop.value = false
    }
    const pageScrollStateChanged = (evt) => {
      /**
       * Callback when the scroll state of ListView is triggered:
       Event.newState: 1 (scroll starts)
       Event.newState: 2 (scrolling)
       Event.newState: 0 (scroll ends)
       Event.offsetX (X-axis coordinate)
       Event.offsetY (Y-axis coordinate)
       */
      // Native.ConsoleModule.debug(`scrollStateChanged event:'
      // evt.offsetX: ${evt.offsetX}
      // evt.offsetY: ${evt.offsetY}
      // evt.newState: ${evt.newState}`)

      eventInfo.value = `scrollStateChanged event:'
      evt.offsetX: ${evt.offsetX}
      evt.offsetY: ${evt.offsetY}
      evt.newState: ${evt.newState}`
    }

    let topReached = false
    const onScroll = (event) => {
      console.log('onScroll', event.offsetY)
      if (event.offsetY <= 0) {
        if (!topReached) {
          topReached = true
          console.log('onTopReached')
        }
      } else {
        topReached = false
      }
    }

    const requestFocus = () => {
      if (list.value) {
        // @ts-ignore
        list.value.requestFocus()
      }
    }

    const clearFocus = () => {
      if (list.value) {
        // @ts-ignore
        list.value.clearFocus()
      }
    }
    onMounted(() => {
      /**
       * isLoading is a loading lock, just copy
       * onEndReach fires multiple times when at the bottom of the screen,
       * so a lock needs to be added, and secondary loading is not performed when the unloading is completed.
       */
      isLoading = false
      dataSource.value = [...mockDataArray]
    })

    return {
      name,
      name1,
      name2,
      id,
      nextFocusId,
      autofocusPosition,
      loadingState,
      dataSource,
      list,
      STYLE_LOADING,
      horizontal,
      onAppear,
      onDisappear,
      onEndReached,
      onWillAppear,
      onWillDisappear,
      changeDirection,
      onScroll,
      onMomentumScrollBegin,
      onMomentumScrollEnd,
      onScrollBeginDrag,
      onScrollEndDrag,
      changeFocus,
      eventInfo,
      pageScrollStateChanged,
      requestFocus,
      clearFocus,
      changeAlpha,
      opacity,
      changeVisibility,
      Visibility,
      QTVisibility,
      setVisibility,
      setBackGroundColor,
      backGroundColor,
      tabStop,
      blockRootFocus,
      unBlockRootFocus,
    }
  },
})
</script>

<style scoped>
#loading {
  font-size: 11px;
  color: #aaa;
  align-self: center;
}

.container {
  background-color: #fff;
  collapsable: false;
}

.item-container {
  padding: 12px;
}

.separator-line {
  margin-left: 12px;
  margin-right: 12px;
  height: 1px;
  background-color: #e5e5e5;
}

/* configure li style if horizontal ul is set*/
.item-horizontal-style {
  height: 50px;
  width: 100px;
}
</style>
