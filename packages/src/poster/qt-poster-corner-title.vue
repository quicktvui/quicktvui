<template>
  <div class="cornerRightRoot" :focusable="false" showIf="${corner.showCornerRight==true}">
    <text-view
        :duplicateParentState="true"
        :focusable="false"
        :textSize="fontSize"
        :ellipsizeMode="2"
        :lines="1"
        typeface="bold"
        gravity="center"
        :postDelay="350"
        style="color: white;padding: 4px 8px;height: 36px;margin: 4px;"
        gradientBackground="${corner.background}"
        autoWidth
        text="${corner.text}"
        showIf="${corner.enable==true}"/>
    <img :focusable="false" flexStyle="${corner.style}" src="${corner.src}" showIf="${corner.enableImg==true}"/>
  </div>
  <div class="cornerLeftRoot" :focusable="false" showIf="${corner.showCornerRight==false}">
    <text-view
      :duplicateParentState="true"
      :focusable="false"
      :textSize="fontSize"
      :ellipsizeMode="2"
      :lines="1"
      typeface="bold"
      gravity="center"
      :postDelay="350"
      style="color: white;padding: 4px 8px;height: 36px;margin: 4px;"
      gradientBackground="${corner.background}"
      autoWidth
      text="${corner.text}"
      showIf="${corner.enable}"/>
    <img :focusable="false" flexStyle="${corner.style}" src="${corner.src}" showIf="${corner.enableImg}"/>
  </div>
</template>

<script>


import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-poster-corner-title',
  props: {
    fontSize: {
      type: Number,
      default: 20
    }
  },
  setup(props, context) {
  },
});

</script>

<style scoped>
.cornerRightRoot {
  flex-direction: row-reverse;
}
.cornerLeftRoot {
  flex-direction: row;
}
</style>
