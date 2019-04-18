<template>
<el-card>
  <ly-card title="基本信息">
    <ly-list :col='2' :label-width="120">
      <ly-item label="订单回访编号" >958449</ly-item>
      <ly-item label="订单回访状态">待处理</ly-item>
      <ly-item label="订单回访类型">未成交回访</ly-item>
      <ly-item label="订单回访创建时间">2018-01-22 13:22:33</ly-item>
    </ly-list>
  </ly-card>
  <ly-card title="订单信息">
    <ly-list :col=3>
      <!-- <div style="color:red;">图片的位置</div> -->
      <ly-item label="订单号">8477484893</ly-item>
      <ly-item label="创建时间">2018-01-22 10:22:33</ly-item>
      <ly-item label="订单状态">未见面跟进</ly-item>
      <ly-item label="带看销售">李丽</ly-item>
      <ly-item label="电话销售">苏和</ly-item>
      <ly-item label="评估师">张三</ly-item>
      <ly-item label="看车时间">2018-01-22 12:30</ly-item>
      <ly-item label="看车地点">北京—西城区—x x x x路</ly-item>
      <ly-item label="CC备注">双约派单</ly-item>
      <ly-item label="车主">王玥</ly-item>
      <ly-item label="车商">刘大钧</ly-item>
      <ly-item label="关联工单">关联工单</ly-item>
    </ly-list>
  </ly-card>
  <ly-card title="一列布局">
    <ly-list :col=1>
      <!-- <div style="color:red;">图片的位置</div> -->
      <ly-item label="车商姓名" :label-width="60">Lily(label为60)</ly-item>
      <ly-item label="车商手机号">133662138888</ly-item>
      <ly-item label="车商城市">北京市</ly-item>
      <ly-item label="备注">暂无</ly-item>
      <ly-item label="车商姓名">Lily</ly-item>
      <ly-item label="车商手机号">133662138888</ly-item>
      <ly-item label="车商城市">北京市</ly-item>
    </ly-list>
  </ly-card>
</el-card>
</template>
<script>
export default {
  data () {
    return {
      number: 20000012
    }
  }
}
</script>
