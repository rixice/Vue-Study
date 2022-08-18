<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{name | sliceStr}}</h2>
        <h2>学校地址: {{adr}}</h2>
        <button @click="test">点我测试Hello方法</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data(){
            return {
                name: "鱼窝头123321",
                adr: "广东",
            }
        },
        methods: {
            test(){
                this.hello()
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange
    }
</style>