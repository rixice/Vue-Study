// 该文件用于创建Vuex中，最为核心的store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 准备actions —— 用于响应组件中的动作
const actions = {
    // add(context, value){
    //     context.commit('ADD', value)
    // },
    
    // sub(context, value){
    //     context.commit('SUB', value)
    // },

    checkOddToAdd(context, value){
        if (context.state.sum % 2 != 0){
            context.commit('ADD', value)
        }
    },

    addWait(context, value){
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500);
    }
}

// 准备mutations —— 用于操作数据(state)
const mutations = {
    ADD(state, value){
        state.sum += value
    },
    SUB(state, value){
        state.sum -= value
    },
    ADD_PERSON(state, value){
        state.personList.unshift(value)
    }
}

// 准备state —— 用于存储数据
const state = {
    sum: 0,     // 当前的和
    school: '鱼窝头',
    subject: '计算机',
    personList: [{
        id: '001', name: '张三' //初始值
    }],
}

// getters —— 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

Vue.use(Vuex)
// 创建并暴露store
export default new Vuex.Store({
    // actions: actions,
    // mutations: mutations,
    // state: state,
    // 同名简写
    actions, mutations, state, getters
})
