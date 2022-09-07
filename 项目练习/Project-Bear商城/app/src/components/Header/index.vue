<template>
    <div class="top">

        <div class="topContainer">
            <div class="loginList">
                <p>Bear商城欢迎您！</p>
                <p style="margin-left: 20px">
                    <span>请</span>
                    <a @click="goLogin" style="cursor: pointer">登录</a>
                    <div class="sep1"></div>
                    <a @click="goRegister" style="cursor: pointer" class="register">免费注册</a>
                </p>
            </div>

            <div class="typeList">
                <a href="">我的订单</a><div class="sep2"></div>
                <a href="">我的购物车</a><div class="sep2"></div>
                <a href="">企业采购</a><div class="sep2"></div>
                <a href="">关注</a>
            </div>
        </div>

        <div class="bottomContainer">
            <div id="logo" style="cursor: pointer" @click="goHome">
                <p style="font-size: 40px">Bear商城</p>
            </div>
            
            <div class="search">
                <input type="text" v-model="keyWord">
                <button class="searchBtn" @click="goSearch">搜索</button>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                keyWord: ''
            }
        },
        methods: {
            goLogin(){
                this.$router.push('Login')
            },
            goRegister(){
                this.$router.push('Register')
            },
            goSearch(){
                this.$router.push(
                    {
                        name: 'Search',
                        query: {
                            keyWord: this.keyWord
                        }
                    }
                )
            },
            goHome(){
                this.$router.push('Home')
            },
        }
    }
</script>

<style lang="less" scoped>
    .sep1 {
        height: 15px; border: 0.5px solid grey; opacity: 0.5; margin-top: 12px; margin-left: 5px;
    }
    .sep2 {
        height: 15px; border: 0.5px solid grey; opacity: 0.5; margin-top: 0px; margin-left: 5px; margin-right: 5px;
    }
    .top{
        width: 100%;
        display: flex;
        vertical-align: auto;
        justify-content: center;
        flex-flow: wrap;
    }
    .bottomContainer{
        display: flex;
        vertical-align: auto;
        justify-content: center;
        margin-top: 60px;
        #logo {
            display: flex;
            vertical-align: auto;
        }
        .search{
            display: flex;
            vertical-align: auto;
            margin-left: 300px;
            margin-top: 50px;
            height: 35px;
            input {
                border: 2px solid rgb(232, 110, 80);
                width: 450px;
                outline: none;
            }
            .searchBtn{
                border: 0px;
                border-radius: 0px;
                cursor: pointer;
                background-color: rgb(232, 110, 80);
                color: white;
                flex-wrap: nowrap;
            }
        }
    }
    .topContainer{
        display: flex;
        vertical-align: auto;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: rgb(227, 225, 225);
        flex-wrap: nowrap;
    }
    .loginList{
        display: flex;
        vertical-align: auto;
        // margin-left: 300px;
        p {
            font-size: 12px;
        }
    }
    .register{
        margin-top: 12px;
        margin-left: 5px;
        font-size: 12px;
    }

    .typeList{
        display: flex;
        vertical-align: auto;
        margin-left: 750px;
        margin-top: 12px;
        a {
            font-size: 12px;
        }
    }
</style>