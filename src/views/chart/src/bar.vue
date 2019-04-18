<template>
<div>
 <p>柱状图</p>
 <el-button @click="onCount">点击</el-button>
 <div id="bar"></div>
</div>
</template>
<script>

export default {
  methods: {
    onCount () {
      console.log(23456)
    }
  }
}
</script>
