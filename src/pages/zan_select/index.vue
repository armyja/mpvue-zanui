<template>

  <div class="container">

    <div class="doc-title zan-hairline--bottom">SELECT</div>

    <div class="zan-panel-title">基础用法</div>
    <div class="zan-panel">
      <div>
        <zan-select v-bind="{ items, checkedValue: checked.base, componentId: 'base', handleZanSelectChange }"/>
      </div>
    </div>

    <div class="zan-panel-title">自定义高亮颜色</div>
    <div class="zan-panel">
      <div>
        <zan-select v-bind="{ items, checkedValue: checked.color, activeColor, componentId: 'color', handleZanSelectChange }"/>
      </div>
    </div>

    <div class="zan-panel-title">Form 表单中的select应用</div>
    <form @submit="formSubmit">
      <div class="zan-panel">
        <div>
          <zan-select v-bind="{ items, checkedValue: checked.form, name: 'formtest', componentId: 'form',  handleZanSelectChange }"/>
        </div>
      </div>

      <div class="zan-btns">
        <button
          class="zan-btn zan-btn--primary"
          formType="submit">提交数据</button>
      </div>
    </form>
    <zan-top-tips v-bind="zanTopTips"/>
  </div>
</template>

<script>
  import ZanSelect from '../../components/zan/select'
  import ZanTopTips from '../../components/zan/toptips'
  export default {
    components: {
      ZanSelect,
      ZanTopTips
    },
    data () {
      return {
        zanTopTips: {},
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
      ...ZanTopTips.methods,
      handleZanSelectChange ({ componentId, value }) {
        this.checked[componentId] = value
      },

      formSubmit (event) {
        console.log('[zan:field:submit]', event.target.value)
        this.showZanTopTips(`选中的值为${event.target.value.formtest}`)
      }
    }
  }
</script>
<style  scoped>
</style>
