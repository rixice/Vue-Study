<template>
    <div class="child">
        <h4>我是Child组件 (儿子)</h4>
        {{sum}}
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
    name: "Child",
    async setup() {
        let sum = ref(0)
        let p =  new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({sum})
            }, 1000);
        })
        return await p
    },
}
</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
    }
</style>