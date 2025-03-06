<template>
  <div class="qt-ui-poster-item-corner-css" :focusable="false">
    <qt-text
        :duplicateParentState="true"
        :focusable="false"
        :textSize="fontSize"
        :ellipsizeMode="2"
        :lines="1"
        typeface="bold"
        gravity="center"
        :postDelay="350"
        style="color: white;padding: 4px 8px;height: 36px;margin: 4px;"
        :gradientBackground="cornerBackground"
        autoWidth
        :text="cornerText"
        v-if="cornerEnable"
    />
    <img :focusable="false"
         class="poster_corner_img"
         flexStyle="${corner.styleImg}"
         :src="cornerSrc"
         v-if="cornerEnableImg"/>
  </div>
</template>

<script>


import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-media-corner-title',
  props: {
    fontSize: {
      type: Number,
      default: 20
    },
    mode: {
      type: String,
      default: 'right'
    },
    //---------------------------------------------------
    cornerBackground: {
      type: Object,
    },
    cornerText: {
      type: String,
    },
    cornerEnable: {
      type: Boolean,
    },
    cornerEnableImg: {
      type: Boolean,
    },
    cornerSrc: {
      type: String,
    },
  },
  setup(props, context) {
  },
});

</script>

<style scoped>
.qt-ui-poster-item-corner-css {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
  background-color: transparent;
}

.poster_corner_img {
  position: absolute;
  top: 0.01px;
  z-index: 2;
}

.cornerRoot_left .poster_corner_img {
  left: 0.01px;
}

.cornerRoot_right .poster_corner_img {
  right: 0.01px;
}
</style>
