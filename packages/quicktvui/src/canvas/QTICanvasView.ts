import { QTIView } from '../view/QTIView'

export interface QTICanvasView extends QTIView {
  destoryView(): void

  drawAction(str: string): void

  drawFinish(): void

  fillStyle(color: string): void

  fillRect(left: number, top: number, right: number, bottom: number): void

  rec(left: number, top: number, right: number, bottom: number): void

  strokeStyle(str: string): void

  strokeRect(left: number, top: number, right: number, bottom: number): void

  clearRect(left: number, top: number, right: number, bottom: number): void

  shadowBlur(value: number): void

  shadowColor(color: number): void

  shadowOffsetX(x: number): void

  shadowOffsetY(y: number): void

  lineDashOffset(offset: number): void

  lineWidth(lineWidth: number): void

  setLineDash(a: number, b: number): void

  textBaseline(str: string): void

  textAlign(str: string): void

  fillText(text: string, x: number, y: number): void

  strokeText(text: string, x: number, y: number): void

  font(text: string): void

  beginPath(): void

  moveTo(x: number, y: number): void

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean
  ): void

  clip(): void

  lineTo(x: number, y: number): void

  closePath(): void

  stroke(): void

  fill(): void

  save(): void

  restore(): void

  lineCap(str: string): void

  lineJoin(type: string): void

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void

  bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void

  globalAlpha(value: number): void

  globalCompositeOperation(value: string): void

  translate(tx: number, ty: number): void

  rotate(angle: number): void

  scale(sx: number, sy: number): void

  transform(
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void

  setTransform(
    scaleX: number,
    skewY: number,
    skewX: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void

  drawImage(url: string, x: number, y: number): void

  drawImageWithWH(url: string, x: number, y: number, width: number, height: number): void

  drawImageSlice(
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

  setVersion(version: string)

  setCurrentDensity(density: string)
}
