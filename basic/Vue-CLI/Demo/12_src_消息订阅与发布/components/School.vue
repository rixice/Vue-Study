<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{name}}</h2>
        <h2 class="hello">学校地址: {{adr}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: "School",
        data(){
            return {
                name: "鱼窝头123321",
                adr: "广东",
            }
        },
        methods: {
            // demo(msgName, data){
            //     .....
            // }
        },
        mounted() {
            // this.$bus.$on('hello', (data)=>{
            //     this.name = data
            // })
            
            // 方法一（使用箭头函数调用Vue的this）
            this.pub_id = pubsub.subscribe('hello', (msgName, data1)=>{
                console.log('有人发布了hello消息，hello的回调被执行了')
                this.name = data1
            })
            // 方法二：
            // this.pub_id = pubsub.subscribe('hello', this.demo)
        },
        // 用完了该组件，记得单独销毁该组件的事件总线，切记勿影响其他组件
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pub_id)
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