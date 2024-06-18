<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-view class="qt-plugin-view-start-page">
      <qt-plugin-view
          sid="hello_1"
          ref="pluginView"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError"
          pluginKey="plugin-hello"
          class="qt-plugin-view-css"/>
      <qt-plugin-view
          sid="hello_2"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError"
          pluginKey="plugin-hello"
          class="qt-plugin-view-css"/>
      <qt-plugin-view
          sid="hello_3"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError"
          pluginKey="plugin-hello"
          class="qt-plugin-view-css"/>
      <qt-plugin-view
          sid="hello_4"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError"
          pluginKey="plugin-hello"
          class="qt-plugin-view-css"/>
      <qt-plugin-view
          sid="hello_5"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError"
          pluginKey="plugin-hello"
          class="qt-plugin-view-css"/>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "@vue/runtime-core";
import {QTIPluginView, QTPluginViewEvent} from "@quicktvui/quicktvui3";
import {useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: '多组件',
  setup(props, context) {
    const pluginView = ref<QTIPluginView>();
    const toast = useESToast()

    function onESCreate(params) {
      toast.showToast("开始调用方法")
      pluginView.value?.dispatchFunction('changeAlpha', [0.5])
          .then((ret) => {
            toast.showToast("调用方法成功")
            toast.showToast(JSON.stringify(ret))
          }, error => {
            toast.showToast("调用方法错误")
            toast.showToast(error)
          })
    }

    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      toast.showToast("插件加载成功" + event.sid)
    }

    function onPluginLoadError(error: QTPluginViewEvent) {
      toast.showToast("插件加载失败：" + error.errorCode + "--" + error.errorMessage)
    }

    return {
      onESCreate,
      pluginView,
      onPluginLoadSuccess,
      onPluginLoadError
    }
  },
});
</script>

<style>
.qt-plugin-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-plugin-view-css {
  width: 600px;
  height: 100px;
  color: aqua;
  background-color: red;
  margin-bottom: 10px;
}
</style>
