/*
策略模式

策略模式的核心思想是将不同的算法封装为独立的策略类，这些类可以在运行时动态地替换使用。

客户端不需要直接依赖具体的算法实现，而是通过接口来使用算法，这样可以在不修改客户端代码的情况下，轻松替换不同的算法。
*/

// 策略接口
class PaymentStrategy {
  pay(amount) {
    throw new Error('This method should be overridden')
  }
}

// 具体策略类 1: 使用信用卡支付
class CreditCardPaymentStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`)
  }
}

// 具体策略类 2: 使用 PayPal 支付
class PayPalPaymentStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`)
  }
}

// 具体策略类 3: 使用比特币支付
class BitcoinPaymentStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin`)
  }
}

// 上下文类
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy // 维持对策略的引用
  }

  setStrategy(strategy) {
    this.strategy = strategy // 动态替换策略
  }

  executeStrategy(amount) {
    this.strategy.pay(amount) // 执行当前策略
  }
}

// 使用策略模式
const payment = new PaymentContext(new CreditCardPaymentStrategy())
payment.executeStrategy(100) // Paid 100 using Credit Card

payment.setStrategy(new PayPalPaymentStrategy())
payment.executeStrategy(200) // Paid 200 using PayPal

payment.setStrategy(new BitcoinPaymentStrategy())
payment.executeStrategy(300) // Paid 300 using Bitcoin
