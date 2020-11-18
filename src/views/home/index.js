const home = () => import('./src/index')

export default function (router) {
  router.push({
    path: '/',
    name: '首页',
    component: home
  })
}
