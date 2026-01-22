<template>
  <qt-tabs ref="tabRef" class="qt-tabs-css" :tabs="tabDatas">
    <template #waterfall-item>
      <appListItem :type="1" />
    </template>
  </qt-tabs>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { qtTabsRef } from '@quicktvui/quicktvui3'
import appListItem from './item/app-list-item.vue'

const tabDatas = qtTabsRef()

onMounted(() => {
  tabDatas.value = mockNavData() //初始化数据
})

// 模拟接口数据
const mockNavData = () => {
  return Array.from({ length: 10 })
    .fill(1)
    .map((item, index) => {
      return {
        _id: `001${index}`,
        type: 20000,
        text: 'tab01',
        titleSize: 20,
        decoration: { left: 40, right: 20 },
        content: Array.from({ length: 2 })
          .fill(1)
          .map((sitem, sindex) => {
            return {
              _id: `section-id${index}${sindex}`,
              type: 1002,
              title: `板块标题${sindex}`,
              titleStyle: { width: 1620, height: 60 },
              style: { width: 1620, height: -1 },
              itemList: Array.from({ length: 5 })
                .fill(1)
                .map((siitem, siindex) => {
                  return {
                    _id: `item-id${index}${sindex}${siindex}`,
                    type: 1,
                    decoration: { left: 90, bottom: 40 },
                    appIcon:
                      'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
                    appName: `格子标题${siindex}`,
                    style: { width: 170, height: 220 },
                  }
                }),
            }
          }),
      }
    })
}
</script>
<style scoped>
.qt-tabs-css {
  width: 1920px;
  height: 1080px;
}
</style>
