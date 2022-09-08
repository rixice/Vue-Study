// 路由

// 理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理；
// 前端路由：key是路径，value是组件；

// 基本使用：npm i vue-router (安装)
//          应用插件：Vue.use()
//          编写router配置项 (当前文件)
//          实现切换 (active-class可配置高亮样式)

// 几个注意点： 1. 路由组件通常放在 pages 文件夹，一般组件通常放在 components 文件夹；
//             2. 通过切换，“隐藏”了的路由组件，实际是被销毁掉的，需要时再去挂载；
//             3. 每个组件都有自己的 $route 属性，里面存储自己的路由信息；
//             4. 整个应用只有一个router，可以通过组件的 $router 属性获取到；

// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },
    ]
})

export default router