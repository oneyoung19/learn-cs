// 深度优先搜索 Deep First Search
const array = require('./data/tree')

const list = []
function search (array = []) {
  for (let i = 0;i < array.length; i++) {
    const item = array[i]
    list.push(item.id)
    if (item.children) {
      search(item.children)
    }
  }
}

search(array)

console.log(list)
