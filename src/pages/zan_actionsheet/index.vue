<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom zan-hairline--bottom">ACTIONSHEET</div>

    <div class="zan-btns" style="margin-top: 30vh;">
      <button class="zan-btn" @click="toggleActionsheet">
        Actionsheet
      </button>
    </div>

    <Actionsheet
      v-bind="baseActionsheet"
      :handleZanActionsheetClick="true"
      :handleZanActionsheetCancel="true"
      v-on:handleZanActionsheetClick="handleZanActionsheetClick"
      v-on:handleZanActionsheetCancel="handleZanActionsheetCancel"/>
  </div>
</template>

<script>
  import Actionsheet from '../../components/zan/actionsheet'

  export default {
    components: {
      Actionsheet
    },
    data () {
      return {
        baseActionsheet: {
          show: false,
          cancelText: '关闭 Action',
          closeOnClickOverlay: true,
          componentId: 'baseActionsheet',
          actions: [{
            name: '选项1',
            subname: '选项描述语1',
            className: 'action-class',
            loading: false
          }, {
            name: '选项2',
            subname: '选项描述语2',
            className: 'action-class',
            loading: false
          }, {
            name: '去分享',
            openType: 'share'
          }]
        }
      }
    },
    methods: {
      onShareAppMessage () {
        return {
          title: 'ZanUI-WeApp',
          imageUrl: 'https://img.yzcdn.cn/public_files/2017/02/06/ee0ebced79a80457d77ce71c7d414c74.png'
        }
      },

      toggleActionsheet () {
        this.baseActionsheet.show = true
      },
      handleZanActionsheetCancel ({componentId}) {
        this[componentId].show = false
      },
      handleZanActionsheetClick ({componentId, index}) {
        console.log('item index ' + index + ' clicked')
        // 如果是分享按钮被点击, 不处理关闭
        if (index === 2) {
          return
        }
        this[componentId].actions[index].loading = true
        setTimeout(() => {
          this[componentId].show = false
          this[componentId].actions[index].loading = false
        }, 1500)
      }
    }
  }

</script>
<style >
</style>
<style  scoped>
</style>
