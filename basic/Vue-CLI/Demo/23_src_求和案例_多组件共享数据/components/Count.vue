<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍：{{bigSum}}</h3>
        <h4 style="color: red">Person组件的总人数是：{{personList.length}}</h4>
        <hr>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="checkOddToAdd(num)">当前求和为奇数再加</button>
        <button @click="addWait(num)">等一等再加</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

    export default {
        name: "Category",
        data(){
            return {
                num: 1,
            }
        },
        methods: {
            ...mapMutations({increment: 'ADD', decrement: 'SUB'}),

            ...mapActions(['checkOddToAdd', 'addWait'])
        },
        computed:{   
            ...mapState(['sum','school','subject', 'personList']),

            ...mapGetters(['bigSum'])
        },
        mounted() {
            mapState({
                sum: 'sum',
                school: 'school',
                subject: 'subject'
            }),
            mapGetters({
                bigSum: 'bigSum',
            })
        },
    }
</script>

<style>

</style>