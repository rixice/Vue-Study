<template>
    <div class="son">
        <h4>我是Son组件 (孙子)</h4>
    </div>
</template>

<script>
    export default {
        name: 'Son',
        setup(){
            return {

            }
        }
    }
</script>

<style scoped>
    .son{
        background-color: rosybrown;
        padding: 20px;
    }
</style>