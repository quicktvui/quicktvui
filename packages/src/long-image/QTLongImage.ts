import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { h, ref } from 'vue'
import useBaseView from '../base/useBaseView'

function registerQTLongImageComponent(app: ESApp) {
  const LongImageComponent = {
    component: {
      name: 'ESLongImageViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          isSuccess: boolean
          message: string
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onLongImageChange':
            event.isSuccess = nativeEventParams.isSuccess
            event.message = nativeEventParams.message
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('ESLongImageViewComponent', LongImageComponent)

  app.component('qt-long-image-view', {
    setup(props, context) {
      const viewRef = ref()

      const setSrc = (url) => {
        console.log('----------setCloudImageUrl--------->>>>', url)
        Native.callUIFunction(viewRef.value, 'setCloudImageUrl', [url])
      }

      context.expose({
        viewRef,
        setSrc,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('ESLongImageViewComponent', {
          ref: viewRef,
          onLongImageChange: (evt) => {
            const success = evt.isSuccess
            const message = evt.message
            context.emit('onLongImageChange', success, message)
          },
        })
      }
    },
  })
}

export default registerQTLongImageComponent
