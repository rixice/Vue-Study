<template>
    <div class="top">
        <div class="topContainer">

            <div class="loginList">
                <p>Bear商城欢迎您！</p>
                <p style="margin-left: 20px">
                    <span>请</span>
                    <a href="">登录</a>
                    <div class="sep1"></div>
                    <a href="" class="register">免费注册</a>
                </p>
            </div>
            
            <div class="typeList">
                <a href="">我的订单</a><div class="sep2"></div>
                <a href="">我的购物车</a><div class="sep2"></div>
                <a href="">企业采购</a><div class="sep2"></div>
                <a href="">关注</a>
            </div>

        <div class="bottomContainer">
            <div id="logo">
                <p style="font-size: 40px">Bear商城</p>
            </div>
            
            <div class="search">
                <input type="text">
                <button class="searchBtn">搜索</button>
            </div>
        </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        
    }
</script>

<style lang="less" scoped>
    a {text-decoration: none; white-space: nowrap;}
    p {white-space: nowrap;}
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
    }
    .bottomContainer{
        display: flex;
        vertical-align: middle;
        margin-top: 60px;
        #logo {
            display: flex;
            vertical-align: middle;
            margin-left: -100px;
        }
        .search{
            display: flex;
            vertical-align: middle;
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
            }
        }
    }
    .topContainer{
        display: flex;
        vertical-align: auto;
        width: 100%;
        height: 40px;
        background-color: rgb(227, 225, 225);
        flex-wrap: wrap;
    }
    .loginList{
        display: flex;
        vertical-align: auto;
        margin-left: 300px;
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
        position: absolute;
        display: flex;
        vertical-align: auto;
        margin-left: 1200px;
        margin-top: 12px;
        a {
            font-size: 12px;
        }
    }
</style>