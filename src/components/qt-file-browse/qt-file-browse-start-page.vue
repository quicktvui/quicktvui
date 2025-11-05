<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="初始化" @onButtonClicked="onInitClicked" />

      <s-text-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        @onButtonClicked="onOpenFileClicked(item)"
      />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import { useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const toast = useESToast()
    const eventText = ref<string>('')
    const pageList = ref([
      {
        id: 0,
        name: '2024年夸克、UC工时统计表1126.xlsx',
        path: '/sdcard/word/2024年夸克、UC工时统计表1126.xlsx',
        fileExt: 'xlsx',
      },
      {
        id: 1,
        name: '6.公务员录用体检特殊标准（人社部发〔2010〕82号印发）.doc',
        path: '/sdcard/word/6.公务员录用体检特殊标准（人社部发〔2010〕82号印发）.doc',
        fileExt: 'doc',
      },
      {
        id: 2,
        name: '经信法规库app说明文档.docx',
        path: '/sdcard/word/经信法规库app说明文档.docx',
        fileExt: 'docx',
      },
      {
        id: 3,
        name: '2.各招录单位地址、网站、联系电话一览表.xls',
        path: '/sdcard/word/2.各招录单位地址、网站、联系电话一览表.xls',
        fileExt: 'xls',
      },
      {
        id: 4,
        name: '2022.10新员工培训-1组.pptx',
        path: '/sdcard/word/2022.10新员工培训-1组.pptx',
        fileExt: 'pptx',
      },
      {
        id: 5,
        name: '了解欢网.pptx',
        path: '/sdcard/word/了解欢网.pptx',
        fileExt: 'pptx',
      },
      {
        id: 6,
        name: '鸿蒙编程语言白皮书-final.pdf',
        path: '/sdcard/word/鸿蒙编程语言白皮书-final.pdf',
        fileExt: 'pdf',
      },
      {
        id: 7,
        name: '106.txt',
        path: '/sdcard/word/106.txt',
        fileExt: 'txt',
      },
      {
        id: 8,
        name: '1128.log',
        path: '/sdcard/word/1128.log',
        fileExt: 'log',
      },
      {
        id: 9,
        name: '夸克网盘_tcl_2.8.1663_20250922142333_debug.apk',
        path: '/sdcard/word/夸克网盘_tcl_2.8.1663_20250922142333_debug.apk',
        fileExt: 'apk',
      },
    ])

    function onInitClicked() {
      console.log('----------onInitClicked--------->>>>')

      Native.callNativeWithPromise(
        'ESFileBrowseModule',
        'initFileBrowse',
        // 'uNC9kZV1m4uAD2aYcDXHR9MYy8/hsap05SYPE+aMMP1VFq1XYidkaTuN7/fVQI/Q'
        '93Yhfp1Zj2HlqcewyzPejjYbKqQId8O5QbFtSYiYENvT+J3a6wH+u0OUH+hZkBzp'
      ).then((res) => {
        console.log('----------canOpenFile--------->>>>', res)
        eventText.value = '初始化成功'
      })
    }

    function onOpenFileClicked(item) {
      console.log('----------onOpenFileClicked--------->>>>', item)
      if (item.fileExt === 'apk') {
        Native.callNative('ESFileBrowseModule', 'openApkFile', item.path)
        // Native.callNative('ESFileBrowseModule', 'openOtherFile', item.path, "")
      } else Native.callNative('ESFileBrowseModule', 'openFile', item.path, item.fileExt)
      // Native.callNativeWithPromise('ESFileBrowseModule', 'canOpenFileExt', item.fileExt)
      //     .then((res) => {
      //       console.log('----------canOpenFileExt--------->>>>', res)
      //       if (res) {
      //         toast.showLongToast('可以打开文件')
      //       } else {
      //         toast.showLongToast('不可以打开文件')
      //       }
      //     });
    }

    return {
      eventText,
      onInitClicked,
      onOpenFileClicked,
      pageList,
    }
  },
})
</script>

<style>
.qt-long-image-start-page {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.qt-long-image-root-css {
  width: 1920px;
  height: 1080px;
  background-color: black;
}
</style>
