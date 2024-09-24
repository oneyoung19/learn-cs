/*
代理模式

[delegates](https://www.npmjs.com/package/delegates)
Es6 Proxy
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
