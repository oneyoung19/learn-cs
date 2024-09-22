/*
适配器模式

该模式创建一个公共的接口，保证不同的服务接入后，能够有一套相同的逻辑。

在Axios中，就提供了基于XML和node的适配器。
*/

class Person {
  constructor ({ name, gender, adapter } = {}) {
    this.name = name
    this.gender = gender
    this.adapter = adapter || (() => Promise.resolve({ dressName: 'Default' }))
  }

  dress () {
    const { name } = this
    this.adapter().then(({ dressName } = {}) => {
      return getDress({
        dressName
      }).then(result => {
        console.log(`${name} have dressed '${result}'`)
        return result
      })
    })
  }
}

function getDress({ dressName } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dressName)
    }, 1000)
  })
}

const man = new Person({
  name: 'Tom',
  gender: 'man',
  adapter () {
    return Promise.resolve({
      dressName: 'Adidas'
    })
  }
})

const woman = new Person({
  name: 'Jeff',
  gender: 'woman',
  adapter () {
    return Promise.resolve({
      dressName: 'Nike'
    })
  }
})

man.dress()
woman.dress()
