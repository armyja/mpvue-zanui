<template>
  <view class="container">

    <view class="doc-title zan-hairline--bottom">TOPTIPS</view>

    <view class="zan-btns" style="margin-top: 30vh;">
      <button class="zan-btn" @click="showTopTips">
        显示toptips
      </button>
    </view>
    <ZanTopTips v-bind="zanTopTips"/>
  </view>


</template>

<script>
  import ZanTopTips from '../../components/zan/toptips'
  export default {
    components: {
      ZanTopTips
    },
    data () {
      return {
        zanTopTips: {}
      }
    },
    methods: {
      ...ZanTopTips.methods,
      showTopTips () {
        this.showZanTopTips('toptips的内容')
      }
    }
  }
</script>
<style  scoped >

</style>
