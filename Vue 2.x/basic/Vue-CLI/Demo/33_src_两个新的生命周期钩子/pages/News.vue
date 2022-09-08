<template>
    <div>
        <ul>
            <li>11111<input type="text"></li>
            <li>22222<input type="text"></li>
            <li>33333<input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'News',
        // 两个新的生命周期钩子
        
        activated() {
            console.log('News组件被激活了')
        },
        deactivated() {
            console.log('News组件失活了')
        },
    }
</script>

<style scoped>

</style>