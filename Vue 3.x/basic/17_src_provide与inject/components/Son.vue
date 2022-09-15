<template>
    <div class="son">
        <h4>我是Son组件 (孙子)</h4>
    </div>
</template>

<script>
    import { inject } from 'vue';
    export default {
        name: 'Son',
        setup(){
            let car = inject('car')
            console.log(car)
        }
    }
</script>

<style scoped>
    .son{
        background-color: rosybrown;
        padding: 20px;
    }
</style>