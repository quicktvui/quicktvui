import title from "./index.vue";

title.install = (Vue) => {
  Vue.component(title.name, title)
}

export default title;
