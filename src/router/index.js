import Vue from 'vue'
import Router from 'vue-router'
import App from '@/views/App.vue'
import AuthRouter from './auth.router'
import demoRouter from '@/views/demo'
import TableRouter from '@/views/table'
import ChartRouter from '@/views/chart'
import FlexRouter from '@/views/flex'
import VueDemoRouter from '@/views/vue.demo'
import LazyloadRouter from '@/views/lazyload'

Vue.use(Router)

let routes = []

let rootRouter = {
  path: '/',
  component: App,
  children: []
}

// 重定向路由
let redirectRoute = {
  path: '*',
  redirect: '/'
}

demoRouter(rootRouter.children)
TableRouter(rootRouter.children)
ChartRouter(rootRouter.children)
FlexRouter(rootRouter.children)
VueDemoRouter(rootRouter.children)
LazyloadRouter(rootRouter.children)

let authRouter = new AuthRouter()

let mode = 'history'
export default new Router({
  mode: mode,
  routes: authRouter.init(routes.concat([rootRouter, redirectRoute]))
})
