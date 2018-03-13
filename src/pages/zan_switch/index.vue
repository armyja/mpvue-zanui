<template>

  <div class="container">

    <div class="doc-title zan-hairline--bottom">SWITCH</div>

    <div class="zan-panel-title">同步开关</div>
    <div class="zan-panel">
      <ZanSwitch v-bind="sync" :componentId="'sync'" />
    </div>

    <div class="zan-panel-title">异步开关</div>
    <div class="zan-panel">
      <ZanSwitch v-bind="async" :componentId="'async'" />
    </div>

    <div class="zan-panel-title">开关不可用</div>
    <div class="zan-panel">
      <ZanSwitch v-bind="{ checked: false, disabled: true, componentId: 'switch3', styles: 'margin-right: 8px;' }" />
      <ZanSwitch v-bind="{ checked: true, disabled: true, componentId: 'switch4' }" />
    </div>

  </div>
</template>

<script>
  import ZanSwitch from '../../components/zan/switch'
  export default {
    components: {
      ZanSwitch
    },
    data () {
      return {
        sync: {
          checked: false,
          handleZanSwitchChange: this.handleZanSwitchChange
        },
        async: {
          checked: true,
          loading: false,
          handleZanSwitchChange: this.handleZanSwitchChange
        }
      }
    },
    methods: {
      handleZanSwitchChange (e) {
        console.log(this)
        const componentId = e.componentId
        const checked = e.checked

        if (componentId === 'sync') {
          // 同步开关
          this[componentId].checked = checked
        } else if (componentId === 'async') {
          // 异步开关
          this[componentId].loading = true
          setTimeout(() => {
            this[componentId].loading = false
            this[componentId].checked = checked
          }, 500)
        }
      }
    }
  }
</script>
<style  scoped >
  .zan-panel {
    padding: 10px;
  }
  /*.zan-switch {*/
    /*margin-right: 8px;*/
  /*}*/
</style>
