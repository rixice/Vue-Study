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
                    meta:{check: true, title: "新闻"}
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

// 路由守卫：对路由进行权限管理1
// 全局前置路由守卫 —— 初始化时、每次路由切换之前 被调用
router.beforeEach((to, from, next)=>{

    console.log('前置路由守卫',to, from)

    if(to.meta.check){  // 判断是否需要鉴权
        if (to.name === 'news' || to.name === 'message'){
            next()
        }else{
            alert('无权限访问')
        } 
    }else{
        next()
    }

})

// 全局后置路由守卫 —— 初始化时、每次路由切换之后 被调用
router.afterEach((to, from)=>{
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'Bear'    // 更改标题
})

export default router