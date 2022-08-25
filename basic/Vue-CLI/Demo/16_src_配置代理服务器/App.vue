<!-- 
    Vue-Cli配置代理：
    
    方法一：在 Vue.config.js 中添加如下配置：
        devServer:{
            proxy: '<url>'
        }

        1.优点：配置简单，请求资源时直接发给前端8080即可；
        2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理；
        3.若请求了前端不存在资源，则转发给服务器（优先匹配前端资源）

    方法二：配置具体代理规则
        devServer: {
          proxy: {
            '/hello': {     // 匹配所有以'/hello'开头的请求路径
                target: 'http://localhost:5000',    // 代理目标的基础路径
                pathRewrite:{'^/hello':''},
                ws: true, // 用于支持web socket（缺省为true）
                changeOrigin: true  // 用于控制请求头中的host值（缺省为true）
            }
          }
        }
 -->

<template>
    <div>
        <button @click="getMethod">点我发送get请求</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"App",
    methods: {
        getMethod(){
            axios.get('http://localhost:8080/hello/students').then(
                response => {
                    console.log("请求成功", response.data)
                },
                error => {
                    console.log("请求失败", error.message)
                }
            )
        }
    },
}
</script>

<style lang="less">
</style>
