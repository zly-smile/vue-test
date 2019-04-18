const tableCombine = () => import('./src/table.combine.vue')
const tableDrag = () => import('./src/table.drag.vue')

export default function (router) {
  //  合并单元格
  router.push({
    path: '/table/combine',
    name: 'tableCombine',
    component: tableCombine,
    meta: {
      title: '表格合并单元格',
      isMenu: true
    }
  })

  //  表格拖曳
  router.push({
    path: '/table/drag',
    name: 'tableDrag',
    component: tableDrag,
    meta: {
      title: '表格行列拖曳',
      isMenu: true
    }
  })
}
