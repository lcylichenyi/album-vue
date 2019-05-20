<template>
  <div id="app">
    <div class="tab">
      <router-link to="/">
        <el-button type="success" round class="tabbtn">图片</el-button> 
      </router-link>
      <router-link to="/svg">
        <el-button type="primary" round class="tabbtn">SVG</el-button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab {
  display: flex;
  text-align: center;
  justify-content: center;
  a {
    margin: 0 50px;
    margin-bottom: 50px;
  }
  .tabbtn {
    width: 150px;
  }
}
</style>
