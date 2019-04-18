const bar = () => import('./src/bar.vue')

export default function (router) {
  router.push({
    path: '/chart/bar',
    name: 'bar',
    component: bar
  })
}
