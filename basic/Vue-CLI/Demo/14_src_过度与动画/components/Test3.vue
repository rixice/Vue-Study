<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            name="animate__animated animate__bounce" appear
            enter-active-class="animate__swing"
            leave-active-class="animate__fadeOutTopRight"
        >
            <h2 v-show="!isShow" :key="1">你好啊</h2>
            <h2 v-show="isShow" :key="2">哈哈哈</h2>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'
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


</style>