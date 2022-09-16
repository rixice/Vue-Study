<template>
  <div class="app">
    <h3>我是App组件 (祖父)</h3>
    <!-- 
        等待异步组件时，渲染一些额外内容，让用户有更好的体验
     -->
    <Suspense>

      <template v-slot:default>
          <Child></Child>
      </template>

      <template v-slot:fallback>
          <h3>加载中......, 请稍等</h3>
      </template>

    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child.vue';  // 静态引入
  import { defineAsyncComponent } from 'vue'; // 异步组件方法
  const Child = defineAsyncComponent(()=>import('./components/Child.vue'))  // 异步引入 (动态引入)
  export default {
    name: "App",
    
    components: { Child },
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 20px;
  }
</style>
