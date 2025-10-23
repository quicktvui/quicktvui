import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESBarChartViewComponent(app: ESApp) {
  registerElement('ESBarChartViewComponent', {
    component: {
      name: 'ESBarChartViewComponent',
    },
  })

  const BarChartViewImpl = defineComponent({
    name: 'ESBarChartViewComponent',
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
        return h('ESBarChartViewComponent', {
          ref: viewRef,
        })
      }
    },
  })
  app.component('es-bar-chart-view-component', BarChartViewImpl)
}

export default registerESBarChartViewComponent
