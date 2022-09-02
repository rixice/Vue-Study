<template>
    <div>
        <h2>我是Home</h2>
        <router-link to='/home/news'><button>News</button></router-link>
        <router-link to="/home/message"><button>Messages</button></router-link>
        <div>
            <router-view></router-view>
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