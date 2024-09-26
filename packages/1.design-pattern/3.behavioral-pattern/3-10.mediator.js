/*
中介者模式

中介者模式的核心思想是将对象之间的交互逻辑封装到中介者对象中，避免对象之间的直接通信，从而降低耦合度，提高系统的可扩展性和可维护性。

中介者（Mediator）：定义同事对象之间通信的接口，负责协调和控制对象间的交互。
具体中介者（Concrete Mediator）：实现中介者接口，处理并协调各同事对象之间的通信。
同事类（Colleague）：与其他同事类进行通信的对象，但它们不会直接通信，而是通过中介者来交互。
具体同事类（Concrete Colleague）：实现同事类接口，与中介者交互以实现对象间的通信
*/

// 中介者接口
class ChatMediator {
  sendMessage(message, user) {
    throw new Error('This method should be overridden!')
  }

  addUser(user) {
    throw new Error('This method should be overridden!')
  }
}

// 具体中介者
class ConcreteChatMediator extends ChatMediator {
  constructor() {
    super()
    this.users = [] // 存储所有用户
  }

  addUser(user) {
    this.users.push(user) // 添加用户
  }

  sendMessage(message, sender) {
    this.users.forEach(user => {
      if (user !== sender) { // 排除发送者
        user.receiveMessage(message)
      }
    })
  }
}

// 同事类接口
class User {
  constructor(mediator, name) {
    this.mediator = mediator
    this.name = name
  }

  sendMessage(message) {
    console.log(`${this.name} sends: ${message}`)
    this.mediator.sendMessage(message, this) // 通过中介者发送消息
  }

  receiveMessage(message) {
    console.log(`${this.name} receives: ${message}`)
  }
}

// 客户端代码
const mediator = new ConcreteChatMediator()

const user1 = new User(mediator, 'Alice')
const user2 = new User(mediator, 'Bob')
const user3 = new User(mediator, 'Charlie')

mediator.addUser(user1)
mediator.addUser(user2)
mediator.addUser(user3)

user1.sendMessage('Hello everyone!') // Alice 发送消息
// 输出: Bob receives: Hello everyone!
// 输出: Charlie receives: Hello everyone!
