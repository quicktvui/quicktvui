<template>
  <span class="text-view-css">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 's-text-view'
}
</script>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
})

</script>

<style scoped>

.text-view-css {
  font-size: 30px;
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
