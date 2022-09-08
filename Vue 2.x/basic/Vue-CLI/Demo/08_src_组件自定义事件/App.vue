<!-- 
    组件的自定义事件：
        1. 一种组件间通信的方式：子组件 ==> 父组件
        2. 绑定自定义事件: 
            (1) @demo='demo'或v-on:demo='demo'
            (2) 在父组件中 <Demo ref='demo' />  mounted(){this.$ref.xxx.$on('demo')}   
            (3) 若只想触发一次，则用once修饰符
        3. 触发自定义事件：this.$emit('demo',[...args])
        4. 解绑自定义事件：this.$off()        
 -->

<template lang="">
    <div>
      <!-- 第一种写法：通过自定义事件实现父传子数据，使用@或v-on -->
      <!-- @ 如果加上.native修饰符，则做原生DOM操作（e.g: @click.native） -->
      <Student v-on:studentName="getStudentName" @demo="demo"></Student>
      <h2>学生的姓名：{{studentName}}</h2>
      <!-- 第二种写法：同上，不过使用的是ref -->
      <!-- <Student ref="student"></Student> -->

      <!-- 通过props实现父传子数据 -->
      <School :getSchoolName="getSchoolName"></School>
    </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue"
import Student from "./components/Student.vue"

export default {
    name:"App",
    components:{
        School,
        Student,
    },
    data(){
        return {
            studentName:''
        }
    },
    methods: {
        getSchoolName(name){
            console.log(name)
        },
        // 保留参数（与Golang相似，是数组的形式）
        getStudentName(name,...args){
            console.log(name, args[1])
            this.studentName = name
        },
        demo(){
            console.log('demo被触发了！')
        }
    },
    // mounted() {
    //     // 可以控制可执行的时间，或次数
    //     setTimeout(()=>{
    //         // this.$refs.student.$on('studentName', this.getStudentName)
    //         this.$refs.student.$once('studentName', this.getStudentName)
    //     }, 3000)
    // },
}
</script>
