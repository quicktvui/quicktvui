<template>
<div :type="4" flexStyle="${style}" name="del-section" layout="${layout}" :focusable="true" class="qt-waterfall-css-ref-sid-item-add" eventClick>
  <text-view text="删除当前板块" gravity="center" class="qt-waterfall-css-ref-sid-item-btn-add" typeface="bold" :focusable="false" duplicateParentState/>
</div>
</template>
<script lang='ts' setup>
</script>
<style scoped>
.qt-waterfall-css-ref-sid-item-add{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
}
.qt-waterfall-css-ref-sid-item-btn-add{
  width: 200px;
  height: 200px;
  color: #999999;
  font-size: 30px;
  background-color: transparent;
  focus-color: red;
}
</style>