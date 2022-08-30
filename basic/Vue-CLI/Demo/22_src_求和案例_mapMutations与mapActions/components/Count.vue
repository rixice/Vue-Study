<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍：{{bigSum}}</h3>
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
            // 程序员亲自写方法
            // increment(){
            //     // this.$store.dispatch('add', this.num)
            //     this.$store.commit('ADD', this.num)
            // },
            // decrement(){
            //     // this.$store.dispatch('sub', this.num)
            //     this.$store.commit('SUB', this.num)
            // },

            // 借助mapMutations生成对应的方法（方法中会调用commit去联系mutations（对象写法））
            ...mapMutations({increment: 'ADD', decrement: 'SUB'}),

            // 数组写法：需要key-value值一致！

            //////////////////////////////////////////////////////////

            // 程序员亲自写方法
            // checkOddToAdd(){
            //     this.$store.dispatch('checkOddToAdd', this.num) 
            // },
            // addWait(){
            //     this.$store.dispatch('addWait', this.num)
            // }

            // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            // ...mapActions({checkOddToAdd:'checkOddToAdd', addWait: 'addWait'})

            // 数组写法（k-v同名）
            ...mapActions(['checkOddToAdd', 'addWait'])
        },
        computed:{
            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum: 'sum',school: 'school',subject: 'subject'}),
            
            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','school','subject']),

            // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
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