<template>
    <div class="child">
        <h4>我是Child组件 (儿子)</h4>
    </div>
</template>

<script>
    export default {
        name: 'Child',
        setup(){
            return {

            }
        }
    }
</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
    }
</style>