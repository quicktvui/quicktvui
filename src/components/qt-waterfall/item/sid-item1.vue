<template>
<div :type="1" flexStyle="${style}" layout="${layout}" disablePlaceholderFocus :focusable="false" class="qt-waterfall-css-ref-sid-item">
  <img src="${imgURL}" flexStyle="${style}" :focusable="false" />
  <text-view class="qt-waterfall-css-ref-sid-item-title" :focusable="false" text="${title}" />
  <div flexStyle="${style}" :focusable="false" class="qt-waterfall-css-ref-sid-item-bg">
    <text-view name="del" :focusable="true" text="删除" gravity="center" class="qt-waterfall-css-ref-sid-item-btn" typeface="bold"/>
    <text-view name="update" :focusable="true" text="更新" gravity="center" class="qt-waterfall-css-ref-sid-item-btn" typeface="bold"/>
  </div>
</div>
</template>
<script lang='ts' setup>
</script>
<style scoped>
.qt-waterfall-css-ref-sid-item{
  background-color: rgba(0,0,0,0.8);
  position: relative;
}
.qt-waterfall-css-ref-sid-item-title{
  position: absolute;
  font-size: 30px;
  width: 260px;
  height: 50px;
  background-color: #ffffff;
  color: #000000;
  z-index: 1;
}
.qt-waterfall-css-ref-sid-item-bg{
  position: absolute;
  z-index: 2;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.qt-waterfall-css-ref-sid-item-btn{
  width: 100px;
  height: 50px;
  color: #000000;
  background-color: #ffffff;
  focus-color: red;
}
</style>