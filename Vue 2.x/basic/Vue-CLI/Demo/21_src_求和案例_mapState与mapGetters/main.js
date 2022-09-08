import Vue from 'vue'

import App from './App.vue'

// 引入store
import store from './store/index'

Vue.config.productionTip = false

Vue.use(store)

new Vue({
  el: "#root",
  render: h => h(App),
  store,  // store:store简写
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
