<template>
  <qt-view
    :style="{
      width: 160,
      height: 80,
      backgroundColor: 'rgba(255,255,255,0.2)',
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
        text="${text}"
        fontSize="36"
        :style="{
          height: 40,
          color: '#13161B',
          marginLeft: 10,
        }"
        autoWidth
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
        text="${text}"
        fontSize="36"
        :style="{
          height: 40,
          color: 'rgba(255,255,255,0.5)',
          focusColor: '#13161B',
        }"
        autoWidth
        duplicateParentState
        typeface="bold"
        gravity="center"
      />
    </div>
  </qt-view>
</template>
<script setup lang="ts"></script>
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
  width: 160px;
  height: 80px;
}
</style>
