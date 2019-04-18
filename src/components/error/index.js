import Error from './src/errors.vue'

Error.install = function (Vue) {
  Vue.component(Error.name, Error)
}

export default Error
