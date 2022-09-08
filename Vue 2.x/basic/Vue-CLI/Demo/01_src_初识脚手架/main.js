/*
  该文件是整个项目的入口文件
*/

// 引入Vue
import Vue from 'vue'

/*
  关于不同版本的Vue:
    1. vue.js与vue.runtime.xxx.js的区别：
      (1). vue.js是完整版的Vue，包含：核心功能+模板解析器；
      (2). vue.runtime.xxx.js是运行版Vue，只包含核心功能；

    2. 因为没有模板解析器，所以不能使用template，
      需要使用render函数接收到的createElement函数去指定具体内容；
*/

// 引入App，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象——vm
new Vue({
  el: "#root",
  // 下面这行代码，完成了将 App组件放入容器中 的功能
  render: h => h(App),

  // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  // 没有用到this，所以可以写成 =>函数
  // render(createElement) {
  //   console.log("render")
  //   return createElement('h1','你好啊')
  // }

  // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  // =>函数左边有个参数，可以把()省略了
  // render:createElement => {
  //   console.log("render")
  //   return createElement('h1','你好啊')
  // }

  // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  // =>函数的return可以写成以下形式
  // render:createElement => createElement('h1','你好啊')
})
