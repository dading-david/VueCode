<template>
  <div id="app">
    <!-- 等同于MHeader,二者可以互换，但是不推荐用驼峰命名 -->
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      MHeader,
      Tab
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/variable"

  /* #app
   color: $color-theme */

</style>
