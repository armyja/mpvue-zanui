<template>
  <div class="container">
    <div class="doc-title zan-hairline--bottom zan-hairline--bottom">BADGE</div>
    <div class="demo">
      <div class="demo__item">
        <div class="demo__icon zan-badge">
        </div>
      </div>
      <div class="demo__item">
        <div class="demo__icon zan-badge">
          <div class="zan-badge__count">9</div>
        </div>
      </div>
      <div class="demo__item">
        <div class="demo__icon zan-badge">
          <div class="zan-badge__count">19</div>
        </div>
      </div>
      <div class="demo__item">
        <div class="demo__icon zan-badge">
          <div class="zan-badge__count">99+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: {}
      }
    },
    methods: {}
  }
</script>
<style >
</style>
<style  scoped>
  .demo {
    padding: 40px 0;
    display: flex;
  }

  .demo__item {
    flex: 1;
  }

  .demo__icon {
    margin: 0 auto;
    width: 48px;
    height: 48px;
    background: #ddd;
    border-radius: 4px;
  }
</style>
