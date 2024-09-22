/*
构造器模式

该模式即是利用构造函数和原型链来实现类。
*/

function Person ({ name, age } = {}) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  return this.name
}

function Student ({ school, ...rest } = {}) {
  Person.call(this, rest)
  this.school = school
}

// 设置子类的原型为父类的原型，继承父类的方法
Student.prototype = Object.create(Person.prototype)
// 确保构造函数指向正确的子类
Student.prototype.constructor = Student

Student.prototype.getSchool = function () {
  return this.school
}

const student = new Student({
  name: 'Tom',
  age: '18',
  school: 'BeiJing University'
})

console.log(student, student.getName(), student.getSchool())
