<template>
  <div class="rc-container-error">
    <div class="content">
      <div class="img-block">
        <div class="img" :style="switchInfo.url"></div>
      </div>
      <div class="text-content">
        <h1>{{pageStatus}}</h1>
        <h3>{{switchInfo.status}}</h3>
        <a href="/"><el-button type="primary">返回首页</el-button></a>
      </div>
    </div>
    <el-footer class="footer">
      Copyright&copy;2017 人人车技术部出品
    </el-footer>
  </div>
</template>
<script>
export default {
  name: 'rrc-error',
  props: {
    pageStatus: {
      type: Number
    }
  },
  computed: {
    switchInfo () {
      const state = {
        500: {
          status: '抱歉，服务器出错了',
          url: `background-image: url('https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg');`
        },
        404: {
          status: '抱歉，您访问的页面不存在',
          url: `background-image: url('https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg');`
        },
        403: {
          status: '抱歉，您无权访问该页面',
          url: `background-image: url('https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg');`
        }
      }
      return state[this.pageStatus]
    }
  }
}
</script>
<style lang="scss">
@import "scss/variables";

.rc-container-error {
  font-family: $font-family-base;
  background-color: $bg-color;
  height: 100%;

  .content {
    min-height: calc(100% - 60px);
    display: flex; /* stylelint-disable-line no-missing-end-of-source-newline */
    align-items: center;

    .img-block {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      width: 50%;
      padding-right: 100px;
      zoom: 1;

      .img {
        height: 360px;
        width: 100%;
        max-width: 430px;
        float: right;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
      }
    }

    .text-content {
      -webkit-box-flex: 1;
      -ms-box-flex: 1;
      flex: auto;

      h1 {
        color: $font-color;
        font-size: 72px;
        font-weight: 600;
        line-height: 72px;
      }

      h3 {
        color: #9c9c9c;
        font-size: 20px;
        line-height: 40px;
      }
    }
  }

  .footer {
    color: #c3c3c3;
    font-size: 14px;
    text-align: center;
  }
}
</style>
