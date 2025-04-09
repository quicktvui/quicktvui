import { isRef, Ref } from '@vue/reactivity'
import { isString } from '../utils/type'
import { Native } from '@extscreen/es3-vue'
import { QT_API_MODULE, QT_CALL_UI_FUNCTION } from '../qt/QtAPIModule'
import { QTICanvasView } from './QTICanvasView'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'
import type { Position2DWithRadius } from './Gradient'
import CanvasGradient, { RadialGradient } from './Gradient'

export interface QtCanvasViewAPI extends QtBaseViewAPI {
  destoryView(instance: string | Ref<QTICanvasView | undefined>): void

  drawAction(instance: string | Ref<QTICanvasView | undefined>, str: string): void

  drawFinish(instance: string | Ref<QTICanvasView | undefined>): void

  fillStyle(instance: string | Ref<QTICanvasView | undefined>, input: CanvasGradient): void

  fillRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void

  rec(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void

  strokeStyle(instance: string | Ref<QTICanvasView | undefined>, string: CanvasGradient): void

  strokeRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void

  clearRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void

  shadowBlur(instance: string | Ref<QTICanvasView | undefined>, value: number): void

  shadowColor(instance: string | Ref<QTICanvasView | undefined>, color: number): void

  shadowOffsetX(instance: string | Ref<QTICanvasView | undefined>, x: number): void

  shadowOffsetY(instance: string | Ref<QTICanvasView | undefined>, y: number): void

  lineDashOffset(instance: string | Ref<QTICanvasView | undefined>, offset: number): void

  lineWidth(instance: string | Ref<QTICanvasView | undefined>, lineWidth: number): void

  setLineDash(instance: string | Ref<QTICanvasView | undefined>, a: number, b: number): void

  textBaseline(instance: string | Ref<QTICanvasView | undefined>, str: string): void

  textAlign(instance: string | Ref<QTICanvasView | undefined>, str: string): void

  fillText(
    instance: string | Ref<QTICanvasView | undefined>,
    text: string,
    x: number,
    y: number
  ): void

  strokeText(
    instance: string | Ref<QTICanvasView | undefined>,
    text: string,
    x: number,
    y: number
  ): void

  font(instance: string | Ref<QTICanvasView | undefined>, text: string): void

  beginPath(instance: string | Ref<QTICanvasView | undefined>): void

  moveTo(instance: string | Ref<QTICanvasView | undefined>, x: number, y: number): void

  arc(
    instance: string | Ref<QTICanvasView | undefined>,
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean
  ): void

  clip(instance: string | Ref<QTICanvasView | undefined>): void

  lineTo(instance: string | Ref<QTICanvasView | undefined>, x: number, y: number): void

  closePath(instance: string | Ref<QTICanvasView | undefined>): void

  stroke(instance: string | Ref<QTICanvasView | undefined>): void

  fill(instance: string | Ref<QTICanvasView | undefined>): void

  save(instance: string | Ref<QTICanvasView | undefined>): void

  restore(instance: string | Ref<QTICanvasView | undefined>): void

  lineCap(instance: string | Ref<QTICanvasView | undefined>, str: string): void

  lineJoin(instance: string | Ref<QTICanvasView | undefined>, type: string): void

  quadraticCurveTo(
    instance: string | Ref<QTICanvasView | undefined>,
    cpx: number,
    cpy: number,
    x: number,
    y: number
  ): void

  bezierCurveTo(
    instance: string | Ref<QTICanvasView | undefined>,
    cpx1: number,
    cpy1: number,
    cpx2: number,
    cpy2: number,
    x: number,
    y: number
  ): void

  globalAlpha(instance: string | Ref<QTICanvasView | undefined>, value: number): void

  globalCompositeOperation(instance: string | Ref<QTICanvasView | undefined>, value: string): void

  translate(instance: string | Ref<QTICanvasView | undefined>, tx: number, ty: number): void

  rotate(instance: string | Ref<QTICanvasView | undefined>, angle: number): void

  scale(instance: string | Ref<QTICanvasView | undefined>, sx: number, sy: number): void

  transform(
    instance: string | Ref<QTICanvasView | undefined>,
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void

  setTransform(
    instance: string | Ref<QTICanvasView | undefined>,
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void

  drawImage(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    x: number,
    y: number
  ): void

  drawImageWithWH(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void

  drawImageSlice(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
  ): void

  setVersion(instance: string | Ref<QTICanvasView | undefined>, version: string)

  setCurrentDensity(instance: string | Ref<QTICanvasView | undefined>, density: string)
}

export function createQtCanvasViewAPI(viewAPI: QtBaseViewAPI): QtCanvasViewAPI {
  function destoryView(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'destoryView', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.destoryView()
    }
  }

  function drawAction(instance: string | Ref<QTICanvasView | undefined>, str: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'drawAction', [str]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.drawAction(str)
    }
  }

  function drawFinish(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'drawAction', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.drawFinish()
    }
  }

  function fillStyle(
    instance: string | Ref<QTICanvasView | undefined>,
    input: CanvasGradient
  ): void {
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'fillStyle', [command]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.fillStyle(command)
    }
  }

  function fillRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'fillRect',
        [left, top, right, bottom],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.fillRect(left, top, right, bottom)
    }
  }

  function rec(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'rec',
        [left, top, right, bottom],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.rec(left, top, right, bottom)
    }
  }

  function strokeStyle(
    instance: string | Ref<QTICanvasView | undefined>,
    string: CanvasGradient
  ): void {
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'strokeStyle', [command]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.strokeStyle(command)
    }
  }

  function strokeRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'strokeRect',
        [left, top, right, bottom],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.strokeRect(left, top, right, bottom)
    }
  }

  function clearRect(
    instance: string | Ref<QTICanvasView | undefined>,
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'clearRect',
        [left, top, right, bottom],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.clearRect(left, top, right, bottom)
    }
  }

  function shadowBlur(instance: string | Ref<QTICanvasView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'shadowBlur', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.shadowBlur(value)
    }
  }

  function shadowColor(instance: string | Ref<QTICanvasView | undefined>, color: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'shadowColor', [color]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.shadowColor(color)
    }
  }

  function shadowOffsetX(instance: string | Ref<QTICanvasView | undefined>, x: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'shadowOffsetX', [x]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.shadowOffsetX(x)
    }
  }

  function shadowOffsetY(instance: string | Ref<QTICanvasView | undefined>, y: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'shadowOffsetY', [y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.shadowOffsetY(y)
    }
  }

  function lineDashOffset(instance: string | Ref<QTICanvasView | undefined>, offset: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lineDashOffset', [offset]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.lineDashOffset(offset)
    }
  }

  function lineWidth(instance: string | Ref<QTICanvasView | undefined>, lineWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lineWidth', [lineWidth]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.lineWidth(lineWidth)
    }
  }

  function setLineDash(
    instance: string | Ref<QTICanvasView | undefined>,
    a: number,
    b: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLineDash', [a, b]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLineDash(a, b)
    }
  }

  function textBaseline(instance: string | Ref<QTICanvasView | undefined>, str: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'textBaseline', [str]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.textBaseline(str)
    }
  }

  function textAlign(instance: string | Ref<QTICanvasView | undefined>, str: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'textAlign', [str]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.textAlign(str)
    }
  }

  function fillText(
    instance: string | Ref<QTICanvasView | undefined>,
    text: string,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'fillText', [text, x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.fillText(text, x, y)
    }
  }

  function strokeText(
    instance: string | Ref<QTICanvasView | undefined>,
    text: string,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'strokeText', [text, x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.strokeText(text, x, y)
    }
  }

  function font(instance: string | Ref<QTICanvasView | undefined>, text: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'font', [text]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.font(text)
    }
  }

  function beginPath(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'beginPath', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.beginPath()
    }
  }

  function moveTo(instance: string | Ref<QTICanvasView | undefined>, x: number, y: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'moveTo', [x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.moveTo(x, y)
    }
  }

  function arc(
    instance: string | Ref<QTICanvasView | undefined>,
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'arc',
        [x, y, radius, startAngle, endAngle, anticlockwise],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    }
  }

  function clip(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clip', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.clip()
    }
  }

  function lineTo(instance: string | Ref<QTICanvasView | undefined>, x: number, y: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lineTo', [x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.lineTo(x, y)
    }
  }

  function closePath(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'closePath', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.closePath()
    }
  }

  function stroke(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'stroke', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.stroke()
    }
  }

  function fill(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'fill', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.fill()
    }
  }

  function save(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'save', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.save()
    }
  }

  function restore(instance: string | Ref<QTICanvasView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'restore', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.restore()
    }
  }

  function lineCap(instance: string | Ref<QTICanvasView | undefined>, str: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lineCap', [str]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.lineCap(str)
    }
  }

  function lineJoin(instance: string | Ref<QTICanvasView | undefined>, type: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lineJoin', [type]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.lineJoin(type)
    }
  }

  function quadraticCurveTo(
    instance: string | Ref<QTICanvasView | undefined>,
    cpx: number,
    cpy: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'quadraticCurveTo',
        [cpx, cpy, x, y],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.quadraticCurveTo(cpx, cpy, x, y)
    }
  }

  function bezierCurveTo(
    instance: string | Ref<QTICanvasView | undefined>,
    cpx1: number,
    cpy1: number,
    cpx2: number,
    cpy2: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'bezierCurveTo',
        [cpx1, cpy1, cpx2, cpy2, x, y],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y)
    }
  }

  function globalAlpha(instance: string | Ref<QTICanvasView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'globalAlpha', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.globalAlpha(value)
    }
  }

  function globalCompositeOperation(
    instance: string | Ref<QTICanvasView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'globalCompositeOperation',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.globalCompositeOperation(value)
    }
  }

  function translate(
    instance: string | Ref<QTICanvasView | undefined>,
    tx: number,
    ty: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'translate', [tx, ty]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.translate(tx, ty)
    }
  }

  function rotate(instance: string | Ref<QTICanvasView | undefined>, angle: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'rotate', [angle]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.rotate(angle)
    }
  }

  function scale(instance: string | Ref<QTICanvasView | undefined>, sx: number, sy: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scale', [sx, sy]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.scale(sx, sy)
    }
  }

  function transform(
    instance: string | Ref<QTICanvasView | undefined>,
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'transform',
        [scaleX, skewY, skewX, scaleY, translateX, translateY],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.transform(scaleX, skewY, skewX, scaleY, translateX, translateY)
    }
  }

  function setTransform(
    instance: string | Ref<QTICanvasView | undefined>,
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setTransform',
        [scaleX, skewY, skewX, scaleY, translateX, translateY],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setTransform(scaleX, skewY, skewX, scaleY, translateX, translateY)
    }
  }

  function drawImage(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'drawImage', [url, x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.drawImage(url, x, y)
    }
  }

  function drawImageWithWH(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'drawImage',
        [url, x, y, width, height],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.drawImageWithWH(url, x, y, width, height)
    }
  }

  function drawImageSlice(
    instance: string | Ref<QTICanvasView | undefined>,
    url: string,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'drawImage',
        [url, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.drawImageSlice(url, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    }
  }

  function setVersion(instance: string | Ref<QTICanvasView | undefined>, version: string) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setVersion', [version]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setVersion(version)
    }
  }

  function setCurrentDensity(instance: string | Ref<QTICanvasView | undefined>, density: string) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setCurrentDensity',
        [density],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setCurrentDensity(density)
    }
  }

  return {
    ...viewAPI,
    destoryView,
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
  }
}
