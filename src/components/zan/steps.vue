<template>
  <div class="zan-steps"
       :class="getClassStr">
    <div
      v-for="(step, index) in steps" :key="unique"
      class="zan-steps__step"
      :class="{ 'zan-steps__step--db-title' : hasDesc , 'zan-steps__step--first-child' : index === 0 , 'zan-steps__step--last-child' : index === steps.length - 1, 'zan-steps__step--done' : step.done ,
        'zan-steps__step--cur' : step.current  }"
    >
      <div class="zan-steps__title">{{ step.text }}</div>
      <div v-if="hasDesc && step.desc " class="zan-steps__title zan-steps__title--desc">{{ step.desc }}</div>
      <div class="zan-steps__icons">
        <div class="zan-steps__circle"></div>
      </div>
      <div class="zan-steps__line"></div>
    </div>
  </div>
</template>


<script>
    export default {
      props: ['type', 'vsteps', 'steps', 'className', 'hasDesc'],
      computed: {
        getClassStr: function () {
          let str = 'zan-steps--'
          str += (this.type === 'vertical' ? 'vsteps' : 'steps')
          str += ' zan-steps--' + this.steps.length + ' ' + (this.className || '')
          return str
        }
      }
    }
</script>

<style scoped>
  .my-class {
    padding: 10px;
  }
  .my-class .zan-steps__step--done {
    color: #f44;
  }
</style>
