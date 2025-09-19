<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-visibility-css" ref="divRef">
        <p>background-color: red</p>
      </tv-div>
    </qt-column>
    <qt-row>
      <s-text-button text="setBackgroundColor" @onButtonClicked="setBackgroundColor" />
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'BackgroundColor',
  emits: [],
  setup() {
    const divRef = ref(null)

    const visible = ref<boolean>(true)

    function setBackgroundColor() {
      divRef.value?.setBackgroundColor('#7415B1')
    }

    return {
      divRef,
      visible,
      setBackgroundColor,
    }
  },
})
</script>

<style scoped>
.tv-div-visibility-css {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
