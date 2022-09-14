<template>
    <h2>当前求和：{{sum}}</h2>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>当前的信息：{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}</h2>
    <button @click="person.name+='!'">姓名修改</button>
    <button @click="person.age++">年龄修改</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>



<script>
    import {ref, reactive, watch} from 'vue'
    export default {
        name: 'Demo',
        setup(props, context){

            let sum = ref(0)
            let msg = ref('你好')
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1:{
                        salary: 20,
                    }
                }
            })

            // 情况一：监视ref所定义的响应式数据
            watch(sum, (newValue, oldValue)=>{
                console.log('sum变了', newValue, oldValue)
            },{immediate: true})


            // 情况二：监视ref所定义的多个响应式数据 (变化前后的数值也是数组的形式)
            watch([sum, msg], (newValue, oldValue)=>{
                console.log('sum或msg变了', newValue, oldValue)
            },{immediate: true})


            // 情况三：监视reactive所定义的一个响应式数据
            // 注意1: 此处无法正确的获得oldValue
            // 注意2: 强制开启深度监视
            watch(person, (newValue, oldValue)=>{
                console.log('person变了', newValue, oldValue)
            })


            // 情况四：监视reactive所定义的一个响应式数据中的某个属性
            watch([()=>person.age,()=>person.name], (newValue, oldValue)=>{
                console.log('person的age或name变了', newValue, oldValue)
            })

            // 特殊情况
            watch(()=>person.job, (newValue, oldValue)=>{
                console.log('person job里的salary变了', newValue, oldValue)
            }, {deep: true})


            return { sum, msg, person }
        }
    }
</script>

<style>

</style>
  