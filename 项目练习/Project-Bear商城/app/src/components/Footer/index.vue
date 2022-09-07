<template>
    <div class="footer">
        <div class="container">

            <div class="footerList">

                <div class="footerItem">
                    <h4>购物指南</h4>
                    <ul class="footerItemCtn">
                        <li>购物流程</li>
                        <li>会员介绍</li>
                        <li>生活旅行/团购</li>
                        <li>常见问题</li>
                        <li>购物指南</li>
                    </ul>
                </div>

                <div class="footerItem">
                    <h4>配送方式</h4>
                    <ul class="footerItemCtn">
                        <li>上门自提</li>
                        <li>211限时达</li>
                        <li>配送服务查询</li>
                        <li>配送费收取标准</li>
                        <li>海外配送</li>
                    </ul>
                </div>

                <div class="footerItem">
                    <h4>支付方式</h4>
                    <ul class="footerItemCtn">
                        <li>货到付款</li>
                        <li>在线支付</li>
                        <li>分期付款</li>
                        <li>邮局汇款</li>
                        <li>公司转账</li>
                    </ul>
                </div>

                <div class="footerItem">
                    <h4>售后服务</h4>
                    <ul class="footerItemCtn">
                        <li>售后政策</li>
                        <li>价格保护</li>
                        <li>退款说明</li>
                        <li>返修/退换货</li>
                        <li>取消订单</li>
                    </ul>
                </div>

                <div class="footerItem">
                    <h4>特色服务</h4>
                    <ul class="footerItemCtn">
                        <li>夺宝岛</li>
                        <li>DIY装机</li>
                        <li>延保服务</li>
                        <li>商城E卡</li>
                        <li>商城通信</li>
                    </ul>
                </div>

                <div class="footerItem">
                    <h4>帮助中心</h4>
                    <img src="./images/help.jpg" alt="" style="width: 100px; height: 100px;">
                </div>

            </div>

            <div class="aboutList">
                <div class="typeList">
                    <a href="">关于我们</a><div class="sep"></div>
                    <a href="">联系我们</a><div class="sep"></div>
                    <a href="">商家入驻</a><div class="sep"></div>
                    <a href="">营销中心</a><div class="sep"></div>
                    <a href="">友情链接</a>
                </div> 
                <div class="adr">
                    <p>地址：XX市XX区XX科技园综合楼X层</p>
                    <p>京ICP备19006430号</p>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        mounted(){
            console.log(this.$router)
        }
    }
</script>

<style lang="less" scoped>
    h4 {
        white-space: nowrap;
    }
    .sep {
        height: 15px; border: 0.5px solid grey; opacity: 0.5; margin-top: 0px; margin-left: 10px; margin-right: 10px;
    }
    .footer {
        display: flex;
        vertical-align: auto;
        flex-flow: wrap;
        width: 100%;
    }
    .container {
        display: flex;
        vertical-align: auto;
        justify-content: center;
        flex-flow: wrap;
        width: 100%;
        height: 400px;
        background-color: rgb(227, 225, 225);
    }
    .footerList {
        display: flex;
        vertical-align: auto;
        justify-content: center;
        width: 100%;
        height: 100px;
        .footerItem {
            margin-left: 100px;
            .footerItemCtn {
                margin-top: -10px;
                margin-left: -40px;
                list-style: none;
                white-space: nowrap;
            }
            .footerItemCtn li {
                font-size: 10px;
                padding-top: 5px;
                white-space: nowrap;
            }
        }
    }
    .typeList {
        margin-top: 150px;
        display: flex;
        justify-content: center;
        vertical-align: auto;
        font-size: 14px;
        height: 20px;
    }
    .adr {
        font-size: 14px;
        text-align: center;
    }
</style>