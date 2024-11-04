<template>
<div :type="2" flexStyle="${style}" layout="${layout}" disablePlaceholderFocus :focusable="false" class="qt-waterfall-css-ref-sid-item">
  <tv-list
    flexStyle="${listStyle}" list="${list}" sid="${listSid}"
    :clipChildren="false" :focusable="false" :endHintEnabled="false">
    <div type="101" :focusable="true" class="itl_box_list_item">
      <text-view class="itl_box_list_item_txt" :focusable="false" text="${txt}" duplicateParentState gravity="center" :ellipsizeMode="2" :lines="1"/>
    </div>
  </tv-list>
  <div :focusable="false" class="qt-waterfall-css-ref-sid-list-btn">
    <text-view name="add-list" :focusable="true" text="加一条" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
    <text-view name="update-list" :focusable="true" text="更新" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
    <text-view name="del-list" :focusable="true" text="删格子" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
    <text-view name="del-list-item" :focusable="true" text="删一条" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
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
.itl_box_list_item{
  width: 260px;
  height: 50px;
  background-color: #ffffff;
  focus-background-color: #000000;
}
.qt-waterfall-css-ref-sid-list-btn{
  width: 260px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
}
.qt-waterfall-css-ref-sid-list-btn-txt{
  width: 80px;
  height: 30px;
  font-size: 20px;
  color: #000000;
  background-color: #ffffff;
  focus-color: red;
}
.itl_box_list_item_txt{
  height: 50px;
  font-size: 30px;
  color: #000000;
  focus-color: #ffffff;
  background-color: transparent;
}
</style>