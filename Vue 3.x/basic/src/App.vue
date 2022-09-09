<template>
  <h1>一个人的信息</h1>
  <h3 v-show="person.name">姓名：{{person.name}}</h3>
  <button @click="addName">addName</button>
  <button @click="delName">delName</button>
</template>
<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    setup(){
      const person = reactive({})

      function addName(){
        person.name = '张三'
      }

      function delName(){
        delete person.name
      }

      return {person, addName, delName}
    }
  }
</script>

<style>

</style>
