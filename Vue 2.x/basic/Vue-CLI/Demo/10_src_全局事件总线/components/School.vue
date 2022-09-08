<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{name}}</h2>
        <h2 class="hello">学校地址: {{adr}}</h2>
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
        mounted() {
            this.$bus.$on('hello', (data)=>{
                this.name = data
            })
        },
        // 用完了该组件，记得单独销毁该组件的事件总线，切记勿影响其他组件
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<!-- less可以嵌套写样式 -->
<style lang="less">
    .demo{
        background-color: orange;
        .hello{
            font-size: 30px;
        }
    }
</style>