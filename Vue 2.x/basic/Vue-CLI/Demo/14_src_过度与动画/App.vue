<!-- 
    Vue封装的过度与动画：
        1.作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名；
        2.写法见组件Test*.vue
        3.若有多个元素需要过度，则需要使用: <transition-group>，且每个元素都需要key值
 -->
<template>
    <div id="main-container">
        <Test></Test>
        <Test2></Test2>
        <Test3></Test3>
    </div>
</template>

<script>
// 引入组件
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue';
import Test3 from './components/Test3.vue';

export default {
    name:"App",
    components:{
    Test,
    Test2,
    Test3
},
    data(){
        return {}
    },
}
</script>

<style lang="less">
</style>
