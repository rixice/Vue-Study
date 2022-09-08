<template>
    <div id="app">

        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>

        <Category title="游戏">
            <ul slot="center">
                <li v-for="item in games" :key="item.index">
                    {{item}}
                </li>
            </ul>
            <div slot="footer" class="foot">
                <a href="http://www.baidu.com">主机游戏</a>&nbsp;
                <a href="http://www.baidu.com">网络游戏</a>
            </div>  
        </Category>

        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmph.de/big_buck_bunny.mp4"></video>
            <template slot="footer">
                <div style="display: flex; justify-content: space-around;">
                    <a href="http://www.baidu.com">主机游戏</a>
                    <a href="http://www.baidu.com">网络游戏</a>
                    <a href="http://www.baidu.com">主机游戏</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>

    </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
    name: "App",
    components: { Category },
    data(){
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《你好，世界》']
        }
    }
}
</script>

<style lang="less">
    #app, .foot, a, h4{
        display: flex;
        justify-content: space-around;
    }

    img{
        width: 100%;
    }

    video{
        width: 100%;
    }

</style>
