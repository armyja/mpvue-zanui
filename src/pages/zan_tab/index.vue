<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">TAB</div>

    <div style="margin: 20px 0">
      <ZanTab v-bind="tab1" :componentId="'tab1'" :handleZanTabChange="handleZanTabChange"/>
    </div>
    <div style="margin: 20px 0">
      <ZanTab v-bind="tab2" :componentId="'tab2'" :handleZanTabChange="handleZanTabChange"/>
    </div>
    <div style="margin: 20px 0">
      <ZanTab v-bind="tab3" :componentId="'tab3'" :handleZanTabChange="handleZanTabChange"/>
    </div>
  </div>
</template>

<script>
  import ZanTab from '../../components/zan/tab'
  export default {
    components: {
      ZanTab
    },
    data () {
      return {
        tab1: {
          list: [{
            id: 'all',
            title: '全部'
          }, {
            id: 'topay',
            title: '待付款'
          }, {
            id: 'tosend',
            title: '待发货'
          }, {
            id: 'send',
            title: '待收货'
          }, {
            id: 'sign',
            title: '已完成订单'
          }],
          scroll: false,
          selectedId: 'all'
        },
        tab2: {
          list: [{
            id: '1',
            title: '最新商品1'
          }, {
            id: '2',
            title: '最新商品2'
          }, {
            id: '3',
            title: '最新商品3'
          }, {
            id: '4',
            title: '最新商品4'
          }, {
            id: '5',
            title: '最新商品5'
          }, {
            id: '6',
            title: '最新商品6'
          }],
          selectedId: '1',
          scroll: true,
          height: 35
        },
        tab3: {
          list: [{
            id: '1',
            title: '商品1'
          }, {
            id: '2',
            title: '商品2'
          }, {
            id: '3',
            title: '商品3'
          }, {
            id: '4',
            title: '商品4'
          }, {
            id: '5',
            title: '商品5'
          }, {
            id: '6',
            title: '商品6'
          }],
          selectedId: '1',
          scroll: true,
          height: 25
        }
      }
    },
    methods: {
      ...ZanTab.methods,
      handleZanTabChange (e) {
        const {componentId, selectedId} = e
        this[componentId].selectedId = selectedId
      }
    }
  }
</script>
<style  scoped >

</style>
