<template>
  <div
    class="itl_box" layout="${layout}" :focusable="false"
    eventClick eventFocus flexStyle="${style}"
  >
    <img class="itl_img" flexStyle="${style}"
      :focusable="false" :postDelay="300" src="${appIcon}"/>
    <div class="itl_content" flexStyle="${style}" :focusable="false">
      <text-view class="itl_content_title" :focusable="false" text="${appName}"/>
      <tv-list
        class="itl_box_list" list="${list}" name="itl_box_list_name"
        sid="${listSID}"
        :clipChildren="false" :focusable="false" :endHintEnabled="false">
        <div type="101" :focusable="true" class="itl_box_list_item" :focusScale="1.1">
          <text-view class="itl_box_list_item_txt" :focusable="false" text="${txt}" duplicateParentState gravity="center"/>
        </div>
      </tv-list>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style scoped>
.itl_box{
  position: relative;
  width: 500px;
  height: 300px;
  background-color: transparent;
}
.itl_img{
  background-color: transparent;
}
.itl_content{
  position: absolute;
  z-index: 2;
  background-color: transparent;
}
.itl_content_title{
  height: 50px;
  font-size: 30px;
  color: #000000;
  background-color: #ffffff;
}

.itl_box_list {
  width: 200px;
  height: 200px;
  background-color: transparent;
}
.itl_box_list_item{
  width: 100px;
  height: 50px;
  background-color: #ffffff;
  focus-background-color: #000000;
}
.itl_box_list_item_txt{
  height: 50px;
  font-size: 30px;
  color: #000000;
  focus-color: #ffffff;
  background-color: transparent;
}
</style>
