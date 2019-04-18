import Lazyload from './src/main.vue'

Lazyload.install = function (Vue) {
  Vue.component(Lazyload.name, Lazyload)
}

export default Lazyload
