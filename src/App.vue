<template>
  <div id="app">
    <main-tab-bar />
		<router-view/>
		<bottom-bar />
  </div>
</template>

<script>
  import MainTabBar from '@/components/MainTabBar/MainTabBar.vue'
  import BottomBar from '@/components/BottomBar/BottomBar.vue'

  export default {
    components: {
      MainTabBar, BottomBar
    }
  }
</script>

<style scoped>
  @import url('./assets/css/normalize.css');
</style>
