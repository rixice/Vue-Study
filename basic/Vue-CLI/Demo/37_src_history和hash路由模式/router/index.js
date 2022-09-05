// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    // 对于一个url来说，什么是hash值？—— #及其后面的内容；
    // hash值不会包含在HTTP请求中，即：hash值不会带给服务器；

    // hash模式：
    //     1. 地址中永远带着#号，不美观
    //     2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
    //     3. 兼容性较好

    // history模式：
    //     1. 地址干净、美观
    //     2. 兼容性和hash模式相比略差
    //     3. 应用部署上线时，需要后端人员支持，解决刷新页面服务端404的问题

    mode: 'history',    // 默认是hash模式
    routes: [
        {
            name: 'about',
            path: '/about', 
            component: About, 
            meta:{check: false, title: "关于"},
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta:{check:false, title:"家目录"},
            children: [
                {
                    name: 'news', 
                    path: 'news', 
                    component: News, 
                    meta:{check: true, title: "新闻"},
                },
                
                {
                    name: 'message',
                    path: 'message', 
                    component: Message,
                    meta:{check: true, title: "消息"},
                    children:[
                        {
                            path: 'detail',
                            name: 'msgDetail',
                            component: Detail,
                            meta:{check: false, title:"具体消息"},
                            props($route){
                                return {
                                    id: $route.query.id, 
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

export default router