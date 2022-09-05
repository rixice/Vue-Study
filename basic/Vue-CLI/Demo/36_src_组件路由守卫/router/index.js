// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
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