<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-ul-selections-root-page" :clipChildren="true">
      <div style="margin-top: 36px">
        <span style="color: black; font-size: 36px; margin-left: 36px; margin-bottom: 20px"
          >qt-ul</span
        >
        <qt-ul
          class="qt-ul-root"
          :stableItemSize="100"
          :expectedTotalCount="count"
          ref="qtUlSelectionsRef"
          name="qt_selections"
          :clipChildren="false"
          :chipPadding="false"
          padding="80,0,60,0"
          :horizontal="true"
          :enablePlaceholder="false"
          :items="list"
        >
          <template #item="{ item, index }">
            <div
              class="qt-ul-item-div"
              name="qtUlItem"
              @click="itemClick($event, index, item)"
              v-if="item.type === 1"
              :focusable="true"
            >
              <qt-text
                class="qt-ul-item-text-demo"
                duplicateParentState
                :textSize="40"
                gravity="center"
                :text="item?.text"
              />
            </div>
          </template>
        </qt-ul>
        <qt-ul
          class="qt-ul-group"
          :horizontal="true"
          :clipChildren="false"
          :enablePlaceholder="false"
          :stableItemSize="180"
          :autoSelectPosition="initGroupPosition"
          :singleSelectPosition="initGroupPosition"
          :disableDefaultPlaceholder="true"
          :items="groupList"
          padding="0,20,0,0"
        >
          <template #item="{ item, index }">
            <div
              class="qt-ul-group-item"
              v-if="item.type === 1"
              name="groupItem"
              @focus="itemFocus($event, index, item)"
              :focusable="true"
            >
              <qt-text
                class="qt-ul-group-text"
                duplicateParentState
                :textSize="36"
                gravity="center"
                :text="item?.text"
              />
            </div>
          </template>
        </qt-ul>
      </div>
      <div style="margin-top: 36px" :focusable="false">
        <span
          style="color: black; font-size: 36px; margin-left: 36px; margin-bottom: 20px"
          :focusable="false"
          >qt-list-view</span
        >
        <qt-list-view
          class="qt-ul-root"
          :horizontal="true"
          padding="0,10,0,0"
          :focusable="false"
          ref="qtListViewRef"
        >
          <div class="qt-ul-item-div" :type="1" :focusable="false" eventFocus>
            <qt-text
              class="qt-ul-item-text-demo"
              duplicateParentState
              :focusable="false"
              :textSize="40"
              gravity="center"
              text="${text}"
            />
          </div>
        </qt-list-view>
      </div>
    </qt-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { QTIListView } from '@quicktvui/quicktvui3'

defineOptions({
  name: '选集',
})

const mockCount = 10000

const list = ref([])
const groupList = ref([])

const count = ref(0)

const qtListViewRef = ref<QTIListView>()

const initGroupPosition = ref(0)
const loadPageData = new Map<number, Array<any>>()
const autoscrollP = ref([0, 0])
const autoscrollGroupP = ref([initGroupPosition.value, 0])
const initPosition = ref(0)

interface Selection {
  total: number
  data: Array<any>
}

const onESCreate = () => {
  mockData(0, 0).then((res: Selection) => {
    count.value = res.total
    groupList.value = mockGroupData()

    list.value = res.data

    //group 初始 select 位置
    initGroupPosition.value = Math.floor(initPosition.value / 10)

    qtListViewRef.value?.setListData(res.data)

    // setTimeout(()=>{
    //   const updateList = getUpdateList(1,10,10)
    //   list.value.splice(0,10,...updateList)
    //   console.log("XRG===list.value==",list.value)
    // },1000)
  })
}

const getUpdateList = (pageNum, pageSize, count: number = 10) => {
  const arr: Array<any> = []
  const startP = (pageNum - 1) * pageSize
  for (let i = 0; i < count; i++) {
    arr.push({
      type: 1,
      text: startP + i,
      decoration: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10,
      },
    })
  }
  return arr
}

const mockData = (pageNum: number, size: number): Promise<Selection> => {
  return new Promise((resolve) => {
    const arr: Array<any> = []
    console.log('XRG1', new Date().getTime())
    for (let i = 0; i < mockCount; i++) {
      arr.push({
        name: 'item',
        type: 1,
        text: '',
        decoration: {
          left: 5,
          right: 5,
          top: 10,
          bottom: 10,
        },
      })
    }
    const res = {
      total: mockCount,
      data: arr,
    }
    console.log('XRG2', new Date().getTime())
    resolve(res)
  })
}

const mockGroupData = (): Array<any> => {
  console.log('XRG group ', 'start load data')
  const arr: Array<any> = []
  const offset = count.value % 10 > 0
  const groupCount = offset ? Math.floor(count.value / 10) + 1 : Math.floor(count.value / 10)
  for (let i = 0; i < groupCount; i++) {
    let text = 10 * i + 1 + '-' + (i + 1) * 10
    if (i === groupCount - 1 && offset) {
      text = 10 * i + 1 + '-' + count.value
    }
    arr.push({
      name: 'groupItem',
      type: 1,
      text,
      decoration: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    })
  }
  console.log('XRG group ', 'start load data')
  return arr
}

const itemFocus = (e, index, item) => {
  if (item.name === 'groupItem') {
    const data = loadPageData.get(index)
    if (!data) {
      const count = 10
      const updateList = getUpdateList(index + 1, 10, count)
      const deleteCount = count === 10 && list.value.length > 0 ? 10 : 0

      list.value.splice(index * 10, deleteCount, ...updateList)
      // list.value = updateList

      loadPageData.set(index, updateList)
    }
    autoscrollP.value = [index * 10, 920]
  }
}
const itemClick = (e, index, item) => {
  console.log('XRG===itemClick', e, index, item)
}
const loadMore = () => {}
defineExpose({ onESCreate })
</script>

<style>
.qt-ul-selections-root-page {
  width: 1920px;
  height: 1000px;
  background-color: #669966;
}
.qt-ul-root {
  width: 1920px;
  height: 140px;
  background-color: #a04660;
}

.qt-ul-item-div {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 16px;
  background-color: rgba(66, 99, 66, 0.8);
  focus-background-color: yellowgreen;
}
.qt-ul-item-div2 {
  width: 600px;
  height: 100px;
  margin-top: 10px;
  border-radius: 16px;
  background-color: rgba(66, 99, 66, 0.8);
  focus-background-color: yellowgreen;
}
.qt-ul-item-text-demo {
  width: 100px;
  height: 100px;
  color: white;
  focus-color: black;
  background-color: transparent;
}
.qt-ul-item-text-demo2 {
  width: 600px;
  height: 100px;
  color: white;
  focus-color: black;
  background-color: transparent;
}

.qt-ul-group {
  width: 1920px;
  height: 120px;
  margin-top: 20px;
  background-color: #a04660;
}
.qt-ul-group-item {
  width: 180px;
  height: 60px;
  border-radius: 30px;
  background-color: burlywood;
  focus-background-color: #6f606f;
}
.qt-ul-group-text {
  height: 60px;
  width: 180px;
  color: white;
  select-color: red;
  focus-color: black;
  background-color: transparent;
}
</style>
