<template>
  <h1>一个人的信息</h1>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <button @click="changeInfo">SayHello</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    setup(){
      let name = ref('张三')
      let age = ref(18)

      function changeInfo(){
        name.value = '李四'
        age.value = 15
      }
      return {name, age, changeInfo}
    }
  }
</script>

<style>

</style>
