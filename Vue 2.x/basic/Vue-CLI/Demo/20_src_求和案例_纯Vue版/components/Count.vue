<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="checkOddToAdd">当前求和为奇数再加</button>
        <button @click="wait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return {
                sum: 0,     // 当前的和
                num: 1,     // 用户选择的数组
            }
        },
        methods: {
            increment(){
                this.sum += this.num
            },
            decrement(){
                this.sum -= this.num
            },
            checkOddToAdd(){
                if(this.sum%2 != 0){
                    this.sum += this.num
                }
            },
            wait(){
                setTimeout(()=>{
                    this.sum += this.num
                },500)
            }
        },
    }
</script>

<style>


</style>