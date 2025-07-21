import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESLineChartViewComponent(app: ESApp) {
  registerElement('ESLineChartViewComponent', {
    component: {
      name: 'ESLineChartViewComponent',
    },
  })

  const BarChartViewImpl = defineComponent({
    name: 'ESLineChartViewComponent',
    setup(props, context) {
      const viewRef = ref()

      function setChartData(xData: Array<any>, data: Array<any>) {
        Native.callUIFunction(viewRef.value, 'setChartData', [xData, data])
      }

      context.expose({
        viewRef,
        setChartData,
      })

      return () => {
        return h('ESLineChartViewComponent', {
          ref: viewRef,
        })
      }
    },
  })
  app.component('es-line-chart-view-component', BarChartViewImpl)
}

export default registerESLineChartViewComponent
