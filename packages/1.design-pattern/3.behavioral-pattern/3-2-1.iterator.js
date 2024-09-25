/*
迭代器模式

迭代器模式的核心思想是提供一种一致的方式来遍历不同类型的集合对象（如数组、链表、树等），使得客户端代码不必关心集合的底层结构或实现。这个模式通常包含以下几个角色：

迭代器（Iterator）：定义了访问和遍历集合元素的方法，例如 next() 和 hasNext()。
具体迭代器（Concrete Iterator）：实现迭代器接口，负责遍历集合的具体实现。
聚合对象（Aggregate）：定义一个创建迭代器的接口，通常是集合类（如数组、链表等）。
具体聚合对象（Concrete Aggregate）：实现聚合接口并提供一个或多个可以被迭代的集合。
*/

// 迭代器接口
class Iterator {
  constructor(collection) {
    this.collection = collection
    this.index = 0
  }

  hasNext() {
    return this.index < this.collection.length
  }

  next() {
    return this.hasNext() ? this.collection[this.index++] : null
  }
}

// 具体聚合对象
class Collection {
  constructor(items) {
    this.items = items
  }

  createIterator() {
    return new Iterator(this.items)
  }
}

// 使用迭代器模式
const myCollection = new Collection([1, 2, 3, 4, 5])
const iterator = myCollection.createIterator()

while (iterator.hasNext()) {
  console.log(iterator.next()) // 依次输出 1, 2, 3, 4, 5
}
