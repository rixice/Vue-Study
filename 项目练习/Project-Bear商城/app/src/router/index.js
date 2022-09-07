// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home,
            meta: {showFooter: true}
        },
        {
            name: 'Search',
            path: '/search',
            component: Search,
            meta: {showFooter: true}
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        // 重定向，在项目跑起来的时候，访问不存在的路径时，立马定向到首页
        {
            path: '*',
            redirect: Home,
        }
    ]
})

export default router
