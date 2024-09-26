/*
状态模式

状态模式的核心思想是将对象的状态分离为独立的状态类，每个状态类负责实现与该状态相关的行为。

对象通过持有当前状态的引用来改变其行为，这样可以简化对象的状态管理，并提高代码的可维护性。

上下文（Context）：持有当前状态的对象，负责管理状态并提供状态切换的接口。
状态接口（State Interface）：定义了所有具体状态的共同行为的接口。
具体状态类（Concrete State Classes）：实现状态接口，封装与特定状态相关的行为。
*/

// 状态接口
class ElevatorState {
  enterState(elevator) {
    throw new Error('This method should be overridden!')
  }
}

// 具体状态：电梯停止
class StoppedState extends ElevatorState {
  enterState(elevator) {
    console.log('Elevator is stopped.')
    elevator.setState(this) // 设置当前状态
  }

  request() {
    console.log('Elevator is ready to go.')
  }
}

// 具体状态：电梯运行
class MovingState extends ElevatorState {
  enterState(elevator) {
    console.log('Elevator is moving.')
    elevator.setState(this)
  }

  request() {
    console.log('Elevator is currently moving.')
  }
}

// 上下文：电梯
class Elevator {
  constructor() {
    this.state = new StoppedState() // 初始状态为停止
  }

  setState(state) {
    this.state = state // 切换状态
  }

  request() {
    this.state.request() // 执行当前状态的请求
  }
}

// 客户端代码
const elevator = new Elevator()
elevator.request() // 输出: Elevator is ready to go.

const movingState = new MovingState()
movingState.enterState(elevator) // 切换到运行状态
elevator.request() // 输出: Elevator is currently moving.


