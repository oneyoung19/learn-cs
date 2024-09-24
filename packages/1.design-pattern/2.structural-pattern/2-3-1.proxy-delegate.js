/*
代理模式


koa中利用[delegates](https://www.npmjs.com/package/delegates)实现了ctx的对象委托代理机制

类似的，在Vue中也有代理机制，譬如假设有属性this.name，实际上是this.$data.name。
*/

/*
对象委托机制
target:           proto:             proto:
{                 {                  {
  getName()  +      name: 'Tom'  =      name: 'Tom',
                                        getName()
}                 }                  }

proto.getName() => target.getName()
*/

const delegates = require('delegates')

function Delegator (proto, target) {
  if (!(this instanceof Delegator)) {
    return new Delegator(proto, target)
  }
  this.proto = proto
  this.target = target
  this.methods = []
}

Delegator.prototype.method = function (methodName) {
  this.methods.push(methodName)
  const { proto, target } = this
  this.proto[methodName] = function (...args) {
    return target[methodName].call(proto, ...args)
  }
}

const proto = {
  name: 'Tom'
}
const target = {
  getName () {
    return this.name
  }
}

Delegator(proto, target).method('getName')
// delegates(proto, target).method('getName')

console.log(proto.getName())
