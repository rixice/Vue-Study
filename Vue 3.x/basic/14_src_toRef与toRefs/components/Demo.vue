<template>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{salary}}K</h2>
    <button @click="name+='!'">姓名修改</button>
    <button @click="age++">年龄修改</button>
    <button @click="salary++">涨薪</button>
</template>

<!-- 
    toRef
        作用：创建一个ref对象，其value值指向另一个对象中的某个属性
        语法：const name = toRef(person, 'name')
        应用：要将响应式对象中的某个属性单独提供给外部使用时
        扩展：toRefs 与 toRef 功能一致，但可批量创建
 -->

<script>
    import {reactive, toRef, toRefs} from 'vue'
    export default {
        name: 'Demo',
        setup(props, context){

            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    j1:{
                        salary: 20,
                    }
                }
            })

            // const x = toRefs(person)

            return {
            //     name: toRef(person, 'name'),
            //     age: toRef(person, 'age'),
            //     salary: toRef(person.job.j1, 'salary')
            ...toRefs(person),   // 用 ... 将对象中的键值对摊开在这
            ...toRefs(person.job.j1)
            }
        }
    }
</script>

<style>

</style>
  