<template>
  <div id="app">
    <NavBar/>
    <router-view> </router-view>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Courier, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100vh;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 12px;
  hr{
    color: #009933;
  }
}
.cursor-pointer{
  cursor: pointer;
}
</style>
