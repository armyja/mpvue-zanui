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
    props: ['name', 'componentId', 'items', 'checkedValue', 'activeColor', 'handleZanSelectChange'],
    data () {
      return {
      }
    },
    computed: {
      maohao: function () {
        return maohao
      },
      getItemStyle: function () {
        // if (!this.items) return null
        // let arr = []
        // for (let i = 0; i < this.items.length; i++) {
        //   let item = this.items[i]
        //   let padding = item.padding * 10 + 20
        //   let style = 'padding-left: ' + padding + 'px;'
        //
        //   // 如果为选中状态，则高亮
        //   if (item.value === this.checkedValue) {
        //     style += 'color: ' + (this.activeColor || '#ff4444') + ';'
        //   }
        //   arr.push(style)
        // }
        // return arr
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
        const e = { componentId, value }
        console.info('[zan:Select:change]', e)

        if (this.handleZanSelectChange) {
          this.handleZanSelectChange(e)
        } else {
          console.warn('页面缺少 handleZanSelectChange 回调函数')
        }
      }
    }
  }

</script>

<style scoped>

</style>
