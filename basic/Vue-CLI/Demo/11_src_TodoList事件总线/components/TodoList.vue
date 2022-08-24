<template>
    <div id="listCtn">
        <ul class="todomain">
            <TodoItem 
                v-for="item in todoList" 
                :todo="item" 
                :key="item.id" >
            </TodoItem>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
    export default {
    name: "TodoList",
    components: { TodoItem },
    props:['todoList']
}
</script>

<style scoped>
    #listCtn{
        width: 100%;
        height: 500px;
        overflow: auto;
        margin-left: 0px;
    }

    .todomain{
        margin-left: 60px;
        text-align: left;
        list-style-type: none;
    }
</style>
