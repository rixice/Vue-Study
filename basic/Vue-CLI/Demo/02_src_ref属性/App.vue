<template lang="">
    <div>
      <img src="./assets/logo.png" alt="">
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM">点我输出上方的DOM</button>
      <School ref="sch"></School>
      <!-- <Student></Student> -->
    </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue"
// import Student from "./components/Student.vue"

export default {
    name:"App",
    components:{
        School,
        // Student,
    },
    data(){
      return{
        msg:"Hello",
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.sch)   // school组件的实例对象
        console.log(this.$refs.title) // 真实的DOM元素
      }
    },
}
</script>
