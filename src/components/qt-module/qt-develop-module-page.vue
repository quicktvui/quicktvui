<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="开发信息模块用来获取开发相关runtime信息"></s-text-view>
      <s-text-view :text="'Runtime版本名称：' + versionName"></s-text-view>
      <s-text-view :text="'Runtime版本号：' + versionCode"></s-text-view>
      <s-text-view :text="'Runtime包名：' + packageName"></s-text-view>
      <s-text-view :text="'Runtime渠道：' + channel"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: '开发信息模块',
  setup() {
    const versionCode = ref(-1)
    const versionName = ref("")
    const packageName = ref("")
    const channel = ref("")

    const onESCreate = (params) => {
      versionCode.value = qt.develop.getVersionCode()
      versionName.value = qt.develop.getVersionName()
      packageName.value = qt.develop.getPackageName()
      channel.value = qt.develop.getChannel()
    }

    return {
      onESCreate,
      versionCode,
      versionName,
      packageName,
      channel,
    }
  },
});

</script>
<style>
</style>
