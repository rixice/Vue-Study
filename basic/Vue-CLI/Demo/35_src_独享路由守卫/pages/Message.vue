<template>
    <div>
        <br>
        <li v-for="m in messageList" :key="m.id">
            <router-link :to="{
                name: 'msgDetail',
                query: {
                    id: m.id,
                    title: m.title
                }
            }">
                {{m.title}}
            </router-link><span>&nbsp;&nbsp;</span>
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
        </li>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    export default {
        name: 'Message',
        data(){
            return {
                messageList: [
                    {id: nanoid(), title:'消息001'},
                    {id: nanoid(), title:'消息002'}
                ]
            }
        },
        methods: {
            // 编程式路由导航：不借助router-link实现路由跳转
            pushShow(m){
                this.$router.push({
                    name: 'msgDetail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                })
            },
            replaceShow(m){
                this.$router.replace({
                    name: 'msgDetail',
                    query: {
                        id: m.id,
                        title: m.title,
                    }
                })
            }
        },
        beforeDestroy() {
            console.log('Messsage被销毁了')
        },
    }
</script>

<style>

</style>