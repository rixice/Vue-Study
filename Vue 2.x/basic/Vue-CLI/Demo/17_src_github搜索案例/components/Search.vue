<template>
    <div id="search">
        <h3>Search Github Users</h3>
        <div>
            <input type="text" placeholder="输入搜索的用户名" v-model="usrName">&nbsp;
            <button @click="getUsers">Search</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Search',
        data() {
            return {
                usrName:''
            }
        },
        methods: {
            getUsers(){
                this.$bus.$emit('startSearch', {isLoading: true})
                axios.get('https://api.github.com/search/users?q='+this.usrName).then(
                    response => {
                        // console.log('请求成功了', response.data.items)
                        this.$bus.$emit('getUsers', response.data.items)
                    },
                    error => {
                        // console.log('请求失败了', error.message)
                        this.$bus.$emit('getError', error.message)
                    }
                )
            }
        },
    }
</script>

<style>

</style>