<template>
  <div class="ly-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ly-list',
  props: {
    col: {
      type: Number,
      default: 3
    },
    labelWidth: {
      type: Number,
      default: 80
    },
    labelPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style lang="scss">
@import 'scss/mixins/mixin';

@include b(list) {
  width: 100%;
  overflow: hidden;
}
</style>
