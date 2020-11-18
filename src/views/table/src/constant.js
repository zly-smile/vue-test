export const COLUMNS = function () {
  return [
    {
      prop: 'id',
      label: '主键',
      align: 'center',
      'min-width': '10%'
    },
    {
      prop: 'pool_name',
      label: '隐私号池',
      align: 'center',
      'min-width': '15%'
    },
    {
      prop: 'property',
      label: '业务类型',
      align: 'center',
      'min-width': '15%'
    },
    {
      prop: 'default_bind_time',
      label: '默认绑定时长/s',
      align: 'center',
      'min-width': '10%'
    },
    {
      prop: 'update_time',
      label: '更新时间',
      align: 'center',
      'min-width': '17%'
    },
    {
      label: '操作',
      prop: 'action',
      'min-width': '16%',
      align: 'center',
      render (h, scope, methods) { // eslint-disable-line
        const arr = [
          { type: 'edit', text: '修改' },
          { type: 'query', text: '供应商权重' }
        ]

        return (
          <div>
            {
              arr.map(x => {
                return <el-button type="text" size="mini">{ x.text }</el-button>
              })
            }
          </div>
        )
      }
    }
  ]
}
