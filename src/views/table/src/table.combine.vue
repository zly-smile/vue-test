<template>
  <el-table
  :data="columns"
  size="mini"
  border
  :span-method="objectSpanMethod">
    <el-table-column
      prop="cost_item"
      label="费用项"
      min-width="15%">
    </el-table-column>
    <el-table-column
      prop="fee"
      label="金额"
      min-width="15%">
    </el-table-column>
    <el-table-column
      prop="preferential_item"
      label="优惠项"
      :show-overflow-tooltip="true"
      min-width="25%">
    </el-table-column>
    <el-table-column
      prop="preferential_fee"
      label="优惠金额"
      min-width="15%">
    </el-table-column>
    <el-table-column
      prop="receivable_fee"
      label="应收金额"
      min-width="15%">
    </el-table-column>
  </el-table>
</template>
<script>
import WaterMark from '@/components/watermark/index.js'

let renderCount = 0 // 渲染次数,放在这里使其不直接关联组件，避免诱发无限循环

export default {
  data () {
    return {
      columns: [
        {
          cost_item: '车款',
          fee: '100000',
          preferential_item: 'Z18070600001争议减免',
          preferential_fee: 2000,
          receivable_fee: 98000
        },
        {
          cost_item: '服务费',
          fee: '4000',
          preferential_item: '1、立减活动：10月服务费立减活动',
          preferential_fee: '1500',
          receivable_fee: '2300'
        },
        {
          cost_item: '服务费',
          fee: '4000',
          preferential_item: '2、优惠券：10月新签约车商200优惠券',
          preferential_fee: '200',
          receivable_fee: '0'
        },
        {
          cost_item: '应收合计（元）',
          fee: '',
          preferential_item: '',
          preferential_fee: '32',
          receivable_fee: '20'
        }
      ],
      columnLength: 4,
      column_row_offset: { // 相应字段的值进行行合并
        cost_item: [1, 2, 1],
        fee: [1, 2, 1],
        preferential_item: [1, 1, 1, 1],
        preferential_fee: [1, 1, 1, 1],
        receivable_fee: [1, 2, 1]
      },
      now_col_row_num: {},
      now_col_offset: {}
    }
  },
  mounted () {
    new WaterMark().init({text: '安全水印'})
  },
  methods: {
    // 在每一行数据渲染的时候都会执行
    objectSpanMethod({ column, row, rowIndex, columnIndex }) { // eslint-disable-line
      let cellCount = this.columnLength * 5
      if (renderCount === cellCount) { // 改变窗口大小时会调用该方法，故调用完之后重置初始值
        renderCount = 0
        this.now_col_row_num = {}
        this.now_col_offset = {}
      } else {
        renderCount++
        if (rowIndex === this.columnLength - 1) {
          if (columnIndex === 0) {
            return [1, 4]
          } else if (columnIndex === 1 || columnIndex === 2 || columnIndex === 3) {
            return [0, 0]
          }
        }
        if (!this.now_col_row_num[column.property]) {
          this.now_col_row_num[column.property] = Object.assign([], this.column_row_offset[column.property])
          let a = this.now_col_row_num[column.property].shift()
          this.now_col_offset[column.property] = a
          return {
            rowspan: a,
            colspan: 1
          }
        } else if (rowIndex >= this.now_col_offset[column.property]) {
          let a = this.now_col_row_num[column.property].shift()
          this.now_col_offset[column.property] += a
          return {
            rowspan: a,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
    // objectSpanMethod ({ column, rowIndex, columnIndex }) {
    //   if (rowIndex === 3) {
    //     if (columnIndex === 0) {
    //       return [1, 4]
    //     } else if (columnIndex === 1 || columnIndex === 2 || columnIndex === 3) {
    //       return [0, 0]
    //     }
    //   }
    //   if (!this.now_col_row_num[column.property]) {
    //     this.now_col_row_num[column.property] = Object.assign([], this.column_row_offset[column.property])
    //     let a = this.now_col_row_num[column.property].shift()
    //     this.now_col_offset[column.property] = a
    //     return {
    //       rowspan: a, // 合并的行数
    //       colspan: 1 // 合并的列数
    //     }
    //   } else if (rowIndex >= this.now_col_offset[column.property]) {
    //     let a = this.now_col_row_num[column.property].shift()
    //     this.now_col_offset[column.property] += a
    //     return {
    //       rowspan: a,
    //       colspan: 1
    //     }
    //   } else {
    //     return {
    //       rowspan: 0, // 设置0则直接不显示
    //       colspan: 0
    //     }
    //   }
    // }
  }
}
</script>
