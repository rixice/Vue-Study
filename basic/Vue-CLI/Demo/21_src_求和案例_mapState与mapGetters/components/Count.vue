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
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="checkOddToAdd">当前求和为奇数再加</button>
        <button @click="addWait">等一等再加</button>
    </div>
</template>

<script>
    import { mapState, mapGetters } from "vuex";

    export default {
        name: "Category",
        data(){
            return {
                num: 1,     // 用户选择的数组
            }
        },
        methods: {
            // 没有业务逻辑，可以直接越过dispatch，使用commit
            increment(){
                // this.$store.dispatch('add', this.num)
                this.$store.commit('ADD', this.num)
            },
            decrement(){
                // this.$store.dispatch('sub', this.num)
                this.$store.commit('SUB', this.num)
            },
            checkOddToAdd(){
                this.$store.dispatch('checkOddToAdd', this.num) 
            },
            addWait(){
                this.$store.dispatch('addWait', this.num)
            }
        },
        computed:{
            // 靠程序员自己亲自写的计算属性
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // },

            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum: 'sum',school: 'school',subject: 'subject'}),
            
            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','school','subject']),
            //////////////////////////////////////
            // bigSum(){
            //     return this.$store.getters.bigSum
            // },

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