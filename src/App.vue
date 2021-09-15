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

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
}
.cursor-pointer{
  cursor: pointer;
}
</style>
