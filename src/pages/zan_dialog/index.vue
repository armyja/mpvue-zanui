<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">DIALOG</div>

    <div class="zan-btns" style="margin-top: 30vh;">
      <button class="zan-btn" @click="toggleBaseDialog">基础 Dialog</button>
      <button class="zan-btn" @click="toggleWithoutTitleDialog">Dialog - 无标题</button>
      <button class="zan-btn" @click="toggleButtonDialog">Dialog - 自定义显示按钮</button>
      <button class="zan-btn" @click="toggleVerticalDialog">Dialog - 按钮纵向排布</button>
    </div>
    <ZanDialog v-bind="zanDialog"/>
  </div>
</template>
<script>
  import ZanDialog from '../../components/zan/dialog'
  export default {
    components: {
      ZanDialog
    },
    data () {
      return {
        zanDialog: {
          'name': '',
          'show': false,
          'title': '',
          'content': '',
          'buttons': [],
          'buttonsShowVertical': true,
          res: {}
        }
      }
    },
    methods: {
      ...ZanDialog.methods,
      toggleBaseDialog () {
        const obj = {
          title: '弹窗',
          content: '这是一个模态弹窗',
          showCancel: true
          // date: new Date()
        }
        this.showZanDialog(obj).then(() => {
          console.log('=== dialog ===', 'type: confirm')
        }).catch(() => {
          console.log('=== dialog ===', 'type: cancel')
        })
      },

      toggleWithoutTitleDialog () {
        const obj = {
          content: '这是一个模态弹窗'
        }
        this.showZanDialog(obj).then(() => {
          console.log('=== dialog without title === type: confirm')
        })
      },

      toggleButtonDialog () {
        const obj = {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        }
        this.showZanDialog(obj).then(({type}) => {
          console.log('=== dialog with custom buttons === type: ' + type)
        })
      },

      toggleVerticalDialog () {
        const obj = {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttonsShowVertical: true,
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        }
        this.showZanDialog(obj).then(({type}) => {
          console.log('=== dialog with vertical buttons === type: ' + type)
        })
      }
    }
  }
</script>
<style  scoped>
</style>
