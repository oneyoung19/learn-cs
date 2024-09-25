/*
在现代 JavaScript 中，迭代器和生成器是内置特性。

ES6 引入了 [Symbol.iterator] 接口，允许为自定义对象实现迭代器功能。
*/

const iterableObject = {
  items: [1, 2, 3],
  
  [Symbol.iterator]() {
    let index = 0
    const items = this.items
    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

// 使用内置迭代器
for (const item of iterableObject) {
  console.log(item)  // 依次输出 1, 2, 3
}
