<template>
  <qt-column class="qt-collapse-item-yellow"
             :focusable="true"
             :enableFocusBorder="true"
             :focusScale="1">
    <span class="qt-collapse-item-title">标题四</span>
    <div class="qt-collapse-item-content">
      <span class="qt-collapse-item-content-text">
        内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容
      </span>
    </div>
  </qt-column>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

const TAG = 'QTCollapseItem'
export default defineComponent({
  name: "qt-collapse-item-yellow",
  setup(props, context) {
    const log = useESLog()

    function onCollapseItemExpand(value: boolean) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemExpand---黄色---->>>>', value)
      }
    }

    return {
      onCollapseItemExpand
    }
  },
});

</script>

<style scoped>
.qt-collapse-item-yellow {
  width: 1920px;
  height: 100px;
  background-color: yellow;
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
  height: 50px;
  background-color: grey;
}

.qt-collapse-item-content-text {
  width: 1920px;
  height: 50px;
  font-size: 25px;
  color: white;
}
</style>
