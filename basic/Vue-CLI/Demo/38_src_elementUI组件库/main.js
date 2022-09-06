import Vue from 'vue'

import App from './App.vue'

/////////////////完整引入//////////////////

// 引入Element UI组件库
// import ElementUI from 'element-ui'
// 引入Element UI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

/////////////////按需引入//////////////////
import {Button, DatePicker} from 'element-ui'

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);
// Vue.use(ElementUI)

new Vue({
  el: "#root",
  render: h => h(App),
})
