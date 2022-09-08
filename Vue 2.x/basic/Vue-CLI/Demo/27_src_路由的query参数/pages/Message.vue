<template>
    <div>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
        
            <!-- 跳转路由并携带query参数，to的对象写法 -->
            <router-link :to="{
                path: '/home/message/detail',
                query: {
                    id: m.id,
                    title: m.title
                }
            }">
                {{m.title}}
            </router-link>
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
        }
    }
</script>

<style>

</style>