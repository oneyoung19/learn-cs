/*
单例模式

在多次调用构造函数时，只会返回同一个实例。
*/

class Factory {
  constructor (name) {
    if (Factory._instance) return Factory._instance
    this.name = name
    Factory._instance = this
  }
}

const f1 = new Factory('f1')
const f2 = new Factory('f2')

console.log(f1)
console.log(f2)
console.log(f1 === f2)
