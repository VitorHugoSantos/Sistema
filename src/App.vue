<template>
  <div id="app">
    <NavBar/>
    <router-view> </router-view>
  </div>
</template>

<script>
  import NavBar from '@/components/Nav/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: nexabook, Courier, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100vh;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 12px;
}
hr{
  background-color: #009933;
  margin-left: 15px;
  margin-right: 15px;
}
.cursor-pointer{
  cursor: pointer;
}
.titulo{
  font-size: 18px;
  text-align: left;
  vertical-align: middle;
}
</style>
