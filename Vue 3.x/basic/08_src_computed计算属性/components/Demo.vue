<template>
    <h1>一个人的信息</h1>
    姓: <input type="text" v-model="data.FirstName"><br>
    名: <input type="text" v-model="data.LastName"><br><br>
    <h2>全名：{{data.FullName}}</h2>
    全名：<input type="text" v-model="data.FullName">
</template>

<script>
    import {reactive, computed} from 'vue'
    export default {
        name: 'Demo',
        setup(props, context){
            let data = reactive({
                FirstName: '张',
                LastName: '三',
            })

            // 计算属性 —— 简写形式 (不考虑计算属性被修改的情况)
            // data.FullName = computed(()=>{
            //     return data.FirstName + '-' + data.LastName
            // })

            // 计算属性 —— 完整写法 (考虑读和写)
            data.FullName = computed({
                get(){
                    return data.FirstName + '-' + data.LastName
                },
                set(value){
                    const nameArry = value.split('-')
                    data.FirstName = nameArry[0]
                    data.LastName = nameArry[1]
                }
            })

            return { data }
        }
    }
</script>

<style>

</style>
  