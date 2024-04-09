import TextView from "./index.vue";

TextView.install = (Vue) => {
  Vue.component(TextView.name, TextView)
}

export default TextView;
