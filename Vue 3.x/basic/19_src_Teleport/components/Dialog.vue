<template>
    <div>
        <button v-if="!isShow" @click="isShow = !isShow">点我弹窗</button>
        <teleport to="body">
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <button @click="isShow = !isShow">关闭按钮</button>
                </div>
            </div>
            
        </teleport>
        
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: 'Dialog',
        setup(){
            let isShow = ref(false)
            return {isShow}
        }
    }
</script>

<style lang="less" scoped>
    .dialog{
        width: 300px;
        height: 150px;
        background-color: greenyellow;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .mask{
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        display: flex;
        vertical-align: auto;
        justify-content: center;
        background-color: gray;
        opacity: 0.5;
    }
</style>