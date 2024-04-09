<template>
  <div class="nav-button-root-css"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @click="onClick"
       @focus="onFocus">
    <p duplicateParentState class="test_text_view_css">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 's-nav-button'
}
</script>

<script setup>

import {useESRouter} from "@extscreen/es3-router";

const router = useESRouter();

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
})

const onFocus = (e) => {
  let focused = e.isFocused;
}

const onClick = (e) => {
  console.log('--------路由跳转----------->>>>>' + props.url)
  router.push({
    name: props.url,
    params: {}
  })
}
</script>

<style scoped>

.nav-button-root-css {
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

.test_text_view_css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}

</style>
