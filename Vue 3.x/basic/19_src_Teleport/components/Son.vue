<template>
    <div class="son">
        <h4>我是Son组件 (孙子)</h4>
        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog.vue';
    export default {
    name: "Son",
    components: { Dialog }
}
</script>

<style scoped>
    .son{
        background-color: rosybrown;
        padding: 20px;
    }
</style>