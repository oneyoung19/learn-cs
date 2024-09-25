/*
观察者模式

观察者模式是一种行为设计模式，定义了对象之间的**一对多依赖**关系。

被观察者对象（Subject）维护一组观察者对象（Observer），当被观察者的状态发生变化时，它会自动通知所有的观察者对象。

主要角色：

Subject（被观察者）：当状态发生变化时，会通知所有的观察者。
Observer（观察者）：观察被观察者的变化，并做出相应的响应。
*/

class Subject {
  constructor() {
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message))
  }
}

class Observer {
  update(message) {
    console.log(`Received message: ${message}`)
  }
}

// 使用观察者模式
const subject = new Subject()
const observer1 = new Observer()
const observer2 = new Observer()

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.notifyObservers('Hello Observers')
