<template>
  <!-- 左图右文样式 -->
  <qt-view
    type="1"
    :style="{
      width: 400,
      height: 120,
      backgroundColor: 'rgba(255,255,255,0.06)',
      focusBackgroundColor: '#FFFFFF',
      borderRadius: 8,
      focusBorderRadius: 8,
    }"
    class="flex flex-row items-center"
    :focusable="true"
    eventFocus
    eventClick
  >
    <!-- 左侧图片容器 -->
    <qt-view
      class="relative"
      :style="{
        width: 160,
        height: 90,
        marginLeft: 12,
      }"
    >
      <qt-image
        :style="{
          width: 160,
          height: 90,
          borderRadius: 4,
          backgroundColor: 'rgba(255,255,255,0.06)',
        }"
        src="${imageUrl}"
      />
      <!-- 播放标识 -->
      <play-mark
        name="playMark"
        showIf="${isPlaying}"
        :style="{
          width: 26,
          height: 30,
          position: 'absolute',
          left: 67,
          top: 30,
        }"
        markColor="#FFFFFF"
        :gap="2"
        :focusable="false"
      />
    </qt-view>

    <!-- 右侧文字 -->
    <qt-view
      class="flex flex-col justify-center"
      :style="{ marginLeft: 12, marginRight: 8 }"
      duplicateParentState
    >
      <qt-text
        text="${title}"
        fontSize="28"
        :style="{
          height: 32,
          color: 'white',
          focusColor: '#13161B',
        }"
        autoWidth
        duplicateParentState
        typeface="bold"
        maxLines="1"
      />
      <qt-text
        text="${subtitle}"
        fontSize="24"
        :style="{
          height: 28,
          color: 'rgba(255,255,255,0.7)',
          focusColor: '#13161B',
        }"
        autoWidth
        duplicateParentState
        maxLines="1"
      />
    </qt-view>
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
