<template>
    <div id="app">
        <Banner></Banner>
        <div id="leader">
            <!-- 
                控制路由跳转时，操作浏览器历史记录的模式
                浏览器的历史记录有两种写入方式：分别为push和replace
                    —— push：追加历史记录
                    —— replace：替换当前记录
                    —— 默认为 push 记录
             -->
            <router-link replace active-class="active" to="/home">Home</router-link><br>
            <router-link replace active-class="active" to="/about">About</router-link>
        </div>

        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue';
    export default {
    name: "App",
    components: { Banner }
}
</script>

<style lang="less">
    .active{
        background-color: aqua;
        color: black;
    }
</style>
