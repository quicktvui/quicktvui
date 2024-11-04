<template>
<div :type="101" flexStyle="${style}" name="add-section" :focusable="true" class="qt-waterfall-css-ref-sid-item-add" eventClick>
  <text-view text="+" gravity="center" class="qt-waterfall-css-ref-sid-item-btn-add" typeface="bold" :focusable="false" duplicateParentState/>
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
  height: 50px;
  color: #999999;
  font-size: 50px;
  background-color: transparent;
  focus-color: red;
}
</style>