<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">ICON</div>

    <div class="zan-panel">
      <div v-for="icon in icons" :key="icon" class="icon-wrap">
        <div class="zan-icon" :class="'zan-icon-' + icon"  style="color: #ff4343;"></div>
        <div class="icon-classname">zan-icon-{{ icon }}</div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data () {
      return {
        icons: [
          'close',
          'location',
          'clock',
          'gold-coin',
          'chat',
          'exchange',
          'upgrade',
          'edit',
          'contact',
          'passed',
          'points',
          'delete',
          'records',
          'logistics',
          'check',
          'checked',
          'gift',
          'like-o',
          'like',
          'qr',
          'qr-invalid',
          'shop',
          'photograph',
          'add',
          'add2',
          'add-o',
          'photo',
          'cart',
          'arrow',
          'search',
          'clear',
          'success',
          'fail',
          'wechat',
          'alipay',
          'password-view',
          'wap-nav',
          'password-not-view',
          'wap-home',
          'ecard-pay',
          'balance-pay',
          'peer-pay',
          'credit-pay',
          'debit-pay',
          'other-pay',
          'shopping-cart',
          'browsing-history',
          'goods-collect',
          'shop-collect',
          'receive-gift',
          'send-gift',
          'setting',
          'coupon',
          'free-postage',
          'discount',
          'birthday-privilege',
          'member-day-privilege',
          'balance-details',
          'cash-back-record',
          'points-mall',
          'exchange-record',
          'pending-payment',
          'pending-orders',
          'pending-deliver',
          'pending-evaluate',
          'cash-on-deliver',
          'gift-card-pay',
          'underway',
          'point-gift',
          'after-sale',
          'edit-data',
          'question',
          'description',
          'card',
          'gift-card',
          'completed',
          'value-card',
          'certificate',
          'tosend',
          'sign',
          'home',
          'phone',
          'play',
          'pause',
          'stop',
          'hot',
          'new',
          'new-arrival',
          'hot-sale'
        ]
      }
    },
    methods: {
    }
  }
</script>
<style  scoped>
  .icon-wrap {
    width: 33.33333%;
    height: 100px;
    float: left;
    text-align: center;
  }
  .icon-classname {
    color: #999;
    font-size: 10px;
  }
  .zan-icon {
    font-size: 24px;
    margin: 20px;
  }
</style>
