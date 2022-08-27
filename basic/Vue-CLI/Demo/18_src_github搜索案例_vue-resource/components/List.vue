<template>
    <div class="list">
        <!-- 展示用户列表 -->
        <div class="users" v-show="users.length" v-for="user in users" :key="user.id">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" alt=""><br>
            </a>
            <p>{{user.login}}</p>
        </div>

        <!-- 展示欢迎词 -->
        <div id="welcome" v-show="isWelcome">
            <h2>欢迎使用本页面!</h2>
        </div>

        <!-- 展示加载中 -->
        <div id="loading" v-show="isLoading">
            <h2 style="color:greenyellow">加载中...</h2>
        </div>

        <!-- 展示错误信息 -->
        <div id="error" v-show="isError">
            <h2 style="color: red">{{errMsg}}</h2>
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                users:[],
                isWelcome: true,
                isLoading: false,
                isError: false,
                errMsg:'',
            }
        },
        methods: {
            // 成功获取到用户列表
            getUsers(users){
                this.users = users
                this.isLoading = false   
            },

            // 点击搜索按钮时
            startSearch(loadObj){
                this.isWelcome = false
                this.isError = false
                this.users = []
                this.isLoading = loadObj.isLoading
            },

            // 请求报错，无法获取用户列表
            getError(errMsg){
                this.isWelcome = false
                this.isLoading = false
                this.users = []
                this.isError = true
                this.errMsg = errMsg
            }
        },
        mounted() {
            this.$bus.$on('getUsers', this.getUsers)
            this.$bus.$on('startSearch', this.startSearch)
            this.$bus.$on('getError', this.getError)
        },
    }
</script>

<style>
    /* .list{
        margin: 0 auto;
        width: 1500px;
        height: 700px;
    } */
    
    #welcome{
        font-size: 24px;
    }

    .users{
        display: inline-block;
        margin-top: 50px;
        margin-right: 20px;
        border: 1px solid gray;
    }

    .users img{
        width: 100px;
        height: 100px;
    }

    .users p{
        font-size: 14px;
        font-family: 'Microsoft YaHei';
    }
</style>