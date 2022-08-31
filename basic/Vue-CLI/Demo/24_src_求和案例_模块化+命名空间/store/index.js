// 模块化+命名空间：
// 目的：让代码更好维护，让多种数据分类更加明确；

// 该文件用于创建Vuex中，最为核心的store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import personOptions from './person'
import countOptions from './count'

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})
