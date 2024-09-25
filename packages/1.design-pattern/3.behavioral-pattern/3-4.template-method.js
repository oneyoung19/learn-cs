/*
模板方法模式 Template Method Pattern

模板方法模式的核心思想是将不变的行为写在父类中，将可变的行为留给子类实现。

模板方法定义了一个算法的步骤，并且允许子类通过实现或重写这些步骤，来改变算法的部分实现。
*/

// 抽象类：饮料制作流程
class Beverage {
  // 模板方法：定义了制作饮料的骨架
  prepareRecipe() {
    this.boilWater()
    this.brew()          // 由子类实现
    this.pourInCup()
    this.addCondiments() // 由子类实现
  }

  boilWater() {
    console.log('Boiling water')
  }

  pourInCup() {
    console.log('Pouring into cup')
  }

  // 这些是抽象方法，留给子类实现
  brew() {
    throw new Error('This method must be overridden!')
  }

  addCondiments() {
    throw new Error('This method must be overridden!')
  }
}

// 具体类：制作咖啡
class Coffee extends Beverage {
  brew() {
    console.log('Brewing coffee grounds')
  }

  addCondiments() {
    console.log('Adding sugar and milk')
  }
}

// 具体类：制作茶
class Tea extends Beverage {
  brew() {
    console.log('Steeping the tea')
  }

  addCondiments() {
    console.log('Adding lemon')
  }
}

// 使用模板方法模式
const coffee = new Coffee()
coffee.prepareRecipe()
// 输出:
// Boiling water
// Brewing coffee grounds
// Pouring into cup
// Adding sugar and milk

const tea = new Tea()
tea.prepareRecipe()
// 输出:
// Boiling water
// Steeping the tea
// Pouring into cup
// Adding lemon
