<template>
  <!-- 左图右文样式 -->
  <qt-view
    type="1"
    :style="{
      width: 560,
      height: 160,
      backgroundColor: 'rgba(255,255,255,0.1)',
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
    <qt-image
      :style="{
        width: 268,
        height: 160,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      }"
      src="${imageUrl}"
    />

    <!-- 右侧文字 -->
    <qt-view
      class="flex flex-col justify-center items-center"
      :style="{ width: 292, height: 160 }"
      duplicateParentState
    >
      <qt-text
        text="${title}"
        fontSize="28"
        :style="{
          width: 252,
          height: 108,
          color: 'rgba(255,255,255,0.5)',
          focusColor: '#13161B',
        }"
        gravity="centerVertical"
        :maxLines="3"
        :ellipsizeMode="2"
        duplicateParentState
        typeface="bold"
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
          bottom: 12,
        }"
        markColor="#13161B"
        :gap="2"
        :focusable="false"
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
