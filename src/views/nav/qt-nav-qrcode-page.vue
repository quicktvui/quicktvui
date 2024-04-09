<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTQRCode"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`qrcode/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTQRCodePageList from "../../components/qt-qr-code";

export default defineComponent({
  name: 'QTQRCode',
  setup() {
    const pageList = Object.keys(QTQRCodePageList).map(data => ({
      id: data,
      name: QTQRCodePageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
