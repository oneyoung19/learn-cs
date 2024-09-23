/*
装饰器模式——类实现

JavaScript 中的装饰器模式常用于增强或修改类及其方法的功能。

在 JavaScript 中，装饰器模式可以通过**高阶函数**、**类装饰器**等实现。
*/

@classDecorator
class Person {
  constructor ({ name, age } = {}) {
    this.name = name
    this.age = age
  }
  @methodDecorator
  getName () {
    return this.name
  }
}

// Person.prototype.getName = methodDecorator(function () {
//   return this.name
// })

function classDecorator (constructor) {
  console.log('classDecorator', constructor)
  return function (...args) {
    const instance = new constructor(...args)
    instance.msg = 'Hello World'
    return instance
  }
}

// prototype methodName descriptor
function methodDecorator (prototype, methodName, descriptor) {
  console.log('methodDecorator', prototype, methodName, descriptor)
  descriptor.value = function (...args) {
    console.log(this.name)
    return descriptor.value.bind(this, ...args)
  }
  return descriptor
}

const person = new Person({
  name: 'Tom',
  age: 18
})

person.getName()
