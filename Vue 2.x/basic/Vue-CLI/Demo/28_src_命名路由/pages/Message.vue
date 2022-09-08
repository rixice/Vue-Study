<template>
    <div>
        <li v-for="m in messageList" :key="m.id">

            <router-link :to="{
                name: 'msgDetail',
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