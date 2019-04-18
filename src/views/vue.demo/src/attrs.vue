<template>
  <div>
    <child1 :p-child1="child1" :p-child2="child2" @test1="onTest1" @test2="onTest2"></child1>
  </div>
</template>
<script>
import Child1 from './component/child1.vue'
export default {
  data () {
    return {
      child1: 'this is child1',
      child2: 'this is child2'
    }
  },
  methods: {
    onTest1 () {
      console.log('test1 is running')
    },
    onTest2 () {
      console.log('test2 is running')
    }
  },
  components: {
    Child1
  }
}
</script>
