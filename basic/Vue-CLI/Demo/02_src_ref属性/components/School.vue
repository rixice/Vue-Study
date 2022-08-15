<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{schoolName}}</h2>
        <h2>学校地址: {{schoolAdr}}</h2>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "School",
        data(){
            return {
                schoolName: "鱼窝头",
                schoolAdr: "广东",
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
        margin-top: 100px
    }
</style>