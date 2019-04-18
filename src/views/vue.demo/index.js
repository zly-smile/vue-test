const Emit = () => import('./src/emit.vue')
const Model = () => import('./src/model.vue')
const Attrs = () => import('./src/attrs.vue')

export default function (router) {
  router.push({
    path: '/vue/emit',
    name: 'Emit',
    component: Emit,
    meta: {
      title: 'emit的用法',
      isMenu: true
    }
  })

  router.push({
    path: '/vue/model',
    name: 'Model',
    component: Model,
    meta: {
      title: '自定义组件的v-model'
    }
  })

  router.push({
    path: '/vue/attrs',
    name: 'Attrs',
    component: Attrs,
    meta: {
      title: '$attrs的使用'
    }
  })
}
