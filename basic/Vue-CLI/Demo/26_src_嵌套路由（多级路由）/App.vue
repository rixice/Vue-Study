<template>
    <div id="app">
        <Banner></Banner>
        <div id="leader">
            <router-link active-class="active" to="/home">Home</router-link><br>
            <router-link active-class="active" to="/about">About</router-link>
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
