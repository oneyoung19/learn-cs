/*
抽象工厂模式

在上一节中的工厂模式，存在一个明显的缺点：
Factory函数中的产品是默认配置选项的，如果要新增或者修改同类型的产品，那么在这种模式下，毫无疑问，要么拓展switch、要么暴露额外的create参数。

基于这种形式，我们可以考虑使用抽象工厂模式——**预留自定义缺口**。
*/

class Book {
  constructor (title, author) {
    this.title = title
    this.author = author
  }
  getTitle () {
    return this.title
  }
}

class Pen {
  constructor (color) {
    this.color = color
  }
}

class Factory {
  create (type) {
    switch (type) {
      case 'book':
        return new Book('Harry Potter', 'J.K. Rowling')
      case 'pen':
        return new Pen('red')
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  }

  // 创建新产品
  createExternal () {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }
}

class Mac {
  constructor (type) {
    this.type = type
  }
}

class Windows {
  constructor (type) {
    this.type = type
  }
}

class computerFactory extends Factory {
  createExternal (type) {
    switch (type) {
      case 'Mac':
        return new Mac('Mac Pro Max')
      case 'Widnows':
        return new Windows('Windows10')
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  }
}

console.log(new computerFactory().createExternal('Mac').type)
