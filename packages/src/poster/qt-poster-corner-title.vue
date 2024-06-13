<template>
  <div class="cornerRoot" :class="['cornerRoot_'+mode]" :focusable="false">
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
      showIf="${corner.enable==true}"
    />
    <img :focusable="false" class="poster_corner_img" flexStyle="${corner.styleImg}" src="${corner.src}" showIf="${corner.enableImg}"/>
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
    },
    mode: {
      type: String,
      default: 'right'
    }
  },
  setup(props, context) {
  },
});

</script>

<style scoped>
.cornerRoot {
  position: absolute;
  left: 0.01px;
  top: 0.01px;
  z-index: 1000;
  background-color: transparent;
}
.cornerRoot_right{
  flex-direction: row-reverse;
}
.poster_corner_img{
  position: absolute;
  top: 0.01px;
  z-index: 2;
}
.cornerRoot_left .poster_corner_img{
  left: 0.01px;
}
.cornerRoot_right .poster_corner_img{
  right: 0.01px;
}
</style>
