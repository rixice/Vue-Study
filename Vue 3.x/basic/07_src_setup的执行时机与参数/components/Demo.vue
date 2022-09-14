<template>
    <h1>一个人的信息</h1>
    <h3>姓名: {{data.name}} | 年龄: {{data.age}}</h3>
    <button @click="testHello">测试Hello事件</button>
    <slot name="haha"></slot>
</template>

<!-- 
    setup 的两个注意点
        setup执行的时机：
            在beforeCreate之前执行一次，this是undefined
        
        setup的参数：
            props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
            context：上下文对象
                attrs：值为对象，包含：组件外部传递过来，但未在props中声明的属性，相当于this.$attr
                slots：收到的插槽内容，相当于this.$slot（注意：Vue3中必须使用v-slot）
                emit：分发自定义事件的函数，相当于
 -->

<script>
    import {reactive} from 'vue'
    export default {
        name: 'Demo',
        props: ['name'],
        emits: ['hello'],   // 不声明的话会有警告，但不影响使用
        setup(props, context){
            let data = reactive({
                // name: '张三',
                name: props.name,
                age: 18
            })

            function testHello(){
                context.emit('hello')
            }

            return {data, testHello}
        }
    }
</script>

<style>

</style>
  