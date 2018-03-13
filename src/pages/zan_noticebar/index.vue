<template>
  <div class="container">
    <div class="doc-title zan-hairline--bottom" @click="onclick">NOTICEBAR</div>

    <div class="zan-panel-title">滚动通告栏</div>
    <div class="zan-panel">
      <zanbar v-on:ref="setRef" v-bind="movable"  :componentId="'movable'"/>
    </div>

    <div class="zan-panel-title">静止通告栏1</div>
    <div class="zan-panel">
      <zanbar v-bind="this.static1" :componentId="'static1'"/>
    </div>

    <div class="zan-panel-title">静止通告栏2</div>
    <div class="zan-panel">
      <zanbar v-bind="this.static2" :componentId="'static2'"/>
    </div>
  </div>
</template>

<script>
  import ZanNoticeBar from '../../components/zan/noticebar'
  export default {
    components: {
      zanbar: ZanNoticeBar
    },
    data () {
      return {
        movable: {
          text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
          animationData: []
        },
        static1: {
          text: '足协杯战线连续第2年上演广州德比战',
          animationData: []
        },
        static2: {
          text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
          animationData: []
        }
      }
    },
    methods: {
      ...ZanNoticeBar.methods,
      setRef: function (payload) {
        console.log(payload)
        // this.initZanNoticeBarScroll = payload['movable'].initZanNoticeBarScroll
        // this.scrollZanNoticeBar = payload['movable'].scrollZanNoticeBar
        // 滚动通告栏需要initScroll
        setTimeout(() => {
          var that = this
          this.initZanNoticeBarScroll(that, 'movable')
          // initScroll的通告栏如果宽度足够显示内容将保持静止
          this.initZanNoticeBarScroll(that, 'static1')
          // 不进行initScroll的通告栏也将保持静止
          // this.initZanNoticeBarScroll('static2');
        }, 500)
      }
    }
  }
</script>
<style  scoped>
</style>
