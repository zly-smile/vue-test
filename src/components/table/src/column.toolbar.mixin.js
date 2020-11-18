let toolbarUUID = 0
export default {
  data () {
    return {
      // 可编辑 组件的value 这里 存储的是 显示字段
      currentVisibleColumnToolbarValue: []
    }
  },
  props: {
    // 工具条 key
    toolBarKey: {
      type: String,
      default: 'prop'
    }
  },
  methods: {
    sync (prop, value) {
      this[prop] = value
    },
    /**
     *
     * 渲染工具列 只有在有列情况下 渲染
     * @param {*} h
     */
    renderColumnToolbar (h, item = {}) {
      const self = this
      // 这个type 是我们自己定义的  el 并没有需要移除
      delete item.type
      const props = {
        fixed: item.fixed || 'right',
        align: item.align || 'center',
        width: item.width || 46
      }
      return (
        <el-table-column key={item.key} {...this.renderColumnProps(props)} scopedSlots={
          {
            header: scope => { // eslint-disable-line
              return <el-button
                onClick={self.onColumnToolbar.bind(self)}
                size="mini"
                class="ly-table__column-toolbar"
                type="text"
                icon="el-icon-setting">
              </el-button>
            }
          }
        }>
        </el-table-column>
      )
    },
    onColumnToolbar () {
      const props = {
        key: this.toolBarKey,
        label: 'label',
        disabled: 'disabledToolbar'
      }
      // 可操作列
      const editColumns = this.columns.filter(item => item[this.toolBarKey])
      this.currentVisibleColumnToolbarValue = editColumns
        .filter(item => !item.hide)
        .map(item => item[this.toolBarKey])
      const $dialog = this.$rcDialog({
        title: '编辑显示字段',
        confirmButtonText: '保存设置',
        showCancelButton: false,
        width: '536px',
        rcClass: {
          'ly-table__c-t-dialog': true
        },
        render: (h) => {
          return h('el-transfer', {
            props: {
              value: this.currentVisibleColumnToolbarValue,
              titles: ['隐藏字段', '显示字段'],
              props,
              data: editColumns
            },
            on: {
              input: val => this.sync('currentVisibleColumnToolbarValue', val)
            }
          })
        },
        onOpen () {
          toolbarUUID += 1
        },
        onConfirm: () => {
          // TODO 运行效率最low 但是实现最简单，有时间在优化
          const visibleColumn = this.columns
            .map((item, index) => {
              const key = item[this.toolBarKey]
              // 默认的一些配置 不允许隐藏 toolBarKey 为 undefined 或者包含 type 以不允许隐藏
              const isVisable = key === undefined ||
                item.type !== undefined ||
                this.currentVisibleColumnToolbarValue.indexOf(item[this.toolBarKey]) !== -1
              item.hide = !isVisable
              // 不使用 Vue 的优化渲染 每次让列的认为是最新的列 https://github.com/ElemeFE/element/issues/7312
              item.key = this.getColumnRenderKey(`t_${toolbarUUID}_${index}`)
              return item
            })
          this.currntColumns = visibleColumn.slice()
          this.$nextTick(() => {
            $dialog.hide()
          })
        }
      }).show()
    }
  }
}
