/*
解释器模式

解释器模式的核心思想是：通过定义一种语言的语法规则，为该语言的表达式建立抽象语法树（AST），然后通过解释器逐步解析并执行表达式。

每个节点都代表一个语言中的语法单元（如终结符和非终结符），解释器负责根据节点的含义执行相应的操作。

抽象表达式（Abstract Expression）：定义解释器的接口，所有的具体表达式类都实现这个接口。
终结符表达式（Terminal Expression）：实现与文法中的终结符相关的操作，通常一个终结符表示一个具体的值或变量。
非终结符表达式（Non-Terminal Expression）：实现与文法中的非终结符相关的操作，通常组合多个终结符表达式或其他非终结符表达式。
上下文（Context）：存储解释器需要的全局信息或数据，如变量的值或表达式的环境信息。
解释器（Interpreter）：通过递归调用表达式的解释方法，对语法树进行逐步解释。
*/

// 上下文类，存储表达式中的变量和它们的值
class Context {
  constructor() {
    this.variables = {}
  }

  setVariable(name, value) {
    this.variables[name] = value
  }

  getVariable(name) {
    return this.variables[name]
  }
}

// 抽象表达式类
class Expression {
  interpret(context) {
    throw new Error('This method should be overridden!')
  }
}

// 终结符表达式类：变量表达式
class VariableExpression extends Expression {
  constructor(name) {
    super()
    this.name = name
  }

  interpret(context) {
    return context.getVariable(this.name)
  }
}

// 终结符表达式类：常量表达式
class ConstantExpression extends Expression {
  constructor(value) {
    super()
    this.value = value
  }

  interpret(context) {
    return this.value
  }
}

// 非终结符表达式类：加法表达式
class AddExpression extends Expression {
  constructor(left, right) {
    super()
    this.left = left
    this.right = right
  }

  interpret(context) {
    return this.left.interpret(context) + this.right.interpret(context)
  }
}

// 非终结符表达式类：减法表达式
class SubtractExpression extends Expression {
  constructor(left, right) {
    super()
    this.left = left
    this.right = right
  }

  interpret(context) {
    return this.left.interpret(context) - this.right.interpret(context)
  }
}

// 客户端代码
const context = new Context()
context.setVariable('x', 10)
context.setVariable('y', 20)

// 表达式：x + y - 5
const expression = new SubtractExpression(
  new AddExpression(
    new VariableExpression('x'), 
    new VariableExpression('y')
  ),
  new ConstantExpression(5)
)

const result = expression.interpret(context)
console.log(result) // 输出：25
