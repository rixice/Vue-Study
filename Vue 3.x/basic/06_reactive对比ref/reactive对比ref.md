### 定义数据的角度：
ref：基本类型数据  
reactive：对象 (或数组) 类型数据

### 原理角度对比：
ref：通过 Object.defineProperty() 的get与set来实现响应式 (数据劫持)  
reactive：通过使用 Proxy 来实现响应式 (数据劫持)，并通过 Reflict 操作源对象

### 使用角度：
ref：操作数据需要 .value，模板读取时则不需要  
reactive：均不需要 .value