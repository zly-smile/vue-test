export default {
  data () {
    return {
      lyTableSelectionList: [],
      // onTable定义了ly-table组件的on-table属性。
      // 如果在引用该文件的组件内希望使用onTable，如下使用 <ly-table :on-table="$lyTableOn"></ly-table>即可。
      lyTableOn: {
        'selection-change': this.$lyTableSelectionChange.bind(this)
      }
    }
  },
  computed: {
    // 给用户使用
    $lyTableSelections: {
      set (selections) {
        this.lyTableSelectionList = selections
      },
      get () {
        return this.lyTableSelectionList
      }
    },
    // 不选中行时 按钮禁用
    tableToolButtonDisable () {
      return this.$lyTableSelections.length <= 0
    },
    // 选中了多少条
    selectionsLength () {
      return this.$lyTableSelections.length
    }
  },
  methods: {
    // 在引用该文件的组件内定义该方法，即可覆盖本函数。
    $lyTableSelectionChange (selections) {
      this.$lyTableSelections = selections
    },
    // 搜索
    onSearch (id = 'table') {
      this.$refs[id].onSearch()
    },
    onReload (id = 'table') {
      this.load(this.$refs[id])
    }
  }
}
