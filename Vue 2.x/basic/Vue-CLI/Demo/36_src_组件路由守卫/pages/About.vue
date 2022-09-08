<template>
    <div>
        <h2>我是About</h2>
    </div>
</template>

<script>
    export default{
        name: 'About',
        // 通过路由规则，进入该组件时被调用
        beforeRouteLeave (to, from, next) {
            // ...
        },

        // 通过路由规则，离开该组件时被调用
        beforeRouteEnter (to, from, next) {
            // ...
        }
    }
</script>

<style>

</style>