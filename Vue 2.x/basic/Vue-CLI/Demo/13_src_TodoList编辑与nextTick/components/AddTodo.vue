<template>
    <div id="inputCtn">
        <span>请输入你的任务名称，回车确认</span><br>
        <input type="text" id="addTodo" autofocus @keyup.enter="add">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name: 'AddTodo',
        methods: {
            // 将用户的输入包装成一个todo对象
            add(event){
                // 校验数据
                if (event.target.value == ''){
                    return alert("输入不能为空")
                }
                const todoObj = {id:nanoid(), todoName:event.target.value, isDone: false, isEdit: false}
                // 通知App组件去调用addTodo方法，添加todo
                this.$emit('addTodo',todoObj)
                event.target.value = ''
            }
        },
        // props:['addTodo']
    }
</script>


<style scoped>
    #inputCtn{
        margin-top: 50px;
    }

    #addTodo{
        width: 500px;
        height: 30px;
        font-size: 16px;
        margin-top: 20px;
    }
</style>
