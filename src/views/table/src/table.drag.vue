<template>
  <div style="width:800px;">
    <el-table :data="tableData"
      max-height="420"
      border
      row-key="id"
      align="left">
     <el-table-column v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      :page-sizes="[10, 20, 100, 400]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
import {getList} from '@/services/table.service'

export default {
  data () {
    return {
      total: 0,
      currentPage: 1,
      pagesize: 10,
      col: [
        {
          prop: 'created_at',
          label: '下单日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'city',
          label: '城市'
        },
        {
          prop: 'state',
          label: '商品状态'
        },
        {
          prop: 'address',
          label: '送达地址'
        }
      ],
      dropCol: [
        {
          prop: 'created_at',
          label: '下单日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'city',
          label: '城市'
        },
        {
          prop: 'state',
          label: '商品状态'
        },
        {
          prop: 'address',
          label: '送达地址'
        }
      ],
      tableData: []
    }
  },
  mounted () {
    this.rowDrop()
    this.columnDrop()
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      let params = {
        page: this.currentPage,
        limit: this.pagesize
      }
      let response = await getList(params)
      const {total, data} = response.data
      this.total = total || 0
      this.tableData = data
    },
    // 行拖拽
    rowDrop () {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd ({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    // 列拖拽
    columnDrop () {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    },
    handleCurrentChange (cpage) {
      this.currentPage = cpage
      this.init()
    },
    handleSizeChange (psize) {
      this.pagesize = psize
    }
  }
}
</script>
<style scoped>
</style>
