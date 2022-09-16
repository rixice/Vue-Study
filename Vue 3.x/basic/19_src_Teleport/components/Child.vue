<template>
    <div class="child">
        <h4>我是Child组件 (儿子)</h4>
        <Son></Son>
    </div>
</template>

<script>
    import Son from './Son.vue';
    export default {
    name: "Child",
    setup() {
        
    },
    components: { Son }
}
</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
    }
</style>