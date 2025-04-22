<template>
  <qt-long-image-view
    ref="viewRef"
    v-if="componentInitialized"
    :size="size"
    :imageUrl="src"
    :isScaleEnabled="zoomEnabled"
    :activeColor="activeColor"
    :inactiveColor="inactiveColor"
    :inactiveBorderColor="inactiveBorderColor"
    :sliderColor="sliderColor"
    :disabledActiveBgColor="disabledActiveBgColor"
    :disabledInactiveBgColor="disabledInactiveBgColor"
    :disabled="disabled"
    :modelValue="modelValue"
    :borderSize="borderSize"
    :sliderAssetsIcon="sliderAssetsIcon"
    :sliderNetworkIcon="sliderNetworkIcon"
    @onLoad="onLoad"
    @onScroll="onScroll"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref, watch } from 'vue'
import useBaseView from '../base/useBaseView'
import { ESPluginListener, useES, useESPlugin } from '@extscreen/es3-core'
import { QTILongImage } from './QTILongImage'

export default defineComponent({
  name: 'qt-long-image',
  emits: ['onLoad', 'onScroll', 'onInitializeSuccess', 'onInitializeError'],
  props: {
    size: {
      type: String,
      default: 'default',
    },
    activeColor: {
      type: String,
      default: 'default',
    },
    inactiveColor: {
      type: String,
      default: '#e2e2e2',
    },
    inactiveBorderColor: {
      type: String,
      default: '#b5b5b5',
    },
    sliderColor: {
      type: String,
      default: '#FFFFFF',
    },
    disabledActiveBgColor: {
      type: String,
      default: '#269A4D',
    },
    disabledInactiveBgColor: {
      type: String,
      default: '#AAAAAA',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    borderSize: {
      type: Number,
      default: 3,
    },
    sliderAssetsIcon: {
      type: String,
      default: '',
    },
    sliderNetworkIcon: {
      type: String,
      default: '',
    },
    zoomEnabled: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const viewRef = ref<QTILongImage>()

    const plugin = useESPlugin()
    const es = useES()

    const componentInitialized = ref(false)

    initializePlugin()

    watch(
      () => [viewRef.value] as const,
      ([componentInstance], [oldComponentInstance]) => {
        if (componentInstance) {
          onComponentInitializeSuccess()
        }
      },
      { flush: 'post' }
    )

    function initializePlugin(): void {
      es.isComponentRegistered('eskit.sdk.support.longimage.ESLongImageViewComponent').then(
        (isRegistered) => {
          if (isRegistered) {
            componentInitialized.value = true
          } else {
            installPlugin()
          }
        },
        (error) => {
          onComponentInitializeError(error)
        }
      )
    }

    function onComponentInitializeSuccess() {
      context.emit('onInitializeSuccess')
    }

    function onComponentInitializeError(error) {
      context.emit('onInitializeError', error)
    }

    const listener: ESPluginListener = {
      onPluginInstallSuccess(pkg: string, status: number, msg: string) {
        plugin.removeListener(listener)
        componentInitialized.value = true
      },
      onPluginInstallProgress(pkg: string, status: number, current: number, total: number) {},
      onPluginInstallError(pkg: string, status: number, msg: string) {
        plugin.removeListener(listener)
        onComponentInitializeError({ status, msg })
      },
    }

    function installPlugin() {
      const p = {
        pkg: 'eskit.plugin.long.image',
      }

      plugin.addListener(p, listener)
      plugin.installPlugin(p)
    }

    const setSrc = (url: string): void => {
      viewRef.value?.setSrc(url)
    }

    const setZoomEnabled = (value: boolean): void => {
      viewRef.value?.setZoomEnabled(value)
    }

    const zoomIn = (step: number): void => {
      viewRef.value?.zoomIn(step)
    }

    const zoomOut = (step: number): void => {
      viewRef.value?.zoomOut(step)
    }

    const scrollDown = (step: number): void => {
      viewRef.value?.scrollDown(step)
    }

    const scrollUp = (step: number): void => {
      viewRef.value?.scrollUp(step)
    }

    const scrollLeft = (step: number): void => {
      viewRef.value?.scrollLeft(step)
    }

    const scrollRight = (step: number): void => {
      viewRef.value?.scrollRight(step)
    }

    //---------------------------------------------------------------
    const onLoad = (
      status: number,
      progress: number,
      message: string,
      width: number,
      height: number
    ) => {
      context.emit('onLoad', status, progress, message, width, height)
    }
    const onScroll = (
      direction: number,
      percent: number,
      isScroll,
      width: number,
      height: number
    ) => {
      context.emit('onScroll', direction, percent, isScroll, width, height)
    }

    return {
      viewRef,
      setSrc,
      setZoomEnabled,
      zoomIn,
      zoomOut,
      scrollDown,
      scrollUp,
      scrollLeft,
      scrollRight,
      onLoad,
      onScroll,
      componentInitialized,
      ...useBaseView(viewRef),
    }
  },
})
</script>
