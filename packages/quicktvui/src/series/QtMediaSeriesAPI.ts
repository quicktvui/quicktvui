import { QtViewAPI } from '../view/QtViewAPI'
import { Ref } from '@vue/reactivity'
import { QTIMediaSeries } from './QTIMediaSeries'
import { QTMediaSeriesType } from './QTMediaSeriesType'
import { QTMediaSeriesGroup } from './QTMediaSeriesGroup'
import { QTMediaSeriesStyleType } from './QTMediaSeriesStyleType'
import { QTMediaSeriesData } from './QTMediaSeriesData'
import { QTMediaSeries } from './QTMediaSeries'

export interface QtMediaSeriesAPI extends Omit<QtViewAPI, 'requestFocus'> {
  setup(instance: Ref<QTIMediaSeries | undefined>): void

  setInitData(
    instance: Ref<QTIMediaSeries | undefined>,
    type: QTMediaSeriesType,
    group: QTMediaSeriesGroup,
    styleType: QTMediaSeriesStyleType,
    data: QTMediaSeriesData
  ): void

  setVisible(instance: Ref<QTIMediaSeries | undefined>, visible: boolean): void

  setPageData(
    instance: Ref<QTIMediaSeries | undefined>,
    page: number,
    data: Array<QTMediaSeries>
  ): void

  scrollTo(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  scrollToWithOffset(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number,
    offset: number,
    anim: boolean
  ): void

  setSelected(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  setGroupSelected(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  requestFocus(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  release(instance: Ref<QTIMediaSeries | undefined>): void
}

export function createQtMediaSeriesAPI(viewAPI: QtViewAPI): QtMediaSeriesAPI {
  function setup(instance: Ref<QTIMediaSeries | undefined>): void {
    instance.value?.setup()
  }

  function setInitData(
    instance: Ref<QTIMediaSeries | undefined>,
    type: QTMediaSeriesType,
    group: QTMediaSeriesGroup,
    styleType: QTMediaSeriesStyleType,
    data: QTMediaSeriesData
  ): void {
    instance.value?.setInitData(type, group, styleType, data)
  }

  function setVisible(instance: Ref<QTIMediaSeries | undefined>, visible: boolean): void {
    instance.value?.setVisible(visible)
  }

  function setPageData(
    instance: Ref<QTIMediaSeries | undefined>,
    page: number,
    data: Array<QTMediaSeries>
  ): void {
    instance.value?.setPageData(page, data)
  }

  function scrollTo(instance: Ref<QTIMediaSeries | undefined>, position: number): void {
    instance.value?.scrollTo(position)
  }

  function scrollToWithOffset(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number,
    offset: number,
    anim: boolean
  ): void {
    instance.value?.scrollToWithOffset(position, offset, anim)
  }

  function setSelected(instance: Ref<QTIMediaSeries | undefined>, position: number): void {
    instance.value?.setSelected(position)
  }

  function setGroupSelected(instance: Ref<QTIMediaSeries | undefined>, position: number): void {
    instance.value?.setGroupSelected(position)
  }

  function requestFocus(instance: Ref<QTIMediaSeries | undefined>, position: number): void {
    instance.value?.requestFocus(position)
  }

  function release(instance: Ref<QTIMediaSeries | undefined>): void {
    instance.value?.release()
  }

  return {
    ...viewAPI,
    setup,
    setInitData,
    setVisible,
    setPageData,
    scrollTo,
    scrollToWithOffset,
    setSelected,
    setGroupSelected,
    requestFocus,
    release,
  }
}
