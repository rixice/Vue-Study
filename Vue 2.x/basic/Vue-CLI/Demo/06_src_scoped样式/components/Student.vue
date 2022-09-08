<template>
    <div class="demo">
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
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