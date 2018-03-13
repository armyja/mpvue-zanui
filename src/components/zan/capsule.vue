<template>
  <div @click="doClick" class="zan-capsule" :class="'zan-capsule--' + type">
    <block v-if="color">
      <div class="zan-capsule__left" :style="computedClassStr">{{ leftText }}</div>
      <div class="zan-capsule__right" :style="getObject">{{ rightText }}</div>
    </block>
    <block v-else>
      <div class="zan-capsule__left">{{ leftText }}</div>
      <div class="zan-capsule__right">{{ rightText }}</div>
    </block>
  </div>
</template>

<script>
    export default {
      props: {
        type: String,
        color: String,
        leftText: String,
        rightText: String,
        onclick: Function
      },
      computed: {
        computedClassStr: function () {
          return 'background: ' + this.color + '; border-color: ' + this.color
        },
        getObject: function () {
          return 'color: ' + this.color + '; border-color: ' + this.color
        }
      },
      methods: {
        doClick () {
          const a = this.onclick || function () {}
          a()
        }
      }
    }
</script>

<style scoped>

</style>
