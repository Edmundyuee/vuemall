<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <tabbarmain></tabbarmain>
  </div>
</template>
<script>
  import tabbarmain from './components/tabbar/TabbarMain'
  export default {
    components: {
      tabbarmain
    }
  }
</script>
<style>
    *{
      margin: 0px;
      padding: 0px;
    }
</style>
