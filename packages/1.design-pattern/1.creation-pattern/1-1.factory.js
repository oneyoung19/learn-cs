/*
工厂模式，也可以叫简单工厂模式

该模式通过封装一个工厂函数，来创建已有的产品
*/
// 定义产品类
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

// 定义一个工厂函数 分发创建产品
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
}

console.log(new Factory().create('book').getTitle())
console.log(new Factory().create('pen').color)
