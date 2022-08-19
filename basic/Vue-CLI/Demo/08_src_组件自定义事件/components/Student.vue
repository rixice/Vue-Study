<template>
    <div class="demo">
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
        <button @click="sendStudentName">点我调用studentName</button>
        <button @click="unbind">解绑studentName事件</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data(){
            return {
                name: "张三",
                sex: "男",
            }
        },
        methods: {
            sendStudentName(){
                // 触发Student组件实例对象上的studentName事件
                this.$emit('studentName', this.name, 800, this.sex)
                this.$emit('demo')
            },
            unbind(){
                // this.$off('studentName')    // 解绑一个自定义事件
                // this.$off(['demo', 'studentName'])  // 解绑多个自定义事件
                this.$off() // 解绑所有自定义事件
            }
        },
    }
</script>

<!-- scoped样式 -->
<!-- 
    作用：让style样式在局部生效，防止冲突；
    写法：<style scoped>
 -->
<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>