<template>
  <!-- 上图下文样式 -->
  <qt-view
    type="1"
    :style="{
      width: 200,
      height: 140,
      backgroundColor: 'rgba(255,255,255,0.06)',
      focusBackgroundColor: '#FFFFFF',
      borderRadius: 8,
      focusBorderRadius: 8,
    }"
    class="flex flex-col items-center"
    :focusable="true"
    eventFocus
    eventClick
  >
    <!-- 上方图片 -->
    <qt-image
      :style="{
        width: 160,
        height: 90,
        borderRadius: 4,
        marginTop: 8,
      }"
      src="${imageUrl}"
    />
    <!-- 下方文字 -->
    <qt-text
      text="${title}"
      fontSize="24"
      :style="{
        height: 30,
        color: 'white',
        focusColor: '#13161B',
        marginTop: 4,
        marginBottom: 8,
      }"
      autoWidth
      duplicateParentState
      typeface="bold"
      gravity="center"
      maxLines="1"
    />
  </qt-view>
</template>
<script setup></script>
<style scoped>
.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.items-center {
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.justify-center {
  justify-content: center;
}
</style>
