## grid-view 新语法使用示例
- 安装测试版本的quicktvui3
```sh
npm i @quicktvui/quicktvui3@beta
```
### 初始化数据
```ts
import { qtRef } from '@quicktvui/quicktvui3';

const listData = qtRef()//定义响应式变量
listData.value = [{ text: '', type: 1 }]//初始化数据
```
### 分页加载更多数据-结束分页
```ts
const loadMore = async (num) => {
  const newArr = [{ text: '', type: 1 }]
  listData.value = listData.value.concat(newArr)//新增数据
}
```
### 结束分页
```ts
// gridViewRef.value.stopPage()//结束分页-默认不带底部【已经到底啦】提示
gridViewRef.value.stopPage(true)//结束分页-自动加上底部【已经到底啦】提示
```
### 清空数据
```ts
listData.value = []//直接赋值为空数组即可
```
### 重置数据
```ts
listData.value = [{ text: '', type: 1 }]//直接赋值新数组即可
```
### 综合案例
```vue
<template>
<div class="page">
  <qt-grid-view 
    class="grid_view" ref="gridViewRef" :clipChildren="false" :clipPadding="false"
    :enablePlaceholder="true" padding="0,0,0,20" :list-data="listData"
    :preloadNo="5" :loadMore="loadMore" :listenBoundEvent="true" :openPage="true"
    :spanCount="6" :loadingDecoration="{left: 950, top: 20, bottom: 20}"
    :focusable="false"
  >
    <!-- 自定义item -->
    <qt-view type="1" class="qt_list_item" :focusable="true" eventClick>
      <qt-text text="${text}" class="qt_list_item_text"></qt-text>
    </qt-view>
    <!-- 加载更多loading-模板【type必须是1002】grid-view中需要使用v-slot:loading插槽，list-view中不需要使用插槽 -->
    <template v-slot:loading>
      <qt-loading-view :type="1002" name="loading" color="rgba(255,255,255,0.3)" style="height: 40px;width: 40px;" :focusable="false"/>
    </template>
    <!-- 分页结束提示语-模板【type必须是1003】 -->
    <qt-text :type="1003" style="width: 1920px;height: 100px;" gravity="center" :focusable="false" text="已经到底啦"></qt-text>
  </qt-grid-view>
</div>
</template>
<script lang='ts' setup>
import { qtRef } from '@quicktvui/quicktvui3';
import { nextTick, ref } from 'vue';
import type { QTListViewItem } from '@quicktvui/quicktvui3';

const getApiData = (num = 30, flag=''):Promise<any>=>{
  return new Promise(resolve=>{//模拟接口返回数据
    const arr = new Array(num).fill(1).map((_,index)=>{
      return { text: index+flag, type: 1, decoration: {left:10, right: 20, bottom: 20} }
    })
    setTimeout(() => {
      resolve(arr)
    }, 1000);
  })
}

const gridViewRef = ref()
const listData = qtRef<QTListViewItem[]>()

const loadMore = async (num) => {
  const newArr = await getApiData()
  if(newArr){
    listData.value = listData.value.concat(newArr)
  }else{
    gridViewRef.value.stopPage(true)//结束分页
  }
}

defineExpose({
  onESCreate() {
    getApiData().then(resArr=>{
      listData.value = resArr//初始化数据
    })
  }
})
</script>
```