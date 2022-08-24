<template>
    <div id="itemCtn">
        <li>
            <input type="checkbox" :checked='todo.isDone' @click="changeDone(todo.id)">
            <!-- 如下代码也能实现，但不建议使用（因为违反原则修改了props） -->
            <!-- <input type="checkbox" v-model="todo.isDone"> -->
            <span v-show="!todo.isEdit">{{todo.todoName}}</span>
            <input 
                type="text" 
                ref="inputTitle"
                :value="todo.todoName" 
                v-show="todo.isEdit"
                @blur="handleBlur(todo, $event)"
            >
            <button class="btn btn-delete" @click="deleteTodo(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="editTodo(todo)">编辑</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        // 声明接收todos对象
        props:['todo'],
        methods: {
            // 勾选Todo
            changeDone(id){
                this.$bus.$emit('changeDone', id)
                console.log(this)
            },
            // 删除Todo
            deleteTodo(id){
                this.$bus.$emit('deleteTodo', id)
            },
            // 编辑Todo
            editTodo(todo){
                // this.$set(todo, 'isEdit', true) // 动态添加属性，并且被Vue监视（万一后端传来的时候没有该属性）
                todo.isEdit = true                  // 在AddTodo时，就初始化好这个属性
                
                // nextTick：在下一次 DOM更新结束后 执行其回调函数
                // 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，调用$nextTick()
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()   // ref获取页面DOM，执行自动聚焦
                })
            },

            // 真正执行修改逻辑
            handleBlur(todo, event){
                todo.isEdit = false
                if (event.target.value == ''){
                    return alert('不允许为空！！！')
                }else{
                    this.$bus.$emit('editTodo', todo.id, event.target.value)
                }
            }
        },
    }
</script>


<style scoped>
    .todomain li{
        width: 500px;
        height: 30px;
        vertical-align: middle;
        font-size: 16px;
        margin-top: 0px;
        border: 1px solid gray;
        border-radius: 4px;
    }

    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:hover{
        background-color: rgb(207, 198, 198)
    }

    li:hover button{
        display: block;
    }
</style>
