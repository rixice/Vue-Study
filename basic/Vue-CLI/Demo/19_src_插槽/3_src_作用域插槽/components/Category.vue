<template>
    <div class="category">
        
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽（挖个坑，等待组件使用者进行填充） -->
        <slot :gameData="games" :msg="msg">[提示1：使用者没有传递具体的结构给我]</slot>
        <!-- <slot name="footer">[提示2：使用者没有传递具体的结构给我]</slot> -->

    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return {
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
                msg:'Hello World'
            }
        },
        props:['title']
    }
</script>

<style>
    .category{
        background-color: rgb(125, 176, 196);
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }

    /* li{
        text-indent: -10px;
    } */

</style>