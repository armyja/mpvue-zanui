<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  @import "./assets/style/zanui.wxss";
  .container::before {
    position: fixed;
    top: 0;
    left: 0;
    content: ' ';
    width: 100%;
    height: 1rpx;
    background-color: #e2e2e2;
    z-index: 5;
  }
  .doc-title {
    position: relative;
    padding: 15px 0;
    margin: 10px 15px;
    line-height: 25px;
    font-size: 25px;
    color: #666;
  }
  .doc-description {
    margin: 14px 0;
    padding: 0 15px;
    font-size: 14px;
    line-height: 20px;
    color: #666;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
/*.container {*/
  /*height: 100%;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
  /*padding: 200rpx 0;*/
  /*box-sizing: border-box;*/
/*}*/
/*!* this rule will be remove *!*/
/** {*/
  /*transition: width 2s;*/
  /*-moz-transition: width 2s;*/
  /*-webkit-transition: width 2s;*/
  /*-o-transition: width 2s;*/
/*}*/
</style>
