<template>
    <!-- 组件的结构 -->
    <div>
        <h1>{{msg}}</h1>
        <h2>学生名称: {{name}}</h2>
        <h2>学生性别: {{sex}}</h2>
        <h2>学生年龄: {{myAge}}</h2>
        <button @click="updateAge">尝试修改接收到的年龄</button>
    </div>
</template>

<!-- 
    配置项props:
        功能：让组件接收外部传递的数据
        (1). 传递数据：<Demo name='xxx'>
        (2). 接收数据：props:['name']等
        
    注意：props是只读的，若要修改props的数据，请复制props的数据到data中进行修改
 -->

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: "Student",
        data(){
            return {
                msg:'我是一个学生',
                myAge:this.age  // 因为先读取props中的age，所以这里可调用this.age
                // studentName: "张三",
                // studentAge: 18,
                // studentSex: "男",
            }
        },
        methods: {
            updateAge(){
                this.myAge++
            }
        },
        // props:['name','sex','age'], // 简单接收（一般用这个）

        // 接收的同时对数据进行类型限制
        // props:{
        //     name: String,
        //     sex: String,
        //     age: Number
        // }

        // 接收的同时，对数据进行 类型+默认值+必要性的限制
        props:{
            name:{
                type: String,   // name的类型是String
                required: true  // name是必要的
            },
            age:{
                type:Number,
                default: 100,   // 默认值
            },
            sex:{
                type: String
            }
        }
    }
</script>