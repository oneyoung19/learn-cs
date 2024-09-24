/*
代理模式

Object.defineProperty 不是严格意义上的代理模式，但它确实可以用来实现类似的功能，尤其是在属性访问控制和行为增强方面。代理模式通常通过一个中间对象（代理）来控制对原对象的访问，而 Object.defineProperty 是通过直接定义或修改对象的属性行为来实现控制。

Object.defineProperty 与 代理模式的区别
- 代理模式：使用代理模式时，我们通过一个代理对象来控制对目标对象的访问。代理模式可以拦截多种操作，比如属性读取、赋值、删除、函数调用等。JavaScript 中的 Proxy 对象是实现代理模式的工具。
- Object.defineProperty：它用于直接在对象上定义新属性或修改现有属性的行为，如是否可枚举、可写、可配置。它可以通过定义 getter 和 setter 来控制属性的读取和修改操作，但它仅限于特定属性的操作，不能拦截对象的其他行为（比如删除属性、函数调用等）。

数据描述符
value writable enumerable configurable

访问器描述符
get set enumerable configurable

设置描述符
Object.defineProperty(obj, prop, descriptor)

获取描述符
Object.getOwnPropertyDescriptor(obj, prop)
*/
