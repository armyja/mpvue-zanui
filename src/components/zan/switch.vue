<template name="zan-switch">
  <div
    class="zan-switch"
    :class="computedClassStr"
    :data-checked="checked"
    :data-loading="loading"
    :data-disabled="disabled"
    :data-component-id="componentId"
    :style="styles || ''"
    @click="_handleZanSwitchChange"
  >
    <div class="zan-switch__circle">
      <div :hidden="!loading" class="zan-switch__loading"></div>
    </div>
    <div class="zan-switch__bg"></div>
  </div>
</template>


<script>
  export default {
    props: [
      'checked',
      'disabled',
      'loading',
      'componentId',
      'handleZanSwitchChange',
      'styles'
    ],
    computed: {
      computedClassStr: function () {
        return 'zan-switch--' + (this.checked ? 'on' : 'off') + ' ' + (this.disabled ? 'zan-swtich--disabled' : '')
      }
    },
    methods: {
      _handleZanSwitchChange (e) {
        const dataset = e.currentTarget.dataset
        console.log(dataset)
        const checked = !dataset.checked
        const loading = dataset.loading
        const disabled = dataset.disabled
        const componentId = dataset.componentId

        if (loading || disabled) return

        console.info('[zan:switch:change]', { checked, componentId })

        if (this.handleZanSwitchChange) {
          this.handleZanSwitchChange({
            checked,
            componentId
          })
        } else {
          console.warn('页面缺少 handleZanSwitchChange 回调函数')
        }
      }
    }
  }
</script>
