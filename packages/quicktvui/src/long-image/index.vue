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
    :scaleType="scaleType"
    :sliderAssetsIcon="sliderAssetsIcon"
    :sliderNetworkIcon="sliderNetworkIcon"
    @onDownLoad="onDownLoad"
    @onImageLoad="onImageLoad"
    @onScroll="onScroll"
    @onRendered="onRendered"
    @onScaleChanged="onScaleChanged"
    @onCenterChanged="onCenterChanged"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref, watch } from 'vue'
import useBaseView from '../base/useBaseView'
import { ESPluginListener, useES, useESPlugin } from '@extscreen/es3-core'
import { QTILongImage } from './QTILongImage'
import { QTLongImageScaleType } from './QTLongImageScaleType'
import { QTLongImagePositionType } from './QTLongImagePositionType'
import { QTLongImageOrientation } from './QTLongImageOrientation'
import {
  QTLongImageCenterChangeBean,
  QTLongImageDownloadChangeBean,
  QTLongImageLoadStatusChangeBean,
  QTLongImageScaleChangeBean,
  QTLongImageScrollChangeBean,
  QTLongImageShowChangeBean,
} from './QTLongImageEventBean'

export default defineComponent({
  name: 'qt-long-image',
  emits: [
    'onInitializeSuccess',
    'onInitializeError',
    'onDownLoad',
    'onImageLoad',
    'onScroll',
    'onRendered',
    'onScaleChanged',
    'onCenterChanged',
  ],
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
    },
    scaleType: {
      type: Number,
      default: 4,
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
        pkg: 'eskit.plugin.long.image3',
      }

      plugin.addListener(p, listener)
      plugin.installPlugin(p)
    }

    const setInitScale = (type: QTLongImageScaleType, scale = 0) => {
      viewRef.value?.setInitScale(type, scale)
    }

    const setInitPosition = (type: QTLongImagePositionType) => {
      viewRef.value?.setInitPosition(type)
    }

    const setInitCenter = (x: number, y: number) => {
      viewRef.value?.setInitCenter(x, y)
    }

    const setInitOrientation = (orientation: QTLongImageOrientation) => {
      viewRef.value?.setInitOrientation(orientation)
    }

    const setSrc = (url: string, fileId = ''): void => {
      viewRef.value?.setSrc(url, fileId)
    }

    const zoom = (type: QTLongImageScaleType, scale = 0) => {
      viewRef.value?.zoom(type, scale)
    }

    const zoomByPoint = (type: QTLongImageScaleType, x = 0, y = 0, scale = 0) => {
      viewRef.value?.zoomByPoint(type, x, y, scale)
    }

    const zoomByCenter = (type: QTLongImageScaleType, scale = 0) => {
      viewRef.value?.zoomByCenter(type, scale)
    }

    const scrollDown = (step = 200): void => {
      viewRef.value?.scrollDown(step)
    }

    const scrollUp = (step = 200): void => {
      viewRef.value?.scrollUp(step)
    }

    const scrollLeft = (step = 200): void => {
      viewRef.value?.scrollLeft(step)
    }

    const scrollRight = (step = 200): void => {
      viewRef.value?.scrollRight(step)
    }

    const rotate = (rotation: number) => {
      viewRef.value?.rotate(rotation)
    }

    const setScaleByAnimal = (useAnimal: boolean) => {
      viewRef.value?.setScaleByAnimal(useAnimal)
    }

    const setDebug = (debug: boolean) => {
      viewRef.value?.setDebug(debug)
    }

    const scrollTo = (offsetX: number, offsetY: number): void => {
      viewRef.value?.scrollTo(offsetX, offsetY)
    }

    //---------------------------------------------------------------
    const onRendered = (showBean: QTLongImageShowChangeBean) => {
      context.emit('onRendered', showBean)
    }

    const onDownLoad = (changeBean: QTLongImageDownloadChangeBean) => {
      context.emit('onDownLoad', changeBean)
    }
    const onImageLoad = (changeBean: QTLongImageLoadStatusChangeBean) => {
      context.emit('onImageLoad', changeBean)
    }

    const onScroll = (scrollBean: QTLongImageScrollChangeBean) => {
      context.emit('onScroll', scrollBean)
    }

    const onScaleChanged = (scaleBean: QTLongImageScaleChangeBean) => {
      context.emit('onScaleChanged', scaleBean)
    }

    const onCenterChanged = (centerBean: QTLongImageCenterChangeBean) => {
      context.emit('onCenterChanged', centerBean)
    }

    return {
      viewRef,
      setSrc,
      setInitScale,
      setInitPosition,
      setInitCenter,
      setInitOrientation,
      zoom,
      zoomByPoint,
      zoomByCenter,
      scrollDown,
      scrollUp,
      scrollLeft,
      scrollRight,
      scrollTo,
      rotate,
      setScaleByAnimal,
      setDebug,
      onDownLoad,
      onImageLoad,
      onRendered,
      onScroll,
      onScaleChanged,
      onCenterChanged,
      componentInitialized,
      ...useBaseView(viewRef),
    }
  },
})
</script>
