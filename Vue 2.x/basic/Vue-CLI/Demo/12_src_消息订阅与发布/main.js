// 消息订阅与发布：在终端使用 npm i pubsub-js 安装

// 这是一种组件间通信的方式，适用于任意组件间通信

// 引入：import pubsub from 'pubsub-js'

// 接收/提供数据详情见Student、School组件

// 最好在beforeDestroy()中，用pubsub.unsubscribe(pub_id)去取消订阅
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#root",
  render: h => h(App),
})
