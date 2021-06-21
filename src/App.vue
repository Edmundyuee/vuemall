<template>
  <div id="app">
    <router-view></router-view>
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

</style>
