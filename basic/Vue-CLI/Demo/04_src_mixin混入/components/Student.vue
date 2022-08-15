<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
        <button @click="showName">点我提示学生名称</button>
    </div>
</template>

<script>
    // 引入一个混合mixin
    import {showName,retData} from '../mixin.js'
    export default {
        name: "Student",
        data(){
            return {
                name: "张三",
                sex: "男",
            }
        },
        mixins:[showName,retData]
    }
</script>