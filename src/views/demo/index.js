
const Card = () => import('./src/card.vue')
const Map = () => import('./src/map.vue')

export default function (router) {
  router.push({
    path: '/demo/card',
    name: 'Card',
    component: Card
  })

  router.push({
    path: '/demo/map',
    name: 'Map',
    component: Map
  })
}
