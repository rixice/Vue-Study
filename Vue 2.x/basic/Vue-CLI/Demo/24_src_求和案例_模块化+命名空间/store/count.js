// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions:{
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
    },
    mutations:{
        ADD(state, value){
            state.sum += value
        },
        SUB(state, value){
            state.sum -= value
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
    state:{
        sum: 0,     // 当前的和
        school: '鱼窝头',
        subject: '计算机',
    },
}

export default countOptions