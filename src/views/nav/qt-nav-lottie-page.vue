<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTLottie"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`lottie/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTLottiePageList from "../../components/qt-lottie";

export default defineComponent({
  name: 'QTLottie',
  setup() {
    const pageList = Object.keys(QTLottiePageList).map(data => ({
      id: data,
      name: QTLottiePageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
