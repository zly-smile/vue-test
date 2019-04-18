const Lazyload = () => import('./src/main.vue')

export default function (router) {
  router.push({
    path: '/lazyload',
    name: 'Lazyload',
    component: Lazyload
  })
}
