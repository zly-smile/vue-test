<template>
  <ly-table
    ref='table'
    :attr="{ size: 'small' }"
    :page='{ sizes: [10, 20, 50, 100] }'
    :columns='COLUMNS'
    bg-header
    @load='load' />
</template>
<script>
import { COLUMNS } from './constant'
import { getPoolList } from '@/services/table.service'

export default {
  data () {
    return {
      COLUMNS: COLUMNS.call(this)
    }
  },
  methods: {
    async load (table) {
      let params = {
        page: table.currentPage,
        limit: table.size
      }
      const { data, total } = await getPoolList(params)
      table.total = total
      table.list = data
    }
  }
}
</script>
