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
          status: number
          progress: number
          message: string
          //
          width: number
          height: number
          direction: number
          percent: number
          isScroll: boolean
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onLongImageChange':
            console.log('-----------onLoad-------->>>>', nativeEventParams)
            event.width = nativeEventParams.width
            event.height = nativeEventParams.height
            event.status = nativeEventParams.status
            event.progress = nativeEventParams.progress
            event.message = nativeEventParams.message
            break
          case 'onScroll':
            console.log('-----------onScroll-------->>>>', nativeEventParams)
            event.width = nativeEventParams.width
            event.height = nativeEventParams.height
            event.direction = nativeEventParams.direction
            event.percent = nativeEventParams.percent
            event.isScroll = nativeEventParams.isScroll
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

      const setSrc = (url: string) => {
        console.log('----------setSrc--------->>>>', url)
        Native.callUIFunction(viewRef.value, 'setImageUrl', [url])
      }

      const setZoomEnabled = (value: boolean) => {
        console.log('----------setZoomEnabled--------->>>>', value)
        Native.callUIFunction(viewRef.value, 'setScaleEnabled', [value])
      }

      const zoomIn = (step: number) => {
        console.log('----------zoomIn--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'handleDpadCenter', [true, step])
      }
      const zoomOut = (step: number) => {
        console.log('----------zoomOut--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'handleDpadCenter', [false, step])
      }
      const scrollDown = (step: number) => {
        console.log('----------scrollDown--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionDown', [step])
      }

      const scrollUp = (step: number) => {
        console.log('----------scrollUp--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionUp', [step])
      }
      const scrollLeft = (step: number) => {
        console.log('----------scrollLeft--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionLeft', [step])
      }

      const scrollRight = (step: number) => {
        console.log('----------scrollRight--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionRight', [step])
      }

      context.expose({
        viewRef,
        setSrc,
        setZoomEnabled,
        zoomIn,
        zoomOut,
        scrollDown,
        scrollUp,
        scrollLeft,
        scrollRight,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('ESLongImageViewComponent', {
          ref: viewRef,
          onLongImageChange: (evt) => {
            const width = evt.width
            const height = evt.height
            const status = evt.status
            const message = evt.message
            const progress = evt.progress
            console.log(
              '---------onLongImageChange------------->>>>',
              status,
              progress,
              message,
              width,
              height
            )

            context.emit('onLoad', status, progress, message, width, height)
          },
          onScroll: (evt) => {
            const width = evt.width
            const height = evt.height
            const direction = evt.direction
            const percent = evt.percent
            const isScroll = evt.isScroll
            context.emit('onScroll', direction, percent, isScroll, width, height)
          },
        })
      }
    },
  })
}

export default registerQTLongImageComponent
