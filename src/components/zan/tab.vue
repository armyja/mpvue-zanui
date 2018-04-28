<template>
  <div class="zan-tab">
    <block v-if="scroll || false">
      <scroll-view
        class="zan-tab__bd zan-tab__bd--scroll"
        :class="{ 'zan-tab__bd--fixed' : fixed }"
        scroll-x="true"
        :style="'height' + mao +  height + 'px auto'"
      >
        <ZanTabList v-bind="{ list , selectedId, componentId }" @change="_change"/>
      </scroll-view>
    </block>
    <block wx:else>
      <div class="zan-tab__bd" :class="{ 'zan-tab__bd--fixed' : fixed }">
        <ZanTabList v-bind="{ list, selectedId, componentId }" @change="_change"/>
      </div>
    </block>
  </div>
</template>


<script>
  import ZanTabList from './tablist'
  const maohao = ':'
  export default {
    props: ['scroll', 'fixed', 'height', 'list', 'selectedId', 'componentId'],
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
        componentId: ''
      }
    },
    methods: {
      _change (data) {
        this.$emit('change', data)
      }
    }
  }
</script>

<style scoped>

</style>
