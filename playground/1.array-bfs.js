// 广度优先搜索 Breadth First Search
const array = require('./data/tree')

function bfs(tree) {
  let queue = [...tree] // 初始时将所有根节点加入队列
  const result = []

  while (queue.length > 0) {
    const node = queue.shift() // 从队列中移除第一个节点
    result.push(node.id) // 将节点的 id 加入结果数组

    // 如果节点有子节点，将它们加入队列
    if (node.children) {
      queue.push(...node.children)
    }
  }

  return result
}

console.log(bfs(array))

// 递归方式 实现BFS
function bfsRecursive(nodes, result = []) {
  if (nodes.length === 0) return result

  const nextLevel = []
  for (const node of nodes) {
    result.push(node.id) // 将当前层节点的 id 加入结果
    if (node.children) {
      nextLevel.push(...node.children) // 收集下一层的节点
    }
  }

  return bfsRecursive(nextLevel, result) // 递归处理下一层
}

console.log(bfsRecursive(array))
