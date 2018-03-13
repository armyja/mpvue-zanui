<template>
  <div class="zan-tab">
    <block v-if="scroll || false">
      <scroll-view
        class="zan-tab__bd zan-tab__bd--scroll"
        :class="{ 'zan-tab__bd--fixed' : fixed }"
        scroll-x="true"
        :style="'height' + mao +  height + 'px auto'"
      >
        <ZanTabList v-bind="{ list , selectedId, componentId, _handleZanTabChange }"/>
      </scroll-view>
    </block>
    <block wx:else>
      <div class="zan-tab__bd" :class="{ 'zan-tab__bd--fixed' : fixed }">
        <ZanTabList v-bind="{ list, selectedId, componentId , _handleZanTabChange}"/>
      </div>
    </block>
  </div>
</template>


<script>
  import ZanTabList from './tablist'
  const maohao = ':'
  export default {
    props: ['scroll', 'fixed', 'height', 'list', 'selectedId', 'componentId', 'handleZanTabChange'],
    components: {
      ZanTabList
    },
    computed: {
      mao: function () {
        return maohao
      }
    },
    data () {
      return {
        list: [],
        selectedId: '',
        componentId: '',
        _handleZanTabChange: this._handleZanTabChange
      }
    },
    methods: {
      _handleZanTabChange (data) {
        console.info('[zan:tab:change]', data)
        if (this.handleZanTabChange) {
          this.handleZanTabChange(data)
        } else {
          console.warn('页面缺少 handleZanTabChange 回调函数')
        }
      }
    }
  }
</script>

<style scoped>

</style>
