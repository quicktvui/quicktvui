import NavButton from "./index.vue";

NavButton.install = (Vue) => {
  Vue.component(NavButton.name, NavButton)
}

export default NavButton;
