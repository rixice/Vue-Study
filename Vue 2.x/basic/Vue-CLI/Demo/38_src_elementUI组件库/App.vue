<template>
    <div id="app">
        <button>原生的按钮</button>
        <input type="text"><br><br>

        <el-button type="primary">芜湖</el-button><br><br>

        <el-date-picker
            v-model="time"
            type="date"
            placeholder="请选择日期"
        >
        </el-datE-picker>
        
    </div>
</template>

<script>
    export default {
    name: "App",
    data(){
        return {
            time: '',
        }
    }
}
</script>

<style lang="less">
</style>
