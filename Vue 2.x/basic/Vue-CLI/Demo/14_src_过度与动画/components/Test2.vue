<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h2 v-show="!isShow" :key="1">你好啊</h2>
            <h2 v-show="isShow" :key="2">哈哈哈</h2>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data(){
            return {
                isShow: true,
            }
        }
    }
</script>

<style scoped>
    h2{
        background-color: aquamarine;
    }

    /* 进入的起点 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%)
    }
    .hello-enter-active,.hello-leave-active{
        transition: 1s linear;
    }
    /* 进入的终点 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0)
    }

</style>