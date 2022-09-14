<template>
  <Demo @hello="showHello" name='张三'>
    <template v-slot:haha>
      <h1>Hello World</h1>
    </template>  
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: 'App',
  components: { Demo },
  setup(){
    function showHello(){
      alert('hello')
    }

    // 注意！！！使用了setup()后，必须要把子组件交出去
    return {
      showHello, Demo
    }
  }
}
</script>

<style>

</style>
