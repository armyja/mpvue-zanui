<template>
  <view class="container">

    <view class="doc-title zan-hairline--bottom">TOPTIPS</view>

    <view class="zan-btns" style="margin-top: 30vh;">
      <button class="zan-btn" @click="showTopTips">
        显示toptips
      </button>
    </view>
    <toptips />
  </view>


</template>

<script>
  import { getComponentByTag } from '../../utils/helper'
  import ZanTopTips from '../../components/zan/toptips'
  export default {
    components: {
      toptips: ZanTopTips
    },
    data () {
      return {
        zanTopTips: {}
      }
    },
    methods: {
      showTopTips () {
        getComponentByTag(this, 'toptips').showZanTopTips('toptips的内容')
      }
    }
  }
</script>
<style  scoped >

</style>
