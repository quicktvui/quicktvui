import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { h, ref } from 'vue'
import useBaseView from '../base/useBaseView'
import {
  QTLongImageCenterChangeBean,
  QTLongImageDownloadChangeBean,
  QTLongImageLoadStatusChangeBean,
  QTLongImageScaleChangeBean,
  QTLongImageScrollChangeBean,
  QTLongImageShowChangeBean,
} from './QTLongImageEventBean'
import { QTLongImageScaleType } from './QTLongImageScaleType'
import { QTLongImagePositionType } from './QTLongImagePositionType'
import { QTLongImageOrientation } from './QTLongImageOrientation'

function registerQTLongImageComponent(app: ESApp) {
  const LongImageComponent = {
    component: {
      name: 'ESLongImageViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          fileId: string
          status: number
          progress: number
          message: string
          //
          width: number
          height: number
          direction: number
          scrollProgressIndicator: number
          isScrollEdge: boolean
          isScroll: boolean
          mimeType: string
          isGif: boolean
          scale: number
          minScale: number
          maxScale: number
          origin: number
          x: number
          y: number
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onImageDownLoadChange': // 原 onLongImageChange
            event.fileId = nativeEventParams.fileId
            event.width = nativeEventParams.width
            event.height = nativeEventParams.height
            event.mimeType = nativeEventParams.mimeType
            event.status = nativeEventParams.status
            event.progress = nativeEventParams.progress
            event.message = nativeEventParams.message
            break
          case 'onImageLoadStatusChange':
            event.fileId = nativeEventParams.fileId
            event.status = nativeEventParams.status
            event.message = nativeEventParams.message
            event.isGif = nativeEventParams.isGif
            event.width = nativeEventParams.width
            event.height = nativeEventParams.height
            event.scale = nativeEventParams.scale
            event.minScale = nativeEventParams.minScale
            event.maxScale = nativeEventParams.maxScale
            break
          case 'onScroll':
            event.fileId = nativeEventParams.fileId
            event.width = nativeEventParams.width
            event.height = nativeEventParams.height
            event.direction = nativeEventParams.direction
            event.percent = nativeEventParams.scrollProgressIndicator
            event.isScroll = nativeEventParams.isScrollEdge
            break
          case 'onShow':
            event.fileId = nativeEventParams.fileId
            event.isScroll = nativeEventParams.isScroll
            break
          case 'onScaleChanged':
            event.fileId = nativeEventParams.fileId
            event.scale = nativeEventParams.scale
            event.origin = nativeEventParams.origin
            break
          case 'onCenterChanged':
            event.fileId = nativeEventParams.fileId
            event.x = nativeEventParams.x
            event.y = nativeEventParams.y
            event.origin = nativeEventParams.origin
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
      const setInitScale = (type: QTLongImageScaleType, scale = 0) => {
        Native.callUIFunction(viewRef.value, 'setInitScale', [type, scale])
      }

      const setInitPosition = (type: QTLongImagePositionType) => {
        Native.callUIFunction(viewRef.value, 'setInitPosition', [type])
      }

      const setInitCenter = (x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'setInitCenter', [x, y])
      }

      const setInitOrientation = (orientation: QTLongImageOrientation) => {
        Native.callUIFunction(viewRef.value, 'setInitOrientation', [orientation])
      }

      const setSrc = (url: string, fileId = '') => {
        console.log('----------setSrc--------->>>>', url)
        Native.callUIFunction(viewRef.value, 'setImageUrl', [url, fileId])
      }

      const zoom = (type: QTLongImageScaleType, scale = 0) => {
        Native.callUIFunction(viewRef.value, 'zoom', [type, scale])
      }

      const zoomByPoint = (type: QTLongImageScaleType, x = 0, y = 0, scale = 0) => {
        Native.callUIFunction(viewRef.value, 'zoomByPoint', [type, x, y, scale])
      }

      const zoomByCenter = (type: QTLongImageScaleType, scale = 0) => {
        Native.callUIFunction(viewRef.value, 'zoomByCenter', [type, scale])
      }

      const scrollDown = (step = 200) => {
        console.log('----------scrollDown--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionDown', [step])
      }

      const scrollUp = (step = 200) => {
        console.log('----------scrollUp--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionUp', [step])
      }
      const scrollLeft = (step = 200) => {
        console.log('----------scrollLeft--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionLeft', [step])
      }

      const scrollRight = (step = 200) => {
        console.log('----------scrollRight--------->>>>', step)
        Native.callUIFunction(viewRef.value, 'actionRight', [step])
      }

      const scrollTo = (offsetX: number, offsetY: number): void => {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [offsetX, offsetY])
      }

      const rotate = (rotation: number) => {
        Native.callUIFunction(viewRef.value, 'rotate', [rotation])
      }

      const setScaleByAnimal = (useAnimal: boolean) => {
        Native.callUIFunction(viewRef.value, 'setScaleByAnimal', [useAnimal])
      }

      const setDebug = (debug: boolean) => {
        Native.callUIFunction(viewRef.value, 'setDebug', [debug])
      }

      const enableHDR = (enable: boolean) => {
        Native.callUIFunction(viewRef.value, 'enableHDR', [enable])
      }

      const setSaturation = (saturation: number) => {
        Native.callUIFunction(viewRef.value, 'setSaturation', [saturation])
      }

      const setContrast = (contrast: number) => {
        Native.callUIFunction(viewRef.value, 'setContrast', [contrast])
      }

      const setBrightness = (brightness: number) => {
        Native.callUIFunction(viewRef.value, 'setBrightness', [brightness])
      }

      const setWarmth = (warmth: number) => {
        Native.callUIFunction(viewRef.value, 'setWarmth', [warmth])
      }

      const setOverlayAlpha = (alpha: number) => {
        Native.callUIFunction(viewRef.value, 'setOverlayAlpha', [alpha])
      }

      const isHDR = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'isHDR', [], (res: boolean) => {
            resolve(res)
          })
        })
      }

      const getSaturation = (): Promise<number> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'getSaturation', [], (res: number) => {
            resolve(res)
          })
        })
      }

      const getContrast = (): Promise<number> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'getContrast', [], (res: number) => {
            resolve(res)
          })
        })
      }

      const getBrightness = (): Promise<number> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'getBrightness', [], (res: number) => {
            resolve(res)
          })
        })
      }

      const getWarmth = (): Promise<number> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'getWarmth', [], (res: number) => {
            resolve(res)
          })
        })
      }

      const getOverlayAlpha = (): Promise<number> => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'getOverlayAlpha', [], (res: number) => {
            resolve(res)
          })
        })
      }

      context.expose({
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
        enableHDR,
        setSaturation,
        setContrast,
        setBrightness,
        setWarmth,
        setOverlayAlpha,
        isHDR,
        getSaturation,
        getContrast,
        getBrightness,
        getWarmth,
        getOverlayAlpha,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('ESLongImageViewComponent', {
          ref: viewRef,
          onImageDownLoadChange: (evt) => {
            const width = evt.width
            const height = evt.height
            const status = evt.status
            const message = evt.message
            const progress = evt.progress
            const fileId = evt.fileId
            const mimeType = evt.mimeType
            console.log(
              '---------onImageDownLoadChange------------->>>>',
              status,
              progress,
              message,
              width,
              height,
              fileId,
              mimeType
            )

            const changeBean: QTLongImageDownloadChangeBean = {
              fileId,
              status,
              message,
              progress,
              width,
              height,
              mimeType,
            }
            context.emit('onDownLoad', changeBean)
          },
          onImageLoadStatusChange: (evt) => {
            const fileId = evt.fileId
            const status = evt.status
            const message = evt.message
            const isGif = evt.isGif
            const width = evt.width
            const height = evt.height
            const scale = evt.scale
            const minScale = evt.minScale
            const maxScale = evt.maxScale
            console.log(
              '---------onImageLoadStatusChange------------->>>>',
              fileId,
              status,
              message,
              isGif,
              width,
              height,
              scale,
              minScale,
              maxScale
            )

            const changeBean: QTLongImageLoadStatusChangeBean = {
              fileId,
              status,
              message,
              isGif,
              width,
              height,
              scale,
              minScale,
              maxScale,
            }
            context.emit('onImageLoad', changeBean)
          },
          onScroll: (evt) => {
            const fileId = evt.fileId
            const width = evt.width
            const height = evt.height
            const direction = evt.direction
            const percent = evt.percent
            const isScroll = evt.isScroll

            const scrollBean: QTLongImageScrollChangeBean = {
              fileId,
              direction,
              percent,
              isScroll,
              width,
              height,
            }
            context.emit('onScroll', scrollBean)
          },
          onShow: (evt) => {
            const scrollable = evt.isScroll
            const fileId = evt.fileId
            const showBean: QTLongImageShowChangeBean = {
              fileId,
              scrollable,
            }
            context.emit('onRendered', showBean)
          },
          onScaleChanged: (evt) => {
            const fileId = evt.fileId
            const scale = evt.scale
            const origin = evt.origin
            const changeBean: QTLongImageScaleChangeBean = {
              fileId,
              scale,
              origin,
            }
            context.emit('onScaleChanged', changeBean)
          },
          onCenterChanged: (evt) => {
            const fileId = evt.fileId
            const scale = evt.scale
            const origin = evt.origin
            const x = evt.x
            const y = evt.y
            const changeBean: QTLongImageCenterChangeBean = {
              fileId,
              scale,
              origin,
              x,
              y,
            }
            context.emit('onCenterChanged', changeBean)
          },
        })
      }
    },
  })
}

export default registerQTLongImageComponent
