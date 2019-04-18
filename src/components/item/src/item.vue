<template>
  <div class="ly-item" :style="itemStyle">
    <div>
      <label class="ly-item__label" :style="labelStyle">{{label}}:</label>
    </div>
    <div class="ly-item__content" :class="[isOverflow ? 'ly-item__content--overflow' : '' ]">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ly-item',
  props: {
    label: {
      type: String
    },
    labelWidth: {
      type: Number
    },
    isOverflow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyle () {
      return {
        width: `${this.labelWidth || this.$parent.labelWidth}px`,
        'text-align': `${this.$parent.labelPosition}`
      }
    },
    itemStyle () {
      let col = this.$parent.col
      let itemWidth = 100 / col
      return {
        width: `${itemWidth}%`
      }
    }
  }
}
</script>
<style lang="scss">
@import 'scss/mixins/mixin';

@include b(item) {
  min-height: 30px;
  line-height: 30px;
  float: left;
  display: flex;

  @include e(label) {
    margin-right: 8px;
    color: #222;
    font-size: 14px;

    @include text-overflow-1;
  }

  @include e(content) {
    float: left;
    color: rgba(20, 3, 3, 0.65);
    text-align: left;
    font-size: 14px;
    flex: 1;

    @include m(overflow) {
      @include text-overflow-1;
    }

    .el-button {
      padding: 0;
      font-size: 14px;
    }

    div,
    span,
    a,
    label {
      font-size: inherit;
    }
  }
}
</style>
