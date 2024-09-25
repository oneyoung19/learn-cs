/*
命令模式

命令模式的核心思想是将请求或动作封装成一个对象（命令对象），然后由命令对象调用接收者的方法。

这样可以把请求的发起者与处理者解耦。请求发起者只需要调用命令对象，而不需要关心谁执行和如何执行。
*/

// 接收者：灯
class Light {
  turnOn() {
    console.log('The light is on')
  }

  turnOff() {
    console.log('The light is off')
  }
}

// 命令接口
class Command {
  execute() {
    throw new Error('This method should be overridden!')
  }
}

// 具体命令类：打开灯命令
class TurnOnCommand extends Command {
  constructor(light) {
    super()
    this.light = light // 持有接收者对象的引用
  }

  execute() {
    this.light.turnOn() // 执行具体的操作
  }
}

// 具体命令类：关闭灯命令
class TurnOffCommand extends Command {
  constructor(light) {
    super()
    this.light = light
  }

  execute() {
    this.light.turnOff()
  }
}

// 调用者：遥控器
class RemoteControl {
  setCommand(command) {
    this.command = command
  }

  pressButton() {
    this.command.execute() // 执行命令
  }
}

// 客户端代码
const light = new Light()
const turnOn = new TurnOnCommand(light)
const turnOff = new TurnOffCommand(light)

const remote = new RemoteControl()

remote.setCommand(turnOn)  // 设置打开灯的命令
remote.pressButton()       // 输出: The light is on

remote.setCommand(turnOff) // 设置关闭灯的命令
remote.pressButton()       // 输出: The light is off
