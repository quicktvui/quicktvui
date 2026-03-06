<template>
  <!-- 纯文字样式 -->
  <qt-view
    type="1"
    :style="{
      width: 490,
      height: 100,
      backgroundColor: 'rgba(255,255,255,0.1)',
      focusBackgroundColor: '#FFFFFF',
      borderRadius: 8,
      focusBorderRadius: 8,
    }"
    class="flex justify-center items-center"
    :focusable="true"
    eventFocus
    eventClick
  >
    <div
      showIf="${isPlaying==true}"
      class="number-item flex flex-row justify-center items-center"
      duplicateParentState
    >
      <play-mark
        name="playMark"
        class="detail-series-item-mark"
        markColor="#13161B"
        :gap="2"
        :focusable="false"
      />
      <qt-text
        text="${title}"
        fontSize="36"
        :style="{
          height: 40,
          color: '#13161B',
          marginLeft: 10,
          width: 400,
        }"
        :maxLines="1"
        :lines="1"
        :ellipsizeMode="4"
        duplicateParentState
        typeface="bold"
        gravity="center"
      />
    </div>
    <div
      showIf="${isPlaying==false}"
      class="number-item flex flex-row justify-center items-center"
      duplicateParentState
    >
      <qt-text
        text="${title}"
        fontSize="36"
        :style="{
          height: 40,
          color: 'rgba(255,255,255,0.5)',
          focusColor: '#13161B',
          width: 400,
        }"
        :maxLines="1"
        :lines="1"
        :ellipsizeMode="4"
        duplicateParentState
        typeface="bold"
        gravity="center"
      />
    </div>
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
.detail-series-item-mark {
  width: 24px;
  height: 24px;
  background-color: transparent;
}
.number-item {
  position: absolute;
  width: 490px;
  height: 100px;
}
</style>
