import { defineComponent, h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'

import useBaseView from '../base/useBaseView'

function registerQTIReplaceChildView(app: ESApp) {
  const ReplaceChildViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function setChildSID(sid: string): void {
        Native.callUIFunction(viewRef.value, 'setChildSID', [sid])
      }

      context.expose({
        viewRef,
        setChildSID,
        ...useBaseView(viewRef),
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('ReplaceChildView', { ref: viewRef }, children)
      }
    },
  })
  app.component('qt-replace-child', ReplaceChildViewImpl)
}

export default registerQTIReplaceChildView
