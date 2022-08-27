<template>
    <div id="app">
        <Search>

        </Search> 

        <List>

        </List>
    </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
    name: "App",
    components: { Search, List }
}
</script>

<style lang="less">
    #app{
        text-align: center;
    }
</style>
