<template>
    <div>
        <h1>Vue Router Demo</h1>
        <br>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下go</button>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        methods: {
            back(){
                this.$router.back()
            },

            forward(){
                this.$router.forward()
            },

            // 往后退2步
            test(){
                this.$router.go(-2)
            }
        },
    }
</script>

<style>

</style>