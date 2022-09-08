<template>
    <div id="app">

        <Category title="游戏">
            <template v-slot="game1">
                <div>
                    <ul>
                        <li v-for="item in game1.gameData" :key="item.index">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </template>
        </Category>

        <Category title="游戏">
            <template v-slot="game2">
                <div>
                    <ol>
                        <li style="color: green" v-for="item in game2.gameData" :key="item.index">
                            {{item}}
                        </li>
                    </ol>
                    <h4>{{game2.msg}}</h4>
                </div>
            </template>
        </Category>

        <Category title="游戏">
            <template v-slot="game3">
                <div>
                    <h4 v-for="item in game3.gameData" :key="item.index">{{item}}</h4>
                </div>
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
