<template>
  <div flexStyle="${style}" type="2" style="background-color: green;" :focusable="false">
    <img class="img-section-img-css"
         :duplicateParentState="true"
         :focusable="false"
         :postDelay="300"
         :enableFocusBorder="true"
         src="http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/07/12b64e7f-5d67-4bae-8dc0-2eab5a380202.jpg"/>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "img-section",
  setup(props, context) {
    return {}
  },
});
</script>

<style scoped>
.img-section-img-css {
  width: 374px;
  height: 180px;
}
</style>
