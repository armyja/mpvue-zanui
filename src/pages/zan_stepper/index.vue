<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">Stepper</div>

    <div style="padding: 40px 15px">
      <zan-stepper v-bind="stepper1" componentId="stepper1" @handleZanStepperChange="handleZanStepperChange" />
    </div>

    <!-- 当最大值等于最小值时，组件不可用 -->
    <div style="padding: 40px 15px ">
      <zan-stepper v-bind="stepper2" componentId="stepper2" @handleZanStepperChange="handleZanStepperChange" />
    </div>

    <!-- small size -->
    <div style="padding: 40px 15px ">
      <zan-stepper v-bind="stepper3" componentId="stepper3" size="small"  @handleZanStepperChange="handleZanStepperChange"/>
    </div>
  </div>
</template>

<script>
  import ZanStepper from '../../components/zan/stepper'
  export default {
    components: {
      ZanStepper
    },
    data () {
      return {
        stepper1: {
          stepper: 10,
          min: 1,
          max: 20
        },
        stepper2: {
          stepper: 1,
          min: 1,
          max: 1
        },
        stepper3: {
          stepper: 10,
          min: 1,
          max: 20
        }
      }
    },
    methods: {
      handleZanStepperChange (e) {
        const {componentId, stepper} = e
        this[componentId].stepper = stepper
      }
    }
  }
</script>
<style  scoped>
</style>
