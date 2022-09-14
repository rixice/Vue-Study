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
            let person = ref({
                name: '张三',
                age: 18,
                job: {
                    j1:{
                        salary: 20,
                    }
                }
            })

            watch(sum, (newV, oldV)=>{
                console.log('sum变了', newV, oldV)
            })

            watch(person, (newV, oldV)=>{
                console.log('person变了', newV, oldV)
            }, {deep: true})

            // watch(person.value, (newV, oldV)=>{
            //     console.log('person变了', newV, oldV)
            // })

            return { sum, msg, person }
        }
    }
</script>

<style>

</style>
  