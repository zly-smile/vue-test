<template>
  <div>
    <p>in child1:</p>
    <p>props: {{pChild1}}</p>
    <p>$attrs: {{$attrs}}</p>
    <!-- $attrs属性可以获取父组件传递下来的props，除了该子组件child1本身定义的props -->
    <!-- $listeners属性可以在调用child2组件时，能触发child2组件定义的事件 -->
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>
<script>
import Child2 from './child2.vue'
export default {
  components: {
    Child2
  },
  inheritAttrs: false,
  props: {
    pChild1: [String, Number]
  },
  mounted () {
    this.$emit('test1')
  }
}
</script>
