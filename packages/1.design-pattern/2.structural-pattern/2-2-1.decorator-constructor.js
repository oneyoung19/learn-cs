/*
装饰器模式——构造函数实现

JavaScript 中的装饰器模式常用于增强或修改类及其方法的功能。

在 JavaScript 中，装饰器模式可以通过**高阶函数**、**类装饰器**等实现。
*/

function Person ({ name, age } = {}) {
  this.name = name
  this.age = age
}

Person.prototype.getName = methodDecorator(function () {
  return this.name
})

function constructorDecorator (constructor) {
  return function (...args) {
    const instance = new constructor(...args)
    instance.msg = 'Hello World'
    return instance
  }
}

function methodDecorator (method) {
  return function (...args) {
    console.log('methodDecorator', this.name)
    return method(...args)
  }
}

const person = new constructorDecorator(Person)({
  name: 'Tom',
  age: 18
})

console.log(person)
person.getName()
