export const showName = {
    methods: {
        showName(){
            alert(this.name)
        }
    }
}

// mixin 混入
//  功能：可以把多个组件共用的配置提取成一个混入对象；
//  使用方式：
//      第一步 —— 定义混合：
//          {
//              data(){...},
//              methods(){...},
//              ....
//          }
//       第二步 —— 使用混入，例如：
//          (1).全局混入：Vue.mixin(xxx)    会进行全局挂载，耗资源
//          (2).局部混入：mixins:['xxx']

export const retData = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}