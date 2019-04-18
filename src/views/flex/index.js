const Dice = () => import('./src/dice.vue')
const SpaceEvenly = () => import('./src/space.evenly')
const Middle = () => import('./src/middle.vue')

export default function (router) {
  router.push({
    path: '/flex/dice',
    name: 'Dice',
    component: Dice,
    meta: {
      title: '骰子',
      isMenu: true
    }
  })

  router.push({
    path: '/flex/spaceEvenly',
    name: 'SpaceEvenly',
    component: SpaceEvenly
  })

  router.push({
    path: '/flex/middle',
    name: 'Middle',
    component: Middle
  })
}
