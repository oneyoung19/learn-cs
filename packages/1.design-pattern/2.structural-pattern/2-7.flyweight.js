/*
享元模式

享元模式（Flyweight Pattern）是一种结构型设计模式，用于减少内存消耗，通过共享相似对象来提高性能。

享元模式的核心思想是将相同或相似的对象尽量复用，而不是为每个对象单独创建新实例。这种模式特别适用于需要创建大量相似对象的场景。

- 享元（Flyweight）：定义享元对象的接口，包含外部状态（不共享）和内部状态（共享）。
- 具体享元（Concrete Flyweight）：实现享元接口，定义可以共享的内部状态。
- 非享元（Unshared Concrete Flyweight）：并不共享的对象，但可以与享元对象一起工作。
- 享元工厂（Flyweight Factory）：管理和维护享元对象的缓存，确保享元对象的唯一性和复用。
- 客户端（Client）：负责使用享元对象，并将外部状态传递给享元对象。
*/

// 享元类
class Shape {
  constructor(color) {
    this.color = color  // 内部状态（共享）
  }

  draw(x, y) {  // 外部状态（不共享）
    console.log(`Drawing a ${this.color} shape at (${x}, ${y})`)
  }
}

// 享元工厂类
class ShapeFactory {
  constructor() {
    this.shapes = {}
  }

  getShape(color) {
    if (!this.shapes[color]) {
      this.shapes[color] = new Shape(color)
    }
    return this.shapes[color]
  }

  getShapeCount() {
    return Object.keys(this.shapes).length
  }
}

// 客户端使用
const factory = new ShapeFactory()

// 生成形状并传递外部状态
const redShape1 = factory.getShape('red')
redShape1.draw(10, 20)

const redShape2 = factory.getShape('red')
redShape2.draw(30, 40)

const blueShape = factory.getShape('blue')
blueShape.draw(50, 60)

console.log(`Total unique shapes created: ${factory.getShapeCount()}`)
// Output:
// Drawing a red shape at (10, 20)
// Drawing a red shape at (30, 40)
// Drawing a blue shape at (50, 60)
// Total unique shapes created: 2
