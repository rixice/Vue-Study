<!-- 
    总结TodoList案例：
        1.组件化编码流程：
            (1).拆分静态组件：组件要按照 功能点 拆分、命名不要与html元素冲突；
            (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用；
                如果是一些组件在用，放在它们共同的父组件上；
            
            (3).实现交互：从绑定事件开始；

        2.props适用于：
            (1).父组件 ==> 子组件 通信；
            (2).子组件 ==> 父组件 通信（要求 父先给子 一个函数）；
        
        3. 使用v-model时不要直接绑定props传过来的值！

        4. props传过来的若是对象类型的值，修改对象中的属性时Vue会报错；
 -->
<template>
    <div id="main-container">
        <AddTodo 
            :addTodo="addTodo">
        </AddTodo>

        <TodoList 
            :todoList="todoList" 
            :changeDone="changeDone"
            :deleteTodo="deleteTodo">
        </TodoList>
        <hr>
        <TodoFooter 
            :handleAll="handleAll"
            :todoList="todoList"
            :delAll="delAll">
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
        }
    },
}
</script>

<style>
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
</style>
