<template>

  <div class="container">

    <div class="doc-title zan-hairline--bottom">SELECT</div>

    <div class="zan-panel-title">基础用法</div>
    <div class="zan-panel">
      <div>
        <zan-select v-bind="{ items, checkedValue: checked.base, componentId: 'base'}" @handleZanSelectChange="handleZanSelectChange"/>
      </div>
    </div>

    <div class="zan-panel-title">自定义高亮颜色</div>
    <div class="zan-panel">
      <div>
        <zan-select v-bind="{ items, checkedValue: checked.color, activeColor, componentId: 'color'}" @handleZanSelectChange="handleZanSelectChange"/>
      </div>
    </div>

    <div class="zan-panel-title">Form 表单中的select应用</div>
    <form @submit="formSubmit">
      <div class="zan-panel">
        <div>
          <zan-select v-bind="{ items, checkedValue: checked.form, name: 'formtest', componentId: 'form'}"  @handleZanSelectChange="handleZanSelectChange"/>
        </div>
      </div>

      <div class="zan-btns">
        <button
          class="zan-btn zan-btn--primary"
          formType="submit">提交数据</button>
      </div>
    </form>
    <toptips />
  </div>
</template>

<script>
  import { getComponentByTag } from '../../utils/helper'
  import ZanSelect from '../../components/zan/select'
  import ZanTopTips from '../../components/zan/toptips'
  export default {
    components: {
      ZanSelect,
      toptips: ZanTopTips
    },
    data () {
      return {
        items: [
          {
            padding: 0,
            value: '1',
            name: '选项一'
          },
          {
            padding: 0,
            value: '2',
            name: '选项二'
          }
        ],

        checked: {
          base: '-1',
          color: '-1',
          form: '-1'
        },
        activeColor: '#4b0'
      }
    },
    methods: {
      handleZanSelectChange ({ componentId, value }) {
        this.checked[componentId] = value
      },

      formSubmit (event) {
        console.log('[zan:field:submit]', event.target.value)
        getComponentByTag(this, 'toptips').showZanTopTips(`选中的值为${event.target.value.formtest}`)
      }
    }
  }
</script>
<style  scoped>
</style>
