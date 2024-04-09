import text from "./text"
import nav_button from "./nav-button"
import title from "./title"
import text_button from "./text-button"

const components = [
  text_button,
  nav_button,
  title,
  text,
]

export const install = (Vue) => {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
