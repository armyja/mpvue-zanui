<template>

  <div class="container">
    <div class="doc-title zan-hairline--bottom">Field</div>

    <!-- Field 基础用法 -->
    <div class="zan-panel-title">基础用法</div>
    <div class="zan-panel">
      <ZanField v-bind="Object.assign({}, handleFunctions, config.base.name)" :value="value"/>
      <ZanField v-bind="Object.assign({}, handleFunctions, config.base.tel)"/>
      <ZanField v-bind="Object.assign({}, handleFunctions, config.base.address)"/>
    </div>

    <div class="zan-btns">
      <button
        class="zan-btn zan-btn--primary"
        @click="clearInput">清除输入</button>
    </div>

    <!-- 去除标题后的输入框样式 -->
    <div class="zan-panel-title">无标题输入框</div>
    <div class="zan-panel">
      <ZanField v-bind="Object.assign({}, handleFunctions, config.notitle)" :value="textareaValue"/>
    </div>

    <div class="zan-btns">
      <button
        class="zan-btn zan-btn--primary"
        @click="clearTextarea">清除输入</button>
    </div>

    <!-- 使用 Field 圆角样式 -->
    <div class="zan-panel-title field__title--radius">圆角输入框</div>
    <ZanField v-bind="Object.assign({}, handleFunctions, config.radius.totalPrice)"/>
    <ZanField v-bind="Object.assign({}, handleFunctions, config.radius.excludePrice)"/>
    <ZanField v-bind="Object.assign({}, handleFunctions, config.radius.notitle)"/>

    <!-- form 中使用 Field -->
    <div class="zan-panel-title">Form 表单中的field应用</div>
    <form @submit="formSubmit" @reset="formReset">
      <div class="zan-panel">
        <ZanField v-bind="Object.assign({}, handleFunctions, config.form.name)"/>
        <ZanField v-bind="Object.assign({}, handleFunctions, config.form.tel)"/>
        <div class="zan-btns">
          <button
            class="zan-btn zan-btn--primary"
            formType="submit">提交数据</button>
          <button
            class="zan-btn"
            formType="reset">重置数据</button>
        </div>
      </div>
    </form>

    <div class="zan-panel-title">自定义显示内容</div>
    <div class="zan-panel">
      <!-- 配合 popup 使用 picker-view -->
      <div class="zan-cell zan-field">
        <div class="zan-cell__hd zan-field__title">人员信息</div>
        <div
          class="zan-field__input zan-cell__bd"
          @click="handleDateFieldClick"
        >
          出生日期: {{ pickerViewConfig.year[pickerViewConfig.value[0]] }}
          性别: {{ pickerViewConfig.sex[pickerViewConfig.value[1]] }}
        </div>
      </div>
      <!-- 对应的 popup 层 -->
      <div
        class="zan-popup zan-popup--bottom" :class="{ 'zan-popup--show' : pickerViewConfig.show }"
      >
        <div class="zan-popup__mask" @click="hideDatePopup"></div>
        <div class="zan-popup__container popup-field-example--bottom">
          <picker-view
            :value="pickerViewConfig.value"
            indicator-style="height: 50px"
            class="picker-view-example"
            @change="handlePopupDateChange"
          >
            <picker-view-column>
              <div
                class="picker-view-column-example"
                v-for="(item, index) in pickerViewConfig.year"
                :key="item"
              >{{item}}年</div>
            </picker-view-column>
            <picker-view-column>
              <div
                class="picker-view-column-example"
                v-for="(item, index) in pickerViewConfig.sex"
                :key="item"
              >{{item}}</div>
            </picker-view-column>
          </picker-view>
        </div>
      </div>

      <!-- 简单 picker 示例 -->
      <div class="zan-cell zan-field">
        <div class="zan-cell__hd zan-field__title">选择区域</div>
        <picker
          mode="selector"
          class="zan-field__input zan-cell__bd"
          :range="area"
          :value="areaIndex"
          @change="onAreaChange"
        >
          {{ area[areaIndex] }}
        </picker>
      </div>

      <div class="zan-cell zan-field">
        <div class="zan-cell__hd zan-field__title">验证码</div>
        <input
          type="text"
          placeholder="请输入短信验证码"
          class="zan-field__input zan-cell__bd"/>
        <div class="zan-cell__ft">
          <button class="zan-btn zan-btn--mini zan-btn--primary">获取验证码</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ZanField from '../../components/zan/field'
  import config from './config'
  export default {
    components: {
      ZanField
    },
    data () {
      return {
        config,
        value: 'test',
        textareaValue: 'test textarea',
        area: ['省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
        areaIndex: 0,
        // picker-view 示例配置
        pickerViewConfig: {
          show: false,
          value: [0, 0],
          year: [2016, 2017, 2018],
          sex: ['男', '女']
        },
        handleFunctions: {
          handleZanFieldChange: null,
          handleZanFieldFocus: null,
          handleZanFieldBlur: null
        }
      }
    },
    mounted () {
      console.log(this)
      this.handleFunctions.handleZanFieldChange = this.handleZanFieldChange
      this.handleFunctions.handleZanFieldFocus = this.handleZanFieldFocus
      this.handleFunctions.handleZanFieldBlur = this.handleZanFieldBlur
    },
    methods: {
      onAreaChange (e) {
        this.areaIndex = e.target.value
      },

      handleZanFieldChange (e) {
        const { componentId, target, detail } = e
        console.log('[zan:field:change]', componentId, target, detail)
      },

      handleZanFieldFocus (e) {
        const { componentId, target, detail } = e
        console.log('[zan:field:focus]', componentId, target, detail)
      },

      handleZanFieldBlur (e) {
        const { componentId, target, detail } = e

        console.log('[zan:field:blur]', componentId, target, detail)
      },

      clearInput () {
        this.value = ' '
        this.value = ''
        console.log(this)
      },

      clearTextarea () {
        this.textareaValue = ' '
        this.textareaValue = ''
      },

      formSubmit (event) {
        console.log('[zan:field:submit]', event.target.value)
      },

      formReset (event) {
        console.log('[zan:field:reset]', event)
      },

      /* piker-view 示例相关函数 */
      handleDateFieldClick () {
        this.pickerViewConfig.show = true
      },

      handlePopupDateChange (e) {
        console.log('date', e)
        this.pickerViewConfig.value = e.target.value
      },

      hideDatePopup () {
        this.pickerViewConfig.show = false
      }
    }
  }
</script>
<style  scoped>
  .field__title--radius {
    padding-bottom: 10px;
  }

  .popup-field-example--bottom {
    width: 100%;
    height: 150px;
  }

  .picker-view-example {
    height: 120px;
  }

  .picker-view-column-example {
    line-height: 50px;
    text-align: center;
  }
</style>
