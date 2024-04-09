import TextButton from "./index.vue";

TextButton.install = (Vue) => {
  Vue.component(TextButton.name, TextButton)
}

export default TextButton;
