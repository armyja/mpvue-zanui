<template >
  <div class="zan-stepper"
   :class="{'zan-stepper--small': size === 'small'}">
    <div
      class="zan-stepper__minus"
      :class="{'zan-stepper--disabled': stepper <= min }"
      :data-component-id="componentId"
      :data-stepper="stepper"
      :data-disabled="stepper <= min"
      @click="_handleZanStepperMinus"
    >-</div>
    <input
      class="zan-stepper__text"
      :class="{ 'zan-stepper--disabled' : min >= max }"
      type="number"
      data-component-id="componentId"
      :data-min="min"
      :data-max="max"
      :value="stepper"
      :disabled="min >= max"
      @blur="_handleZanStepperBlur"
    />
    <div
      class="zan-stepper__plus"
      :class="{ 'zan-stepper--disabled' : stepper >= max }"
      :data-component-id="componentId"
      :data-stepper="stepper"
      :data-disabled="stepper >= max"
      @click="_handleZanStepperPlus"
    >+</div>
  </div>
</template>

<script>
  export default {
    props: {
      componentId: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      stepper: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 10
      }
    },
    methods: {
      _handleZanStepperMinus (e) {
        this.handle(e, -1)
      },

      _handleZanStepperPlus (e) {
        this.handle(e, +1)
      },

      _handleZanStepperBlur: function (e) {
        var dataset = e.currentTarget.dataset
        var componentId = dataset.componentId
        var max = +dataset.max
        var min = +dataset.min
        var value = e.target.value

        if (!value) {
          setTimeout(() => {
            this.callback(componentId, min)
          }, 16)
          this.callback(componentId, value)
          return '' + value
        }

        value = +value
        if (value > max) {
          value = max
        } else if (value < min) {
          value = min
        }

        this.callback(componentId, value)

        return '' + value
      },
      handle (e, num) {
        var dataset = e.currentTarget.dataset
        var componentId = dataset.componentId
        var disabled = dataset.disabled
        var stepper = +dataset.stepper

        if (disabled) return null

        this.callback(componentId, stepper + num)
      },

      callback (componentId, stepper) {
        stepper = +stepper
        var e = {componentId, stepper}
        console.info('[zan:stepper:change]', e)
        this.$emit('handleZanStepperChange', e)
      }
    }
  }
</script>

<style scoped>

</style>
