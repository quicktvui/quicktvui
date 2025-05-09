import { defineComponent, h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'
import { ESVersion, useES } from '@extscreen/es3-core'

function registerQTPluginView(app: ESApp) {
  const PluginViewImpl = defineComponent({
    emits: ['onPluginLoadSuccess', 'onPluginLoadError'],
    setup(props, context) {
      const pluginViewRef = ref()
      const es = useES()
      const support = es.getESSDKVersionCode() >= ESVersion.ES_SDK_VERSION_29
      const element = support ? 'ESPluginViewComponent' : 'div'

      const dispatchFunction = (funName: string, params: Array<any>): Promise<any> => {
        return new Promise((resolve) => {
          Native.callUIFunction(pluginViewRef.value, funName, params, (ret) => {
            resolve(ret)
          })
        })
      }
      context.expose({
        dispatchFunction,
      })
      return () => {
        return h(element, {
          ref: pluginViewRef,
          onPluginLoadSuccess: (evt) => {
            context.emit('onPluginLoadSuccess', {
              sid: evt.sid,
            })
          },
          onPluginLoadError: (evt) => {
            context.emit('onPluginLoadError', {
              sid: evt.sid,
              errorCode: evt.errorCode,
              errorMessage: evt.errorMessage,
            })
          },
        })
      }
    },
  })
  app.component('qt-plugin-view', PluginViewImpl)
}

export default registerQTPluginView
