<template>
  <!-- 自定义 item 如下 type = 1  注意必须 添加layout="${layout}" 生效 -->
  <div flexStyle="${style}"
       layout="${layout}"
       style="background-color: pink;
       border-radius: 8px;"
       :focusable="true"
       focusScale="1.06"
       eventClick eventFocus
       :enableFocusBorder="true">
        <span style="width: 500px;height: 200px;text-align: center; font-size: 26px;color: #000;"
              :focusable="false">
          我是自定义item  type: 1
        </span>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "text-item",
  setup(props, context) {
    return {}
  },
});

</script>
