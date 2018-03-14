<template>
  <radio-group
    class="zan-select__list"
    :name=" name || componentId || ''"
    @change="_handleZanSelectChange"
    :data-component-id="componentId"
  >
    <label v-for="item in items" :key="value">
      <div class="zan-cell">
        <radio class="zan-select__radio" :value="item.value" :checked="item.value === checkedValue"></radio>
        <div
          class="zan-cell__bd"
          :style="'padding-left' + maohao + item.padding + 'px;'
          +'color' + maohao + ((item.value === checkedValue) && (activeColor || '#ff4444'))+ ';'"
        >{{ item.name }}</div>
        <div v-if="item.value === checkedValue" class="zan-cell__ft">
          <icon type="success_no_circle" :color="getColor" size="14"></icon>
        </div>
      </div>
    </label>
  </radio-group>
</template>

<script>
  import {extractComponentId} from '../../utils/helper'
  const maohao = ':'
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      componentId: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: []
      },
      checkedValue: {
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: '#ff4444'
      }
    },

    data () {
      return {}
    },
    computed: {
      maohao: function () {
        return maohao
      },
      getColor: function () {
        return this.activeColor || '#ff4444'
      }
    },
    methods: {
      _handleZanSelectChange (e) {
        this.handle(e)
      },
      handle (e) {
        const componentId = extractComponentId(e)
        const value = e.target.value
        this.callback(componentId, value)
      },
      callback (componentId, value) {
        const e = {componentId, value}
        console.info('[zan:Select:change]', e)
        this.$emit('handleZanSelectChange', e)
      }
    }
  }

</script>

<style scoped>

</style>
