<template>
  <h1>一个人的信息</h1>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <button @click="sayHello">SayHello</button>
</template>

<script>
  export default {
    name: 'App',
    // 拉开序幕的setup
    // 1. 理解：Vue3.0中一个新的配置项，值为一个函数；
    // 2. setup是所有Composition API (组合API) “表演的舞台”
    // 3. 组件中所用到的：数据、方法等，都在配置在setup中；
    // 4. setup函数有两种返回值：
    //        (重点) 返回一个对象，则对象中的数据、方法，在模板中均可直接使用
    //        (了解) 返回一个渲染函数
    
    // 5. 注意：
    //      不要与Vue2.x配置混用
    //      Vue2.x中可以访问到setup中的属性和方法
    //      但在setup中不能访问到Vue2.x的配置
    //      如果有重名，setup优先
    //      setup不能是一个async函数，因为返回值是promise
    //      (后期) 也可以返回一个Promise实例，但需要 Suspense和异步组件配合
    setup(){
      // 数据
      let name = '张三'
      let age = 18

      // 方法
      function sayHello(){
        alert("哈哈哈")
      }
      return {name, age, sayHello}
    }
  }
</script>

<style>

</style>
