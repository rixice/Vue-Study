<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h2 v-show="isShow">你好啊</h2>
        </transition>
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
        background-color: aquamarine
    }

    .hello-enter-active{
        animation: hello 1s linear;
    }
    .hello-leave-active{
        animation: hello 1s reverse;
    }

    @keyframes hello {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px)
        }
    }
</style>