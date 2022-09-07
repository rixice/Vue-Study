<template>
  <div class="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import router from './router'
import Footer from './components/Footer/index.vue';  

export default {
  name: 'App',
  components: { Header, Footer },
}
</script>

<style lang="less">
  a {text-decoration: none; white-space: nowrap;}
  p {white-space: nowrap;}
  .app{
    display: flex;
    vertical-align: auto;
    flex-flow: wrap;
  }
</style>