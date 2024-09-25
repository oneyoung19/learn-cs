/*
订阅-发布模式（`Subcribe-Publish Pattern`）

订阅-发布模式 实际上可以被看作是观察者模式的一种扩展或变体。

它们的主要区别在于通信机制的解耦程度。

观察者模式是直接的对象依赖关系，而订阅-发布模式通过引入事件通道或消息系统，进一步解耦了发布者和订阅者。

Publisher => Event Channel => Subscriber

*/

class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(callback)
  }

  publish(event, data) {
    if (!this.subscribers[event]) return
    this.subscribers[event].forEach(callback => callback(data))
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return
    this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback)
  }
}

// 使用订阅发布模式
const pubsub = new PubSub()

const subscriber1 = (data) => console.log(`Subscriber 1 received: ${data}`)
const subscriber2 = (data) => console.log(`Subscriber 2 received: ${data}`)

pubsub.subscribe('event1', subscriber1)
pubsub.subscribe('event1', subscriber2)

pubsub.publish('event1', 'Hello Subscribers')

// 取消订阅
pubsub.unsubscribe('event1', subscriber1)

pubsub.publish('event1', 'Another Message')
