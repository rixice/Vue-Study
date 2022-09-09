<template>
  <h1>一个人的信息</h1>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>工作种类: {{job.type}} | 工作薪水: {{job.salary}}</h3>
  <button @click="changeInfo">SayHello</button>
</template>
<!-- 
    ref 函数
    
      作用：定义一个响应式地数据
      语法：const xxx = ref(initValue)
        1. 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
        2. JS中操作数据：xxx.value
        3. 模板中读取数据：不需要value
      
      备注：【ref函数 既可以读取 基本类型的数据 也可以读取 对象类型的数据】
        基本类型的数据：响应式依然靠Object.defineProperty()的get与set完成
        对象类型的数据：内部"求助"了Vue3.0中的 —— reactive函数
 -->
<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    setup(){
      const name = ref('张三')
      const age = ref(18)
      const job = ref({
        type: '前端工程师',
        salary: '30K'
      })

      function changeInfo(){
        name.value = '李四'
        age.value = 45
        job.value.type = '运维工程师'
        job.value.salary = '45K'
      }
      return {name, age, job, changeInfo}
    }
  }
</script>

<style>

</style>
