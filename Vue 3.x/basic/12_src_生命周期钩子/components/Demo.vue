<template>
    <h2>当前求和：{{sum}}</h2>
    <button @click="sum++">点我++</button>
</template>

<!-- 

 -->

<script>
    import {ref, onBeforeMount} from 'vue'
    export default {
        name: 'Demo',
        setup(props, context){

            let sum = ref(0)

            // 通过组合式API的形式去使用生命周期钩子 (不推荐)
            // beforeCreate、created 不能在这里使用
            // 其余改名：beforeMount ===> onBeforeMount
            //          mounted ===> onMounted

            // 举例：(注意先import)
            // onBeforeMount(() => {
            //     console.log('芜湖')
            // })

            return { sum }
        },
        // 通过配置项的形式使用生命周期钩子
        beforeCreate(){
            console.log('beforeCreate')
        },
        created(){
            console.log('created')
        },
        beforeMount(){
            console.log('beforeMount')
        },
        mounted(){
            console.log('mounted')
        },
        beforeUpdate(){
            console.log('beforeUpdate')
        },
        updated(){
            console.log('updated')
        },
        beforeUnmount(){
            console.log('beforeUnmount')
        },
        unmounted(){
            console.log('unmounted')
        }
    }
</script>

<style>

</style>
  