import {defineComponent, h, ref} from 'vue';
import {ESApp, Native} from "@extscreen/es3-vue";

function registerQTPluginView(app: ESApp) {
  const PluginViewImpl = defineComponent({
    setup(props, context) {
      const pluginViewRef = ref()

      const dispatchFunction = (funName: string, params: Array<any>): Promise<any> => {
        return new Promise((resolve) => {
          Native.callUIFunction(pluginViewRef.value, funName, params, (ret) => {
            resolve(ret);
          });
        });
      }
      context.expose({
        dispatchFunction,
      })
      return () => {
        return h(
          'div', {
            ref: pluginViewRef
          },
        )
      }
    },
  })
  app.component('qt-plugin-view', PluginViewImpl);
}

export default registerQTPluginView;
