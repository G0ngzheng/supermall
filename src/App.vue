<template>
  <div id="app">
    <MainTabBar class="main-tab"></MainTabBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
