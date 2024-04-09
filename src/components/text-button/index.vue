<template>
  <div class="button-root-css"
       ref="text_button"
       :clipChildren="false"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @click="onClick"
       @focus="onFocus">
    <p duplicateParentState class="text-root-css">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 's-text-button'
}
</script>

<script setup>
const emit = defineEmits(["onButtonClicked", "onButtonFocused"])
const props = defineProps({
  index: {
    type: Number,
    default: -1
  },
  text: {
    type: String,
    default: ''
  },
})

const onFocus = (e) => {
  let focused = e.isFocused;
  emit("onButtonFocused", focused)
}

const onClick = (e) => {
  emit("onButtonClicked")
}


</script>

<style scoped>

.button-root-css {
  width: 250px;
  height: 80px;
  margin: 20px;
  border-style: solid;
  border-color: #40b883;
  border-width: 2px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  focus-background-color: #40b883;
}

.text-root-css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}

</style>
