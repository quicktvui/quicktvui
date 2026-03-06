<template>
  <!-- 上图下文样式 -->
  <qt-view
    type="1"
    :style="{
      width: 336,
      height: 260,
      backgroundColor: 'rgba(255,255,255,0.1)',
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
        width: 336,
        height: 198,
        borderRadius: 8,
      }"
      src="${imageUrl}"
    />
    <!-- 下方文字 -->
    <qt-text
      text="${title}"
      fontSize="30"
      :style="{
        width: 336,
        height: 34,
        color: 'white',
        focusColor: '#13161B',
        marginTop: 12,
      }"
      :ellipsizeMode="4"
      duplicateParentState
      typeface="bold"
      gravity="center"
      maxLines="1"
    />
    <!-- 播放标识 -->
    <play-mark
      name="playMark"
      showIf="${isPlaying}"
      :style="{
        width: 24,
        height: 24,
        position: 'absolute',
        right: 24,
        bottom: 60,
      }"
      markColor="#13161B"
      :gap="2"
      :focusable="false"
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
