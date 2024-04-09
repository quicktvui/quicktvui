<template>
  <span class="title-text-view">
    {{ text }}
  </span>
</template>
<script>

export default {
  name: 's-title-view'
}
</script>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  configType: Number,
  reload: Function
})
</script>

<style scoped>

.title-text-view {
  height: 80px;
  font-size: 40px;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
}

</style>
