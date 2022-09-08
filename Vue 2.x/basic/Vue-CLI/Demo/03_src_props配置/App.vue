<template lang="">
    <div>
      <Student name="李四" sex="女" :age="25"></Student>
      <hr>
      <Student name="王五" sex="男" :age="40"></Student>
      <hr>
      <Student name="张三" sex="男"></Student>
    </div>
</template>

<script>
// 引入组件
// import School from "./components/School.vue"
import Student from "./components/Student.vue"

export default {
    name:"App",
    components:{
        // School,
        Student,
    },
}
</script>
