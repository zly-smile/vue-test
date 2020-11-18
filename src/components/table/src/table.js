import ColumnToolbarMixin from './column.toolbar.mixin'
import { isFunction } from '@/utils'

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

function copy(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  if (isArray(obj)) {
    const newObj = []
    for (const value of obj) {
      newObj.push(copy(value))
    }
    return newObj
  }
  const newObj = {}
  for (const key in obj) {
    newObj[key] = copy(obj[key])
  }
  return newObj
}

let uuid = 0

const DEFAULT_PAGE = {
  enable: true,
  sizes: [10, 20, 50, 100, 150],
  size: 10,
  layout: 'total, sizes, prev, pager, next'
}

export default {
  name: 'LyTable',
  mixins: [ColumnToolbarMixin],
  data() {
    return {
      list: [],
      // 表格
      // 总数
      total: 0,
      // 当前选择
      currentPage: 1,
      size: 10,
      // 排序
      sort: {
        prop: '',
        order: ''
      },
      // 当前选中 列表
      selections: [],
      // 当前存储列 用于控制自定义显示列
      currntColumns: []
    }
  },
  props: {
    // 是否自动进行数据获取 有些情况下 不
    isReload: {
      type: Boolean,
      default: true
    },
    page: Object,
    // 表格列
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    // 事件监听
    on: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格属性
    attr: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格样式
    lyClass: {
      type: Object,
      default () {
        return {}
      }
    },
    // style
    lyStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格数据
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created() {
    this.currntColumns = this.formatColumn(this.columns)
    this.list = this.dataList
    this.size = this.localPage.size
    this.$watch('columns', val => {
      this.currntColumns = this.formatColumn(val)
    })
    if (this.isReload) {
      this.$emit('load', this)
    }
  },
  computed: {
    localPage() {
      const global = this.$RC_TABLE || {}
      return {
        ...DEFAULT_PAGE,
        ...global.page,
        ...this.page
      }
    }
  },
  watch: {
    dataList: {
      handler(val) {
        this.list = val || []
      },
      deep: true
    }
  },
  methods: {
    formatColumn(columns) {
      // 隐藏不需要显示的列
      // const visibleColumn = columns.filter(item => !item.hide)
      return columns
    },

    // 渲染分页
    renderPage (h) {
      return (
        <el-pagination
          class="rc-table__page"
          background
          current-page={this.currentPage}
          page-sizes={this.localPage.sizes}
          page-size={this.localPage.size}
          layout={this.localPage.layout}
          total={this.total}
          on-size-change={this.sizeChange}
          on-current-change={this.currentChange}>
        </el-pagination>
      )
    },
    // 刷新 没有表单时使用
    refresh() {
      this.currentPage = 1
      this.$emit('load', this)
    },
    // 更新 根据当前size page 表单数据更新
    update() {
      this.$emit('load', this)
    },
    // 使用js 数据渲染表格列
    renderColumns(h, columns) {
      const renders = this._l(columns, (item, index) => { // eslint-disable-line
        item.key = item.key || this.getColumnRenderKey(index)
        return !item.hide && this.renderColumn(h, item)
      })
      return renders
    },
    // 渲染单列
    renderColumn (h, item) {
      const props = copy(item)
      const render = item.render

      // 移除自定义属性
      delete props.hide
      delete props.disabledToolbar

      switch (true) {
        // 处理工具条
        case item.type === 'toolbar':
          return this.renderColumnToolbar(h, props)
        case isFunction(render):
          // 处理方法
          const methods = item.methods || {}
          delete props.render
          delete props.methods
          // @see https://stackoverflow.com/questions/43702591/how-to-use-template-scope-in-vue-jsx
          return (
            <el-table-column key={item.key} {...this.renderColumnProps(props)} scopedSlots={
              {
                default: scope => {
                  return render(h, scope, methods)
                }
              }
            }>
            </el-table-column>
          )
        default:
          return (
            <el-table-column key={item.key} {...this.renderColumnProps(props)}>
            </el-table-column>
          )
      }
    },
    // 重置列属性让 vue jsx 能识别
    renderColumnProps(props) {
      delete props.key
      return {
        props: {
          ...props
        }
      }
    },
    // 渲染时使用的自定义key
    getColumnRenderKey(index) {
      return `__ly-table-${uuid}_column__${index}`
    },
    // 页面改变
    currentChange(currentPage) {
      this.currentPage = currentPage
      this.$emit('load', this)
    },
    // 显示多少页改变
    sizeChange(size) {
      this.size = size
      this.currentPage = 1
      this.$emit('load', this)
    },
    // 排序change
    sortChange({
      prop,
      order
    }) {
      this.sort.prop = prop
      this.sort.order = order
      this.$emit('load', this)
    },
    // 暴露表格对象
    $table() {
      return this.$refs.table
    },
    onSearch() {
      this.currentPage = 1
      this.$emit('load', this)
    }
  },
  render(h) {
    const data = {
      props: {
        ...this.attr
      },
      on: {
        ...this.on
      },
      class: {
        ...this.lyClass
      },
      style: {
        ...this.lyStyle
      }
    }
    return (
      <div class="ly-table" padding>
        {
          this.$slots.toolbar && this.$slots.toolbar
        }
        <el-table ref="table" key={`'__ly-table-uu${uuid}'`} data={this.list} style="width: 100%;" size="small" on-sort-change={this.sortChange} {...data}>
          {
            this.currntColumns.length > 0 ? this.renderColumns(h, this.currntColumns) : this.$slots.default
          }
        </el-table>
        {
          this.localPage.enable && this.renderPage(h)
        }
      </div>
    )
    uuid++ // eslint-disable-line
  }
}
