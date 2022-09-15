<template>
  <input type="text" v-model="keyword">
  <p>{{keyword}}</p>
</template>

<script>
  import {ref, customRef} from 'vue'
  export default {
    name: 'App',
    setup(){
      // 自定义一个ref —— myRef
      function myRef(v, delay){

        let timer

        return customRef((track, trigger)=>{
          return {
            get(){
              console.log('有人从myRef中读取数据了',v)
              track()     // 通知Vue追踪数据的变化（让get()知道这个数据是有用的）
              return v
            },
            set(newValue){
              console.log('有人把myRef中的数据修改了')
              clearTimeout(timer)   // 防抖
              timer = setTimeout(() => {  // 设置数据延迟显示
                v = newValue
                trigger()   // 通知Vue去重新解析模板
              }, delay);
            }
          }
        })
      }

      // let keyword = ref('hello')  // 使用Vue提供的内置ref
      let keyword = myRef('hello', 500)
      return {keyword}
    }
  }
</script>

<style>

</style>
