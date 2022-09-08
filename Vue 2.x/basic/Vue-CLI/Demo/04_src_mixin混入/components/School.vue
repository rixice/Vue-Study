<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{adr}}</h2>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    import {showName,retData} from '../mixin'
    export default {
        name: "School",
        data(){
            return {
                name: "鱼窝头",
                adr: "广东",
            }
        },
        mixins:[showName,retData]
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange
    }
</style>