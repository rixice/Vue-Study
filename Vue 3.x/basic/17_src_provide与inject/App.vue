<template>
  <div class="app">
    <h3>我是App组件 (祖父), &nbsp;&nbsp;&nbsp;{{name}} --- {{price}}</h3>
    <Child></Child>
  </div>
</template>

<!-- 
  Provide、Inject函数
    作用：实现 祖与后代组件间 通信
    套路：祖组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来使用这些数据
 -->

<script>
  import {reactive, toRefs, provide} from 'vue'
  import Child from './components/Child.vue';
  import Son from './components/Son.vue';

  export default {
    name: "App",
    setup() {
      let car = reactive({
        name: '奔驰',
        price: 40,
      })
      provide('car', car)   // 给自己的后代组件传递数据
      return {...toRefs(car)};
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
