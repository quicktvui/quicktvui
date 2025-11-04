import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { h, ref } from 'vue'
import useBaseView from '../base/useBaseView'

function registerQTFileBrowseComponent(app: ESApp) {
  const FileBrowseComponent = {
    component: {
      name: 'ESFileBrowseComponent',
      processEventData(evtData, nativeEventParams: {}) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('ESFileBrowseComponent', FileBrowseComponent)

  app.component('qt-file-browse-view', {
    setup(props, context) {
      const viewRef = ref()
      const init = () => {
        return new Promise((resolve, reject) => {
          Native.callUIFunction(viewRef.value, 'init', [], (err, res) => {
            if (err) {
              reject(err)
            } else {
              resolve(res)
            }
          })
        })
      }

      const canOpenFile = (fileExtension: string) => {
        return Native.callUIFunction(viewRef.value, 'canOpenFile', [fileExtension])
      }

      const openFile = (filePath: string, fileExtension: string) => {
        Native.callUIFunction(viewRef.value, 'openFile', [filePath, fileExtension])
      }

      const closeFile = () => {
        Native.callUIFunction(viewRef.value, 'closeFile', [])
      }

      const useCustomView = (useCustom: boolean) => {
        Native.callUIFunction(viewRef.value, 'useCustomView', [useCustom])
      }

      context.expose({
        viewRef,
        init,
        canOpenFile,
        openFile,
        closeFile,
        useCustomView,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('ESFileBrowseComponent', {
          ref: viewRef,
        })
      }
    },
  })
}

export default registerQTFileBrowseComponent
