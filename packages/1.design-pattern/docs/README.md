
# Design Patterns

- [JavaScript设计模式es6（23种)](https://juejin.cn/post/6844904032826294286)
- [10分钟掌握JavaScript设计模式](https://juejin.cn/post/7052148234097000462)

# 1.Table of Contents

## 设计模式原则

1. `S` – `Single Responsibility Principle` 单一职责原则
  - 一个程序只做好一件事
  - 如果功能过于复杂就拆分开，每个部分保持独立

2. `O` – `OpenClosed Principle` 开放/封闭原则
  - 对扩展开放，对修改封闭
  - 增加需求时，扩展新代码，而非修改已有代码

3. `L` – `Liskov Substitution Principle` 里氏替换原则
  - 子类能覆盖父类
  - 父类能出现的地方子类就能出现

4. `I` – `Interface Segregation Principle` 接口隔离原则
  - 保持接口的单一独立
  - 类似单一职责原则，这里更关注接口

5. `D` – `Dependency Inversion Principle` 依赖倒转原则
  - 面向接口编程，依赖于抽象而不依赖于具体
  - 使用方只关注接口而不关注具体类的实现

## 1-1.创建型模式

### 1-1-1.工厂模式

[工厂模式](../1.creation-pattern/1-1.factory.js)

### 1-1-2.抽象工厂模式

[抽象工厂模式](../1.creation-pattern/1-2.abstract-factory.js)

### 1-1-3.单例模式

[单例模式](../1.creation-pattern/1-3.singleton.js)

### 1-1-4.构造器模式

[构造器模式](../1.creation-pattern/1-4.constructor.js)

### 1-1-5.原型模式

[原型模式](../1.creation-pattern/1-5.prototype.js)

## 1-2.结构型模式

### 1-2-1.适配器模式

[适配器模式](../2.structural-pattern/2-1.adapter.js)

### 1-2-2.装饰器模式

[装饰器模式之构造函数](../2.structural-pattern/2-2-1.decorator-constructor.js)

[装饰器模式之类](../2.structural-pattern/2-2-2.decorator-class.js)

### 1-2-3.代理模式

[对象委托代理](../2.structural-pattern/2-3-1.proxy-delegate.js)

[Proxy](../2.structural-pattern/2-3-3.proxy-es6.js)

### 1-2-4.外观模式

[外观模式](../2.structural-pattern/2-4.appearance.js)

### 1-2-5.桥接模式

[桥接模式](../2.structural-pattern/2-5.bridging.js)

### 1-2-6.组合模式

[组合模式](../2.structural-pattern/2-6.composite.js)

### 1-2-7.享元模式

[享元模式](../2.structural-pattern/2-7.flyweight.js)

## 1-3.行为型模式

### 1-3-1.观察者模式

[观察者模式](../3.behavioral-pattern/3-1.observer.js)

### 1-3-2.迭代器模式

### 1-3-3.策略模式

### 1-3-4.模板方法模式

### 1-3-5.职责链模式

### 1-3-6.命令模式

### 1-3-7.备忘录模式

### 1-3-8.状态模式

### 1-3-9.访问者模式

### 1-3-10.中介者模式

### 1-3-11.解释器模式
