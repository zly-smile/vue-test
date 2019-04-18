<template>
  <div class="ly-middle">
    <div class="ly-middle__first">
      <div class="ly-middle__first--float">
        <p>浮动元素的上下左右居中</p>
      </div>
    </div>
    <div class="ly-middle__second">
      <div class="ly-middle__second--absolute">
        <p>绝对定位的左右居中</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import 'scss/mixins/mixin.scss';

@include b(middle) {
  display: flex;

  @include e(first) {
    border: 1px solid blue;
    width: 400px;
    height: 400px;

    @include m(float) {

    border: 1px solid red;
    float: left;
    position: absolute;
    width: 200px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin: -50px 0 0 -100px;
    }
  }

  @include e(second) {
    border: 1px solid blue;
    width: 400px;
    height: 400px;

    @include m(absolute) {
    border: 1px solid black;
    position: absolute;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    left: 0;
    right: 0;
    }
  }
}
</style>
