<template>
  <el-card>
    <h2>自定义组件的v-model</h2>
    <ly-checkbox v-model="checked"></ly-checkbox>
    <!-- 等价于 -->
    <ly-checkbox :checked="checked" @change="val => { checked = val}"></ly-checkbox>
  </el-card>
</template>
<script>
import LyCheckbox from './component/checkbox.vue'
export default {
  data () {
    return {
      checked: false
    }
  },
  components: {
    LyCheckbox
  }
}
</script>
