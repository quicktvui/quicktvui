import {defineComponent, h, ref} from 'vue';
import {ESApp, Native, registerElement} from "@extscreen/es3-vue";

function registerAppIconView(app: ESApp) {

  const AppIconViewImpl = defineComponent({
      setup(props, context) {
        const viewRef = ref()

        function setPackageName(packageName: string) {
          Native.callUIFunction(viewRef.value, 'setPackageName', [packageName], (res) => {
          });
        }

        function setRoundingRadius(roundingRadius: number) {
          Native.callUIFunction(viewRef.value, 'setRoundingRadius', [roundingRadius], (res) => {
          });
        }

        context.expose({
          setPackageName,
          setRoundingRadius,
        })
        return () => {
          return h(
            'ESAppIconViewComponent',
            {
              ref: viewRef,
            },
          )
        }
      },
    }
  )
  app.component('qt-app-icon', AppIconViewImpl);
}

export default registerAppIconView;
