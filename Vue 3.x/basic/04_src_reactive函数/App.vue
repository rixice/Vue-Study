<template>
  <h1>一个人的信息</h1>
  <h3>工作种类: {{job.type}} | 工作薪水: {{job.salary}}</h3>
  <h4>测试: {{job.a.b.c.d}}</h4>
  <ul>
    <li v-for="h in hobby">{{h}}</li>
  </ul>
  <button @click="changeInfo">SayHello</button>
</template>
<!-- 
    reactive 函数
      作用：定义一个对象类型的响应式数据（基本类型不要用它，要用ref）
      语法：const 代理对象 = reactive(源对象) 接收一个对象(或数组)，返回一个代理对象(proxy的实例对象)
      reactive定义的响应式数据"是深层次的"
      内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作
  -->
<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    setup(){
      const job = reactive({
        type: '前端工程师',
        salary: '40K',
        a:{
          b:{
            c:{
              d:666
            }
          }
        },
      })

      const hobby = reactive(['学习', '睡觉', '打游戏'])

      function changeInfo(){
        job.type = '运维工程师',
        job.salary = '35K'
        job.a.b.c.d = 999
        hobby[2] = '看电影'
      }
      return {hobby, job, changeInfo}
    }
  }
</script>

<style>

</style>
