# shallowReactive 与 shallowRef
### shallowReactive  
只处理 对象最外层属性 的响应式（浅响应式）  
### shallowRef  
只处理 基本数据类型 的响应式，不进行对象的响应式处理  
### 什么时候使用？  
如果有一个对象数据，结构较深，但变化的只有外层属性 ===> shallowReactive  
如果有一个对象数据，后续不进行修改 ===> shallowRef  
---
# readonly 与 shallowReadonly
### readonly
让一个响应式数据变为深只读  
### shallowReadonly
让一个响应式数据变为浅只读  
---
# toRaw 与 markRaw  
## toRaw
### 作用：
将一个由reactive生成的 响应式对象 转为 普通对象  
### 适用场景：
用于读取响应式对象对应的普通对象，对普通对象操作不引起页面更新