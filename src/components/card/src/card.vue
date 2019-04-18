<template>
  <div class="ly-card">
    <div class="ly-card__title" v-if="isShowTitle">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="ly-card__content">
      <slot></slot>
    </div>
    <div class="ly-card__line"></div>
  </div>
</template>
<script>
export default {
  name: 'ly-card',
  props: {
    title: {
      type: String
    }
  },
  computed: {
    isShowTitle () {
      if ((this.title && this.title.length > 0) || this.$slots.title) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss" >
@import "scss/mixins/mixin";

$card-radius: 0;
@include b(card) {
  background-color: #fff;
  border-radius: $card-radius;
  padding: 8px 4px;
  zoom: 1;

  @include e(title) {
    text-align: left;
    font-size: 16px;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
  }

  @include e(content) {
    padding: 4px 0;
  }

  @include e(line) {
    display: block;
    height: 3px;
    width: 100%;
    margin-top: 12px;
    background: #e8e8e8;
    color: rgba(0, 0, 0, 0.65);
  }

  &[no-line] {
    .rc-card__line {
      display: none;
    }
  }

  &[padding] {
    padding: 0 24px;
  }
}
</style>
