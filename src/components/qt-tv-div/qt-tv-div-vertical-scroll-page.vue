<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css">
      <tv-div class="tv-div-scroll-root-css" :showsVerticalScrollIndicator="false">
        <tv-div class="display-flex flex-column">
          <p class="text-block">A</p>
          <p class="text-block">B</p>
          <p class="text-block">C</p>
          <p class="text-block">D</p>
          <p class="text-block">E</p>
          <p class="text-block">F</p>
          <p class="text-block">G</p>
          <p class="text-block">K</p>
        </tv-div>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'VerticalScroll',
  emits: [],
  setup() {
    const divRef = ref(null)

    const onScroll = (e: Event) => {
      console.log('onScroll', e)
    }
    const onMomentumScrollBegin = (e: Event) => {
      console.log('onMomentumScrollBegin', e)
    }
    const onMomentumScrollEnd = (e: Event) => {
      console.log('onMomentumScrollEnd', e)
    }
    const onScrollBeginDrag = (e: Event) => {
      console.log('onScrollBeginDrag', e)
    }
    const onScrollEndDrag = (e: Event) => {
      console.log('onScrollEndDrag', e)
    }

    return {
      onScroll,
      onMomentumScrollBegin,
      onMomentumScrollEnd,
      onScrollBeginDrag,
      onScrollEndDrag,
      divRef,
    }
  },
})
</script>

<style scoped>
.tv-div-scroll-root-css {
  width: 200px;
  height: 800px;
  margin: 10px;
  flex-direction: row;
  background-color: red;
  overflow-y: scroll;
}

.tv-div-scroll-css {
  display: flex;
  flex-direction: row;
}

.text-block {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-style: solid;
  border-width: 1px;
  border-color: #40b883;
  font-size: 80px;
  margin: 20px;
  color: #40b883;
  text-align: center;
}
</style>
