<template>
  <el-card>
    <h2>emit的用法 </h2>
    <ly-checkbox v-model="checked"></ly-checkbox>
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
