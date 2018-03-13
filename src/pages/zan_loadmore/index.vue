<template>
  <div class="container">

    <div class="doc-title zan-hairline--bottom">LOADMORE</div>

    <ZanLoadmore v-bind="{ loading: true }" />
    <ZanLoadmore v-bind="{ nodata: true }" />
    <ZanLoadmore v-bind="{ nomore: true }" />
  </div>
</template>

<script>
  import ZanLoadmore from '../../components/zan/loadmore'
  export default {
    components: {
      ZanLoadmore
    },
    data () {
      return {}
    }
  }
</script>
<style  scoped>
</style>
