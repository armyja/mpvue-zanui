<template>
<div class="container">

  <div class="doc-title zan-hairline--bottom">BUTTON</div>

  <div class="zan-panel-title">普通按钮</div>
  <div class="zan-panel">
    <div class="zan-btns">
      <button class="zan-btn">取消订单</button>
      <button class="zan-btn zan-btn--primary">确认付款</button>
      <button class="zan-btn zan-btn--danger">确认付款</button>
      <button class="zan-btn zan-btn--warn">确认付款</button>
    </div>
  </div>

  <div class="zan-panel-title">大号按钮，没有边框线及圆角</div>
  <div class="zan-panel">
    <button class="zan-btn zan-btn--large zan-btn--primary">确认付款</button>
    <button class="zan-btn zan-btn--large zan-btn--warn">立即购买</button>
    <button class="zan-btn zan-btn--large zan-btn--danger">立即购买</button>
  </div>

  <div class="zan-panel-title">小号按钮</div>
  <div class="zan-panel" style="padding: 15px;">
    <button class="zan-btn zan-btn--small">取消订单</button>
    <button class="zan-btn zan-btn--small zan-btn--primary">确认付款</button>
  </div>

  <div class="zan-panel-title">迷你按钮</div>
  <div class="zan-panel" style="padding: 15px;">
    <button class="zan-btn zan-btn--mini zan-btn--plain">取消订单</button>
    <button class="zan-btn zan-btn--mini zan-btn--primary zan-btn--plain">确认付款</button>
    <button class="zan-btn zan-btn--mini zan-btn--warn zan-btn--plain">确认付款</button>
    <button class="zan-btn zan-btn--mini zan-btn--danger zan-btn--plain">确认付款</button>
  </div>

  <div class="zan-panel-title">Loading</div>
  <div class="zan-panel">
    <div class="zan-btns">
      <button class="zan-btn zan-btn--loading">取消订单</button>
      <button class="zan-btn zan-btn--loading zan-btn--primary">确认付款</button>
      <button class="zan-btn zan-btn--loading zan-btn--danger">确认付款</button>
      <button class="zan-btn zan-btn--loading zan-btn--warn">确认付款</button>
    </div>
  </div>

  <div class="zan-panel-title">Disabled</div>
  <div class="zan-panel">
    <div class="zan-btns">
      <button class="zan-btn zan-btn--disabled" disabled>取消订单</button>
      <button class="zan-btn zan-btn--disabled zan-btn--primary" disabled>确认付款</button>
      <button class="zan-btn zan-btn--disabled zan-btn--danger" disabled>确认付款</button>
      <button class="zan-btn zan-btn--disabled zan-btn--warn" disabled>确认付款</button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      data: '你好'
    }
  },
  components: {

  },
  methods: {
    tap () {
      this.data += '0'
    }
  },
  created () {
    console.log('created')
  }
}
</script>

<style >
.red {
    color: #F00;
}
</style>
