//  插件 
//      功能：用于增强Vue
//      本质：包含install方法的一个对象，install的第一个参数是Vue，
//  第二个以后的参数是插件使用者传递的数据
//     
//      定义插件：
//          对象.install = function(Vue, options){
//                  Vue.filter / Vue.mixin等等
//              } 

//      使用插件：
//          Vue.use()

export const obj = {
    install(Vue){

        // 全局过滤器
        Vue.filter('sliceStr',function(value){
            return value.slice(0,4)
        })

        // 全局指令
        // Vue.directive('fbind',{
        //     bind(element, binding){
        //         element.value = binding.value
        //     }
        // })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200,
                }
            }
        })

        // 给Vue原型上添加一个方法（vm和vc都能用）
        Vue.prototype.hello = ()=>{alert('Hello123')}
    }
}