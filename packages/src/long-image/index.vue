<template>
  <qt-long-image-view
    ref="viewRef"
    v-if="componentInitialized"
    :size="size"
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
    :setScaleEnabled="setScaleEnabled"
    @onLongImageChange="onLongImageChange"
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
  emits: ['onLongImageChange', 'onInitializeSuccess', 'onInitializeError'],
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
    setScaleEnabled: {
      type: Boolean,
      default: true,
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

    const setSrc = (url) => {
      viewRef.value?.setSrc(url)
    }

    const onLongImageChange = (success: boolean, message: string) => {
      context.emit('onLongImageChange', success, message)
    }

    return {
      viewRef,
      setSrc,
      onLongImageChange,
      componentInitialized,
      ...useBaseView(viewRef),
    }
  },
})
</script>
