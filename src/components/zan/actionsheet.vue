<template>
  <div class="zan-actionsheet" :class="{'zan-actionsheet--show': show }">
    <div
      class="zan-actionsheet__mask"
      @click="_handleZanActionsheetMaskClick"
      :data-close-on-click-overlay="closeOnClickOverlay"
      :data-component-id="componentId"></div>
    <div class="zan-actionsheet__container">
      <!-- 实际按钮显示 -->
      <button
        v-for="(item, index) in actions"
        :key="index + '-' + item.name"
        @click="_handleZanActionsheetBtnClick"
        :data-component-id="componentId"
        :data-index="index"
        :open-type="item.openType"
        class="zan-btn zan-actionsheet__btn"
        :class="computedClassStr[index]"
      >
        <text>{{ item.name }}</text>
        <text
          v-if="item.subname"
          class="zan-actionsheet__subname">{{ item.subname }}
        </text>
      </button>

      <!-- 关闭按钮 -->
      <div
        v-if="cancelText"
        class="zan-actionsheet__footer"
      >
        <button
          class="zan-btn zan-actionsheet__btn"
          @click="_handleZanActionsheetCancelBtnClick"
          :data-component-id="componentId"
        >{{ cancelText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {extractComponentId} from '../../utils/helper'

  export default {
    props: {
      show: Boolean,
      cancelText: String,
      closeOnClickOverlay: Boolean,
      componentId: String,
      actions: Array,
      handleZanActionsheetClick: Boolean,
      handleZanActionsheetCancel: Boolean
    },
    data () {
      return {
        // show: false,
        // cancelText: '关闭 Action',
        // closeOnClickOverlay: true,
        // componentId: 'baseActionsheet',
        // actions: [{
        //   name: '选项0',
        //   subname: '选项描述语1',
        //   className: 'action-class',
        //   loading: false
        // }, {
        //   name: '选项1',
        //   subname: '选项描述语2',
        //   className: 'action-class',
        //   loading: false
        // }, {
        //   name: '去分享',
        //   openType: 'share'
        // }]
      }
    },
    computed: {
      computedClassStr: function () {
        if (!this.actions) return null
        let arr = []
        for (let i = 0; i < this.actions.length; i++) {
          let str = this.actions[i].className + ' ' + (this.actions[i].loading ? 'zan-btn--loading' : '')
          arr.push(str)
        }
        return arr
      }
    },
    methods: {
      _handleZanActionsheetMaskClick ({currentTarget = {}}) {
        const dataset = currentTarget.dataset || {}
        const {componentId, closeOnClickOverlay} = dataset

        // 判断是否在点击背景时需要关闭弹层
        if (!closeOnClickOverlay) {
          return
        }

        this.resolveCancelClick({componentId})
      },

      _handleZanActionsheetCancelBtnClick (e) {
        const componentId = extractComponentId(e)

        this.resolveCancelClick({componentId})
      },

      _handleZanActionsheetBtnClick ({currentTarget = {}}) {
        const dataset = currentTarget.dataset || {}
        const {componentId, index} = dataset
        if (this.handleZanActionsheetClick) {
          // this.handleZanActionsheetClick({componentId, index})
          this.$emit('handleZanActionsheetClick', {componentId, index})
        } else {
          console.warn('页面缺少 handleZanActionsheetClick 回调函数')
        }
      },
      resolveCancelClick ({componentId}) {
        console.info('[zan:actionsheet:cancel]')
        if (this.handleZanActionsheetCancel) {
          // this.handleZanActionsheetClick({componentId, index})
          this.$emit('handleZanActionsheetCancel', {componentId})
        } else {
          console.warn('页面缺少 handleZanActionsheetCancel 回调函数')
        }
      }
    }
  }
</script>

<style scoped>

</style>
