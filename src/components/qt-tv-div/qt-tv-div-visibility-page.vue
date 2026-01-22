<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-visibility-css" visibility="gone">
        <p>visibility: gone</p>
      </tv-div>
      <tv-div class="tv-div-visibility-css" visibility="invisible">
        <p>visibility: invisible</p>
      </tv-div>
      <tv-div class="tv-div-visibility-css" visibility="visible" ref="divRef">
        <p>visibility: visible</p>
      </tv-div>
    </qt-column>
    <qt-row>
      <s-text-button text="QTVisibility.QT_GONE" @onButtonClicked="setVisibilityGone" />
      <s-text-button text="QTVisibility.QT_INVISIBLE" @onButtonClicked="setVisibilityInvisible" />
      <s-text-button text="QTVisibility.QT_VISIBLE" @onButtonClicked="setVisibilityVisible" />
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { QTVisibility } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'visibility',
  emits: [],
  setup() {
    const divRef = ref(null)

    const visible = ref<boolean>(true)

    function setVisibilityGone() {
      divRef.value?.setVisibility(QTVisibility.QT_GONE)
    }

    function setVisibilityInvisible() {
      divRef.value?.setVisibility(QTVisibility.QT_INVISIBLE)
    }

    function setVisibilityVisible() {
      divRef.value?.setVisibility(QTVisibility.QT_VISIBLE)
    }

    return {
      divRef,
      visible,
      setVisibilityGone,
      setVisibilityInvisible,
      setVisibilityVisible,
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
