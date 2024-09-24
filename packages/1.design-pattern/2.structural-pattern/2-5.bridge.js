/*
桥接模式

桥接模式（Bridge Pattern）是一种结构型设计模式，旨在将抽象部分与其实现部分分离，使得它们可以独立地变化。

这意味着抽象部分和实现部分可以通过“桥接”来解耦，从而在两者独立变化的情况下仍然可以协同工作。

抽象类（Abstraction）：定义了高层接口，并维护对实现部分的引用。
实现类接口（Implementor）：定义实现类的接口，通常是一个接口或抽象类。
具体抽象类（RefinedAbstraction）：扩展抽象类，添加特定行为。
具体实现类（ConcreteImplementor）：实现具体的实现类接口。
*/

// Implementor
class Color {
  applyColor() {}
}

// Concrete Implementor
class RedColor extends Color {
  applyColor() {
    console.log('Applying red color')
  }
}

class BlueColor extends Color {
  applyColor() {
    console.log('Applying blue color')
  }
}

// Abstraction
class Shape {
  constructor(color) {
    this.color = color
  }

  draw() {}
}

// Refined Abstraction
class Circle extends Shape {
  constructor(color) {
    super(color)
  }

  draw() {
    console.log('Drawing a circle')
    this.color.applyColor()
  }
}

class Square extends Shape {
  constructor(color) {
    super(color)
  }

  draw() {
    console.log('Drawing a square')
    this.color.applyColor()
  }
}

// Usage
const redCircle = new Circle(new RedColor())
redCircle.draw()  // Output: Drawing a circle, Applying red color

const blueSquare = new Square(new BlueColor())
blueSquare.draw()  // Output: Drawing a square, Applying blue color

