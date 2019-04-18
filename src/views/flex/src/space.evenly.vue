<template>
<div>
  <h1>space-evenly间隙之间空白相等</h1>
  <div class="ly-space-evenly">
    <div class="face">
      <span class="item"></span>
    </div>
    <div class="face">
      <span class="item"></span>
    </div>
    <div class="face">
      <span class="item"></span>
    </div>
    <div class="face">
      <span class="item"></span>
    </div>
  </div>
</div>

</template>
<style lang="scss">
@import 'scss/mixins/mixin';

@include b(space-evenly) {
  background: linear-gradient(top, #222, #333);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}

.item {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}

[class$='face'] {
  width: 104px;
  height: 104px;
  margin: 16px;
  padding: 4px;
  border-radius: 10%;
  background-color: #e7e7e7;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7;
}
</style>
