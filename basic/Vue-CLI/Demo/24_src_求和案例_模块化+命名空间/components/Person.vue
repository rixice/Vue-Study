<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red">Count组件的求和：{{sum}}</h3>
        <h3>列表中第一个人的名字：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>


<script>
    import { nanoid } from 'nanoid';
    export default {
        name: 'Person',
        data(){
            return {
                name: '',
            }
        },
        computed:{
            personList(){
                return this.$store.state.personOptions.personList
            },
            sum(){
                return this.$store.state.countOptions.sum
            },
            firstPersonName(){
                return this.$store.getters['personOptions/firstPersonName']
            }
        },
        methods:{
            addPerson(){
                // const personObj = {
                //     id: nanoid(),
                //     name: this.name
                // }
                
                // 添加一个姓王的人
                // this.$store.dispatch('personOptions/addPersonWang', personObj)

                // 添加一个人
                // this.$store.commit('personOptions/ADD_PERSON',personObj)

                // 从服务器获取人名添加
                this.$store.dispatch('personOptions/addPersonServer')

                this.name = ''
            }
        }
    }
</script>

<style>

</style>