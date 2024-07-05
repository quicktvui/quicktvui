<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
        ref="waterfall"
        @onPluginLoadSuccess="onPluginLoadSuccess"
        @onPluginLoadError="onPluginLoadError"
        class="qt-waterfall-css"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSectionType,
  QTWaterfallPluginSection,
  QTPluginViewEvent
} from "@quicktvui/quicktvui3";
import {ESLogLevel, useESLog, useESToast} from "@extscreen/es3-core";

const TAG = 'QTPluginView'

export default defineComponent({
  name: 'PluginSection',
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const toast = useESToast()
    const log = useESLog()

    function onESCreate() {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      //
      let sectionList: Array<QTWaterfallPluginSection> = []
      for (let i = 0; i < 20; i++) {
        let section: QTWaterfallPluginSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_PLUGIN,
          title: 'Plugin板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          itemList: [],
          pluginKey: 'plugin-hello/view' + (i % 2),
          style: {
            width: 1920,
            height: 540,
          },
          decoration: {
            top: 40,
            bottom: 40
          }
        }
        sectionList.push(section)
      }

      waterfall.value?.setSectionList(sectionList)
    }

    //---------------------------------------------------------------
    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '--------onPluginLoadSuccess-------------->>>' + JSON.stringify(event))
      }
      toast.showToast("插件加载成功" + event.sid)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '--------onPluginLoadError-------------->>>' + JSON.stringify(event))
      }
      toast.showToast("插件加载失败：" + event.errorCode + "--" + event.errorMessage)
    }

    return {
      waterfall,
      onESCreate,
      onPluginLoadSuccess,
      onPluginLoadError
    }
  },
});

</script>

<style>
.qt-waterfall-css {
  width: 1920px;
  height: 850px;
}
</style>
