<template>
  <div class="ly-lazyload-demo">
    <div  v-for="item in 60" :key="item">
    <ly-lazyload>
      <img :src="imgList[random(0, 5)]"/>
    </ly-lazyload>
    </div>
  </div>
</template>
<script>
import img1 from '@/assets/flower.jpg'
import img2 from '@/assets/lanhua.jpg'
import img3 from '@/assets/lemon.jpg'
export default {
  data () {
    return {
      imgList: [img1, img2, img3]
    }
  },
  methods: {
    random (start, end) {
      return Math.floor(Math.random() * (start - end) + end)
    }
  }
}
</script>
<style lang="scss">
@import 'scss/mixins/mixin';

@include b(lazyload-demo) {
  img: {
    width: 200px;
    height: 200px;
    display: block;
  }
}
</style>
