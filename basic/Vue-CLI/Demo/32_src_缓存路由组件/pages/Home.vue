<template>
    <div>
        <h2>我是Home</h2>
        <router-link to='/home/news'><button>News</button></router-link>
        <router-link to="/home/message"><button>Messages</button></router-link>
        <div>
            <!-- include中的内容，是 组件名 ！！！ -->
            <!-- 作用：让不展示的路由组件保持挂载，不被销毁 -->
            <keep-alive :include="['News','Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Home'
    }
</script>

<style>

</style>