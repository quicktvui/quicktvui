import { h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

import useBaseView from '../base/useBaseView'
import { CanvasGradient, Position2DWithRadius, RadialGradient } from './CanvasGradient'

function registerQTCanvasView(app: ESApp) {
  registerElement('CanvasView2D', {
    component: {
      name: 'CanvasView2D',
    },
  })

  const CanvasViewImpl = {
    setup(props, context) {
      const viewRef = ref()

      const destroyView = () => {
        Native.callUIFunction(viewRef.value, 'destoryView', [])
      }

      const drawAction = (str: string) => {
        Native.callUIFunction(viewRef.value, 'drawAction', [str])
      }

      const drawFinish = () => {
        Native.callUIFunction(viewRef.value, 'drawAction', [])
      }

      const fillStyle = (input: CanvasGradient) => {
        let command = ''
        if (input.type === 'linear') {
          command =
            'AC' +
            input.start_pos.x.toFixed(2) +
            ',' +
            input.start_pos.y.toFixed(2) +
            ',' +
            input.end_pos.x.toFixed(2) +
            ',' +
            input.end_pos.y.toFixed(2)

          for (let i = 0; i < input.stop_count; ++i) {
            command += ',' + input.stops[i].pos + ',' + input.stops[i].color
          }
        } else if ((input as RadialGradient) && input.type === 'radial') {
          const start = input.start_pos as Position2DWithRadius
          const end = input.end_pos as Position2DWithRadius
          command =
            'AD' +
            start.x.toFixed(2) +
            ',' +
            start.y.toFixed(2) +
            ',' +
            start.r.toFixed(2) +
            ',' +
            end.x.toFixed(2) +
            ',' +
            end.y.toFixed(2) +
            ',' +
            end.r.toFixed(2)

          for (let i = 0; i < input.stop_count; ++i) {
            command += ',' + input.stops[i].pos + ',' + input.stops[i].color
          }
        } else if (typeof input === 'string') {
          command = input
        }

        Native.callUIFunction(viewRef.value, 'fillStyle', [command])
      }

      const fillRect = (left: number, top: number, right: number, bottom: number) => {
        Native.callUIFunction(viewRef.value, 'fillRect', [left, top, right, bottom])
      }

      const rec = (left: number, top: number, right: number, bottom: number) => {
        Native.callUIFunction(viewRef.value, 'rec', [left, top, right, bottom])
      }

      const strokeStyle = (string: CanvasGradient) => {
        let command = ''
        if (typeof string === 'object' && string.type === 'linear') {
          command =
            'NC' +
            string.start_pos.x.toFixed(2) +
            ',' +
            string.start_pos.y.toFixed(2) +
            ',' +
            string.end_pos.x.toFixed(2) +
            ',' +
            string.end_pos.y.toFixed(2)
          for (let i = 0; i < string.stop_count; ++i) {
            command += ',' + string.stops[i].pos + ',' + string.stops[i].color
          }
        } else if (typeof string === 'string') {
          command = string
        }
        Native.callUIFunction(viewRef.value, 'strokeStyle', [command])
      }

      const strokeRect = (left: number, top: number, right: number, bottom: number) => {
        Native.callUIFunction(viewRef.value, 'strokeRect', [left, top, right, bottom])
      }

      const clearRect = (left: number, top: number, right: number, bottom: number) => {
        Native.callUIFunction(viewRef.value, 'clearRect', [left, top, right, bottom])
      }

      const shadowBlur = (value: number) => {
        Native.callUIFunction(viewRef.value, 'shadowBlur', [value])
      }

      const shadowColor = (color: number) => {
        Native.callUIFunction(viewRef.value, 'shadowColor', [color])
      }

      const shadowOffsetX = (x: number) => {
        Native.callUIFunction(viewRef.value, 'shadowOffsetX', [x])
      }

      const shadowOffsetY = (y: number) => {
        Native.callUIFunction(viewRef.value, 'shadowOffsetY', [y])
      }

      const lineDashOffset = (offset: number) => {
        Native.callUIFunction(viewRef.value, 'lineDashOffset', [offset])
      }

      const lineWidth = (lineWidth: number) => {
        Native.callUIFunction(viewRef.value, 'lineWidth', [lineWidth])
      }

      const setLineDash = (a: number, b: number) => {
        Native.callUIFunction(viewRef.value, 'setLineDash', [a, b])
      }

      const textBaseline = (str: string) => {
        Native.callUIFunction(viewRef.value, 'textBaseline', [str])
      }

      const textAlign = (str: string) => {
        Native.callUIFunction(viewRef.value, 'textAlign', [str])
      }

      const fillText = (text: string, x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'fillText', [text, x, y])
      }

      const strokeText = (text: string, x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'strokeText', [text, x, y])
      }

      const font = (text: string) => {
        Native.callUIFunction(viewRef.value, 'font', [text])
      }

      const beginPath = () => {
        Native.callUIFunction(viewRef.value, 'beginPath', [])
      }

      const moveTo = (x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'moveTo', [x, y])
      }

      const arc = (
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean
      ) => {
        Native.callUIFunction(viewRef.value, 'arc', [
          x,
          y,
          radius,
          startAngle,
          endAngle,
          anticlockwise,
        ])
      }

      const clip = () => {
        Native.callUIFunction(viewRef.value, 'clip', [])
      }

      const lineTo = (x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'lineTo', [x, y])
      }

      const closePath = () => {
        Native.callUIFunction(viewRef.value, 'closePath', [])
      }

      const stroke = () => {
        Native.callUIFunction(viewRef.value, 'stroke', [])
      }

      const fill = () => {
        Native.callUIFunction(viewRef.value, 'fill', [])
      }

      const save = () => {
        Native.callUIFunction(viewRef.value, 'save', [])
      }

      const restore = () => {
        Native.callUIFunction(viewRef.value, 'restore', [])
      }

      const lineCap = (str: string) => {
        Native.callUIFunction(viewRef.value, 'lineCap', [str])
      }

      const lineJoin = (type: string) => {
        Native.callUIFunction(viewRef.value, 'lineJoin', [type])
      }

      const quadraticCurveTo = (cpx: number, cpy: number, x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'quadraticCurveTo', [cpx, cpy, x, y])
      }

      const bezierCurveTo = (
        cpx1: number,
        cpy1: number,
        cpx2: number,
        cpy2: number,
        x: number,
        y: number
      ) => {
        Native.callUIFunction(viewRef.value, 'bezierCurveTo', [cpx1, cpy1, cpx2, cpy2, x, y])
      }

      const globalAlpha = (value: number) => {
        Native.callUIFunction(viewRef.value, 'globalAlpha', [value])
      }

      const globalCompositeOperation = (value: string) => {
        Native.callUIFunction(viewRef.value, 'globalCompositeOperation', [value])
      }

      const translate = (tx: number, ty: number) => {
        Native.callUIFunction(viewRef.value, 'translate', [tx, ty])
      }

      const rotate = (angle: number) => {
        Native.callUIFunction(viewRef.value, 'rotate', [angle])
      }

      const scale = (sx: number, sy: number) => {
        Native.callUIFunction(viewRef.value, 'scale', [sx, sy])
      }

      const transform = (
        scaleX: number,
        skewY: number,
        skewX: number,
        scaleY: number,
        translateX: number,
        translateY: number
      ) => {
        Native.callUIFunction(viewRef.value, 'transform', [
          scaleX,
          skewY,
          skewX,
          scaleY,
          translateX,
          translateY,
        ])
      }

      const setTransform = (
        scaleX: number,
        skewY: number,
        skewX: number,
        scaleY: number,
        translateX: number,
        translateY: number
      ) => {
        Native.callUIFunction(viewRef.value, 'setTransform', [
          scaleX,
          skewY,
          skewX,
          scaleY,
          translateX,
          translateY,
        ])
      }

      const drawImage = (url: string, x: number, y: number) => {
        Native.callUIFunction(viewRef.value, 'drawImage', [url, x, y])
      }

      const drawImageWithWH = (
        url: string,
        x: number,
        y: number,
        width: number,
        height: number
      ) => {
        Native.callUIFunction(viewRef.value, 'drawImage', [url, x, y, width, height])
      }

      const drawImageSlice = (
        url: string,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
      ) => {
        Native.callUIFunction(viewRef.value, 'drawImage', [
          url,
          sx,
          sy,
          sWidth,
          sHeight,
          dx,
          dy,
          dWidth,
          dHeight,
        ])
      }

      const setVersion = (version: string) => {
        Native.callUIFunction(viewRef.value, 'setVersion', [version])
      }

      const setCurrentDensity = (density: string) => {
        Native.callUIFunction(viewRef.value, 'setCurrentDensity', [density])
      }

      context.expose({
        viewRef,
        destroyView,
        drawAction,
        drawFinish,
        fillStyle,
        fillRect,
        rec,
        strokeStyle,
        strokeRect,
        clearRect,
        shadowBlur,
        shadowColor,
        shadowOffsetX,
        shadowOffsetY,
        lineDashOffset,
        lineWidth,
        setLineDash,
        textBaseline,
        textAlign,
        fillText,
        strokeText,
        font,
        beginPath,
        moveTo,
        arc,
        clip,
        lineTo,
        closePath,
        stroke,
        fill,
        save,
        restore,
        lineCap,
        lineJoin,
        quadraticCurveTo,
        bezierCurveTo,
        globalAlpha,
        globalCompositeOperation,
        translate,
        rotate,
        scale,
        transform,
        setTransform,
        drawImage,
        drawImageWithWH,
        drawImageSlice,
        setVersion,
        setCurrentDensity,
        ...useBaseView(viewRef),
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'CanvasView2D',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  }
  app.component('qt-canvas-view', CanvasViewImpl)
}

export default registerQTCanvasView
