<template>
    <div id="footerCtn" v-if="todoList.length">
        <input type="checkbox" :checked="isAll" @click="handleAll">
        <span>已完成 {{doneTotal}}</span> / 全部 {{todoList.length}}
        <button id="btn btn-deleteDone" @click="delAll">删除已完成的任务</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoFooter', 
        props: ['todoList'],
        methods:{
            handleAll(){
                this.$emit('handleAll', this.isAll)
            },
            delAll(){
                this.$emit('delAll')
            }
        },
        computed:{
            doneTotal(){
                var doneArr = this.todoList.filter((item)=>{
                    return item.isDone === true
                })
                return doneArr.length
            },
            isAll(){
                return this.doneTotal === this.todoList.length && this.todoList.length > 0
            }
        },
    }
</script>

<style scoped>

</style>
