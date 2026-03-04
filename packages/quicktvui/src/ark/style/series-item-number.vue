<template>
  <qt-view
    :style="{
      width: 160,
      height: 80,
      backgroundColor: 'rgba(255,255,255,0.06)',
      focusBackgroundColor: '#FFFFFF',
      borderRadius: 8,
      focusBorderRadius: 8,
    }"
    class="flex justify-center items-center"
    :focusable="true"
    eventFocus
    eventClick
  >
    <qt-text
      text="${text}"
      fontSize="36"
      :style="{
        height: 40,
        color: 'white',
        focusColor: '#13161B',
      }"
      autoWidth
      duplicateParentState
      typeface="bold"
      gravity="center"
    />
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
</style>
