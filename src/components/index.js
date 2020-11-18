import EleUI from './element'
import Item from './item'
import List from './list'
import Card from './card'
import BaiduMap from './baidu.map'
import Lazyload from './lazyload'
import Table from './table'

const components = [
  Item,
  List,
  Card,
  BaiduMap,
  Lazyload,
  Table
]

const ua = navigator.userAgent

const install = (Vue) => {
  if (install.installed) {
    return
  }

  Vue.use(EleUI)

  components.forEach(component => {
    Vue.use(component)
  })

  // 是不是谷歌浏览器
  Vue.prototype.$isChrome = /chrome\/([\d/.]+)/i.test(ua)
}

export default {
  install
}
