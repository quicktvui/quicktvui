<template>
  <qt-column class="qt-collapse-item-green"
             :focusable="true"
             :enableFocusBorder="true"
             :focusScale="1">

    <span class="qt-collapse-item-title">标题一</span>
    <div class="qt-collapse-item-content">
      <span class="qt-collapse-item-content-text">{{ text }}</span>
    </div>
  </qt-column>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog, useESToast} from "@extscreen/es3-core";
import {ref} from "vue";

const TAG = 'QTCollapseItem'

export default defineComponent({
  name: "qt-collapse-item-green",
  emits: [
    'onCollapseItemGreenExpand'
  ],
  setup(props, context) {
    const log = useESLog()
    const toast = useESToast()
    const text = ref<string>('内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容')

    function onCollapseItemExpand(value: boolean) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemExpand---绿色---->>>>', value)
      }
      context.emit('onCollapseItemGreenExpand', '绿色')
    }

    function showText(val: string) {
      text.value = val
      toast.showToast(val)
    }

    return {
      onCollapseItemExpand,
      showText,
      text
    }
  },
});

</script>

<style scoped>
.qt-collapse-item-green {
  width: 1920px;
  height: 200px;
  background-color: green;
}

.qt-collapse-item-title {
  height: 50px;
  font-size: 25px;
  color: white;
  margin-left: 90px;
  text-align: center;
}

.qt-collapse-item-content {
  width: 1920px;
  height: 150px;
  background-color: grey;
}

.qt-collapse-item-content-text {
  width: 1920px;
  height: 150px;
  font-size: 25px;
  color: white;
}

</style>
