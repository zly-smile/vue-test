<template>
  <transition name="fade">
    <div
      :style="{height: !isRender? '100px' : 'auto'}"
      class="ly-lazyload">
      <slot v-if="isRender"/>
    </div>
  </transition>
</template>
<script>
import { Loading } from 'element-ui'

export default {
  name: 'ly-lazyload',
  props: {
    offset: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      isRender: false, // 是否渲染组件
      loading: {}
    }
  },
  async mounted () {
    this.loading = Loading.service({
      target: this.$el,
      fullscreen: false
    })
    var aImg = document.querySelectorAll('img')
    var len = aImg.length
    var n = 0// 存储图片加载到的位置，避免每次都从第一张图片开始遍历
    window.onscroll = function () {
      var seeHeight = document.documentElement.clientHeight
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      for (var i = n; i < len; i++) {
        if (aImg[i].offsetTop < seeHeight + scrollTop) {
          if (aImg[i].getAttribute('src') === '') {
            aImg[i].src = aImg[i].getAttribute('guoyu-src')
          }
          n = i + 1

          console.log('n = ' + n)
        }
      }
    }
    this.isRender = true
    this.loading.close()
    // const inViewport = await import(/* webpackChunkName: "in-viewport" */'in-viewport')
    // inViewport.default(this.$el, { offset: this.offset }, () => {
    //   this.sync()
    // })
  },
  methods: {
    sync () {
      this.isRender = true
      this.loading.close()
      this.$emit('loaded')
    }
  }
}
</script>

<style lang="scss">
@import 'scss/mixins/mixin';

@include b(lazyload) {
  .el-loading-mask {
    background: transparent;
  }
}
</style>
