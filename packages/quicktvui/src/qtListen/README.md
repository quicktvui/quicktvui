## ui组件封装 - qtWatchAll - 数据监听
```vue
<template>
<tv-list></tv-list>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue';
import { qtWatchAll,qtFilterChangeMap  } from '@quicktvui/quicktvui3'
const props = defineProps<{pList:any}>()
const watchRunner = qtWatchAll(props.pList, {
  init(datas){
    console.log('init-', datas)//初始化数据
  },
  add(datas){
    console.log('add-',datas)//新增数据
  },
  update(position, dataMaps){
    const datas = qtFilterChangeMap(1, dataMaps.datas)
    console.log('update-', position, datas)//更新数据
  },
  insert(position, datas){
    console.log('insert-', position, datas)//插入数据
  },
  delete(position, count){
    console.log('delete-', position, count)//删除数据
  },
  clear(){
    console.log('clear')//清空数据
  }
})

onUnmounted(()=>{
  watchRunner?.stop()//组件卸载时，销毁监听，清除缓存
})
</script>
```
## 在业务中使用ui组件 - qtRef - 响应式数据绑定
```vue
<template>
<list-view :list="lists"></list-view>
</template>
<script setup lang="ts">
import { qtRef } from "@quicktvui/quicktvui3";

const lists = qtRef()
// const lists = qtRef<QTListViewItem[]>() //指定类型

// 初始化数据
lists.value = [
  { name: 'a' },
  { name: 'b' },
  { name: 'c' },
]
// 新增/追加单个数据
lists.value.push({ name: 'd' })

//批量追加数据，推荐使用 concat
lists.value = lists.value.concat([{name:'f'}, {name:'g'}])

// 删除数据
lists.value.pop()//从最后删除一条数据
lists.value.splice(0, 2)//从索引为0的地方删除两条数据

// 插入数据
lists.value.splice(1, 0, {name: 'e'})//从索引为1的地方插入一条数据
lists.value.splice(1, 1, {name: 'e'},{name: 'g'})//从索引为1的地方删除一条数据，并插入两条新数据

// 更新数据
lists.value[0].name = 'aa'//单个修改
lists.value.forEach(item => {//批量修改
  if(item.id>1){
    item.name += '123'
  }
})
</script>
```
