<template>
  <div class="app">
    <h3>我是App组件 (祖父)</h3>
    <Child></Child>
    <Son></Son>
  </div>
</template>

<script>
  import {ref} from 'vue'
  import Child from './components/Child.vue';
  import Son from './components/Son.vue';

  export default {
    name: "App",
    setup() {
        return {};
    },
    components: { Child, Son }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 20px;
  }
</style>
