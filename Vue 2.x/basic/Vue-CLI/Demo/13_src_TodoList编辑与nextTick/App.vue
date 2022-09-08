<template>
    <div id="main-container">
        <AddTodo 
            @addTodo="addTodo">
        </AddTodo>

<!-- 
    changeTodo和deleteTodo都是给Item的，逐层传递的数据 就可以用 全局事件总线
 -->
        <TodoList 
            :todoList="todoList" >
        </TodoList>

        <hr>

        <TodoFooter 
            @handleAll="handleAll"
            :todoList="todoList"
            @delAll="delAll">
        </TodoFooter>
    </div>
</template>

<script>
// 引入组件
import TodoFooter from "./components/TodoFooter.vue"
import TodoList from "./components/TodoList.vue"
import AddTodo from "./components/AddTodo.vue"

export default {
    name:"App",
    components:{
        AddTodo,
        TodoFooter,
        TodoList,
    },
    mounted() {
        // 绑定自定义事件
        this.$bus.$on('changeDone', this.changeDone)
        this.$bus.$on('deleteTodo', this.deleteTodo)
        this.$bus.$on('editTodo', this.editTodo)
    },
    data(){
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [],
        }
    },
    watch: {
        todoList:{
            deep: true, // 开启深度监视，避免刷新后，勾选消失
            handler(newVal){
              localStorage.setItem('todoList', JSON.stringify(newVal))  
            }
        }
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj){
            this.todoList.unshift(todoObj)
        },
        // 勾选or取消勾选一个todo (methods实现)
        changeDone(id){
            for(var i=0;i<this.todoList.length; i++){
                if (this.todoList[i].id === id){
                    this.todoList[i].isDone = !this.todoList[i].isDone
                }
            }
        },
        // 删除单个todo
        deleteTodo(id){
            if (confirm('确认删除吗？')){
                for(var i=0;i<this.todoList.length;i++){
                    if (this.todoList[i].id === id){
                        this.todoList.splice(i,1)
                    }
                }
            } 
        },
        // 勾选全部todo (check为Footer里isAll的值)
        handleAll(check){
            if (check){
                for (var i=0;i<this.todoList.length;i++){
                    this.todoList[i].isDone = false
                }
            }else{
                for (var n=0;n<this.todoList.length;n++){
                    this.todoList[n].isDone = true
                }
            }
        },
        // 清除所有勾选的todo
        delAll(){
            this.todoList = this.todoList.filter((item)=>{
                return item.isDone === false
            })
        },
        // 编辑Todo
        editTodo(todoId, newTodo){
            for(var i=0;i<this.todoList.length;i++){
                if (this.todoList[i].id === todoId){
                    this.todoList[i].todoName = newTodo
                }
            }
        }
    },
    beforeDestroy() {
        // 销毁前解绑自定义事件
        this.$bus.$off('changeDone')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('editTodo')
    },
}
</script>

<style lang="less">
    #main-container{
        position: absolute;
        top: 50px; bottom: 50px; left: 0; right: 0;
        margin: auto;
        border: 2px solid black;
        border-radius: 8px;
        width: 700px;
        height:auto;
        text-align: center;
    }

    .btn{
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        
    }

    .btn-edit{
        margin-right: 10px;
    }
</style>
