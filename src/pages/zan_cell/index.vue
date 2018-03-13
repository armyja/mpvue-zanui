<template>

  <div class="container">

    <div class="doc-title zan-hairline--bottom">CELL</div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__bd">单行列表</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__bd">单行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__icon zan-icon zan-icon-checked" style="color:#38f;"></div>
        <div class="zan-cell__bd">单行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__bd">
          <div class="zan-cell__text">单行列表</div>
          <div class="zan-cell__desc">附加描述</div>
        </div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">单行列表</div>
        <div class="zan-cell__ft"></div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell zan-cell--switch">
        <div class="zan-cell__bd">开关</div>
        <div class="zan-cell__ft">
          <ZanSwitch v-bind="Object.assign({}, sw, {handleZanSwitchChange})"/>
        </div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">单行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
      <div class="zan-cell">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft"></div>
      </div>
    </div>

    <div class="zan-panel">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">多行列表</div>
        <div class="zan-cell__ft">详细信息</div>
      </div>
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
        sw: {
          checked: false,
          disabled: false,
          loading: false,
          componentId: 'sw',
          handleZanSwitchChange: null
        }
      }
    },
    methods: {
      handleZanSwitchChange (e) {
        this.sw.checked = e.checked
      }
    }
  }
</script>
<style >
</style>
<style  scoped>
</style>
