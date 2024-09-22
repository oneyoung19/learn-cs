/*
原型模式

该模式就是通过原型链实现类的继承和拓展。
*/

class Person {
  constructor ({ name, age } = {}) {
    this.name = name
    this.age = age
  }
  getName () {
    return this.name
  }
}

class Student extends Person {
  constructor ({ school, ...rest } = {}) {
    super(rest)
    this.school = school
  }
}

const student = new Student({
  name: 'Tom',
  age: '18',
  school: 'BeiJing University'
})

console.log(student)
