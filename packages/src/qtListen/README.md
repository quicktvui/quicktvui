## 示例代码
### 数据绑定
```vue
<template>
<list-view :list="lists"></list-view>
</template>
<script setup lang="ts">
import { QTListViewItem } from "@quicktvui/quicktvui3";
import { qtRef  } from 'qtVuejs'

const lists = qtRef()
// const lists = qtRef<QTListViewItem[]>() //自定义类型

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
### 数据监听
```vue
<template>
<list-view :list="lists"></list-view>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue';
import { qtWatchAll  } from 'qtVuejs'
const props = defineProps<{pList:any}>()
const watchRunner = qtWatchAll(props.pList, {
  init(datas){
    console.log('init-', datas)
  },
  add(datas){
    console.log('add-',datas)
  },
  update(position, datas, names){
    console.log('update-', position, datas, names)
  },
  insert(position, datas){
    console.log('insert-', position, datas)
  },
  delete(position, count){
    console.log('delete-', position, count)
  },
  clear(){
    console.log('clear')
  },
  deep: 3//深度箭头层级，最多5级
})

onUnmounted(()=>{
  watchRunner?.stop()//组件卸载时，销毁监听，清除缓存
})
</script>
```