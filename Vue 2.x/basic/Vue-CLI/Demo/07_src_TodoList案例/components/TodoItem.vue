<template>
    <div id="itemCtn">
        <li>
            <input type="checkbox" :checked='todo.isDone' @click="changeDone(todo.id)">
            <!-- 如下代码也能实现，但不建议使用（因为违反原则修改了props） -->
            <!-- <input type="checkbox" v-model="todo.isDone"> -->
            <span>{{todo.todoName}}</span>
            <button class="btn btn-delete" @click="deleteTodo(todo.id)">删除</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        // 声明接收todos对象
        props:['todo', 'deleteTodo', 'changeDone']
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
        background-color: gray
    }

    li:hover button{
        display: block;
    }
</style>
