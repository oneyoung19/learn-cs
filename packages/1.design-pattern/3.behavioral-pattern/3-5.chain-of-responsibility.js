/*
职责链模式

职责链模式的核心思想是：将请求处理者组织成一条链，每个处理者都持有对下一个处理者的引用。

请求沿着链传递，直到有一个处理者处理该请求，或者链的末端没有处理者能够处理它。

这种模式特别适用于有多个处理对象、且顺序不可知的场景，能够动态地改变系统的职责分配。

抽象处理者（Handler）：定义处理请求的接口，通常包括处理请求的方法和设置下一个处理者的方法。
具体处理者（Concrete Handler）：继承抽象处理者，处理自己能够处理的请求，或将请求传递给下一个处理者。
客户端（Client）：向链上的处理者对象提交请求。
*/

// 抽象处理者
class Approver {
  constructor(name) {
    this.name = name
    this.nextApprover = null
  }

  setNext(approver) {
    this.nextApprover = approver
  }

  handleRequest(request) {
    throw new Error('This method should be overridden!')
  }
}

// 具体处理者：经理
class Manager extends Approver {
  handleRequest(request) {
    if (request.amount < 1000) {
      console.log(`${this.name} 批准了请求: ${request.amount}`)
    } else if (this.nextApprover) {
      this.nextApprover.handleRequest(request)
    }
  }
}

// 具体处理者：总监
class Director extends Approver {
  handleRequest(request) {
    if (request.amount < 5000) {
      console.log(`${this.name} 批准了请求: ${request.amount}`)
    } else if (this.nextApprover) {
      this.nextApprover.handleRequest(request)
    }
  }
}

// 具体处理者：副总裁
class VicePresident extends Approver {
  handleRequest(request) {
    if (request.amount < 10000) {
      console.log(`${this.name} 批准了请求: ${request.amount}`)
    } else if (this.nextApprover) {
      this.nextApprover.handleRequest(request)
    }
  }
}

// 具体处理者：总裁
class President extends Approver {
  handleRequest(request) {
    if (request.amount >= 10000) {
      console.log(`${this.name} 批准了请求: ${request.amount}`)
    } else if (this.nextApprover) {
      this.nextApprover.handleRequest(request)
    }
  }
}

// 客户端代码
const manager = new Manager('经理')
const director = new Director('总监')
const vp = new VicePresident('副总裁')
const president = new President('总裁')

// 设置职责链
manager.setNext(director)
director.setNext(vp)
vp.setNext(president)

// 提交请求
const request = { amount: 7500 }
manager.handleRequest(request) // 输出：副总裁 批准了请求: 7500
