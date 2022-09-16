# Vue3 中其他的改变  
---
## 全局API的转移  
1. Vue.config.xxxx ==> app.config.xxxx  
2. Vue.config.productionTip ==> 移除  
3. Vue.component ==> app.component  
4. Vue.directive ==> app.directive  
5. Vue.mixin ==> app.mixin  
6. Vue.use ==> app.use  
7. Vue.prototype ==> app.config.globalProperties  
---  
## 其他改变  
### data选项应始终被声明为一个函数  
### 过渡类名的更改  
1. Vue2.x的写法：  
```
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }
    .v-leave,
    .v-enter-to{
        opacity: 1;
    }
```

2. Vue3.x的写法：  
```
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    .v-leave-from,
    .v-enter-to{
        opacity: 1;
    }
```
### 移除 keyCode 作为 v-on 的修饰符，同时不再支持 config.keyCodes
### 移除 v-on.native 修饰符
### 移除过滤器(filter)
### ......