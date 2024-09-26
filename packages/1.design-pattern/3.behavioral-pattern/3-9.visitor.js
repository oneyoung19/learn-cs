/*
访问者模式

访问者模式的核心思想是：将需要对某些对象执行的操作封装在访问者类中，并让这些对象接收访问者对象，从而把操作分离出来。

通过这种方式，可以在不改变数据结构的情况下，轻松添加新的操作，符合“开闭原则”（对扩展开放，对修改关闭）。

访问者（Visitor）：为不同类型的元素定义一个访问接口。具体访问者类实现访问者接口，定义对不同类型元素的操作。
具体访问者（Concrete Visitor）：实现访问者接口，提供对每种具体元素的操作。
元素（Element）：定义一个接受访问者的接口，即 accept() 方法，用于接收访问者并允许访问者操作其内部数据。
具体元素（Concrete Element）：实现元素接口，并实现 accept() 方法，允许访问者访问其内部状态。
*/

// 访问者接口
class Visitor {
  visitEmployee(employee) {
    throw new Error('This method should be overridden!')
  }
}

// 具体访问者：薪资加成访问者
class SalaryRaiseVisitor extends Visitor {
  visitEmployee(employee) {
    employee.setSalary(employee.getSalary() * 1.1)
    console.log(`${employee.getName()}'s salary increased to ${employee.getSalary()}.`)
  }
}

// 具体访问者：薪资统计访问者
class SalaryReportVisitor extends Visitor {
  constructor() {
    super()
    this.totalSalary = 0
  }

  visitEmployee(employee) {
    this.totalSalary += employee.getSalary()
    console.log(`${employee.getName()}: ${employee.getSalary()}`)
  }

  getTotalSalary() {
    return this.totalSalary
  }
}

// 元素接口
class Employee {
  accept(visitor) {
    throw new Error('This method should be overridden!')
  }
}

// 具体元素：普通员工
class RegularEmployee extends Employee {
  constructor(name, salary) {
    super()
    this.name = name
    this.salary = salary
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(newSalary) {
    this.salary = newSalary
  }

  accept(visitor) {
    visitor.visitEmployee(this) // 接收访问者
  }
}

// 客户端代码
const employees = [
  new RegularEmployee('Alice', 5000),
  new RegularEmployee('Bob', 6000)
]

const salaryRaiseVisitor = new SalaryRaiseVisitor()
const salaryReportVisitor = new SalaryReportVisitor()

employees.forEach(employee => employee.accept(salaryRaiseVisitor)) // 薪资加成
employees.forEach(employee => employee.accept(salaryReportVisitor)) // 薪资统计

console.log(`Total Salary: ${salaryReportVisitor.getTotalSalary()}`)
