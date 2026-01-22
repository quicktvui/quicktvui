<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="justify-content: center">
      <tv-img
        alt=""
        name="name2"
        :selected="true"
        showOnState="selected"
        :visible="true"
        :placeholder="defaultImage"
        src="https://user-images.githubusercontent.com/12878546/148736102-7cd9525b-aceb-41c6-a905-d3156219ef16.png"
        class="image cover"
      />
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

export default defineComponent({
  name: 'Cover',
  emits: [],
  setup() {
    return {
      defaultImage,
    }
  },
})
</script>

<style scoped>
.image {
  width: 960px;
  height: 540px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
}

.contain {
  resize-mode: contain;
}

.cover {
  resize-mode: cover;
}

.center {
  resize-mode: center;
}
</style>
