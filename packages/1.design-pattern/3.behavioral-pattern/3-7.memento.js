/*
备忘录模式

备忘录模式的核心思想是通过三个角色的配合，允许对象在不暴露内部结构的情况下进行状态的保存和恢复。

它提供了一种简单的方式来捕获和恢复对象的状态，特别适合需要操作历史记录或撤销操作的场景。

发起人（Originator）：需要保存其状态的对象。它负责创建备忘录和恢复状态。
备忘录（Memento）：用于存储发起人的状态，提供给外部读取和恢复状态的功能。备忘录通常是一个不可变对象。
管理者（Caretaker）：负责管理备忘录对象，保存和恢复发起人的状态，但不改变备忘录的内容。
*/

// 发起人：文本编辑器
class TextEditor {
  constructor() {
    this.content = ''
  }

  write(text) {
    this.content += text
  }

  createMemento() {
    return new Memento(this.content) // 创建备忘录
  }

  restore(memento) {
    this.content = memento.getState() // 恢复状态
  }

  getContent() {
    return this.content
  }
}

// 备忘录：存储状态
class Memento {
  constructor(state) {
    this.state = state
  }

  getState() {
    return this.state // 返回状态
  }
}

// 管理者：负责管理备忘录
class Caretaker {
  constructor() {
    this.mementos = []
  }

  saveMemento(memento) {
    this.mementos.push(memento) // 保存备忘录
  }

  getMemento(index) {
    return this.mementos[index] // 获取备忘录
  }
}

// 客户端代码
const editor = new TextEditor()
const caretaker = new Caretaker()

editor.write('Hello, ')
caretaker.saveMemento(editor.createMemento()) // 保存状态

editor.write('world!')
console.log(editor.getContent()) // 输出: Hello, world!

editor.restore(caretaker.getMemento(0)) // 恢复状态
console.log(editor.getContent()) // 输出: Hello, 
