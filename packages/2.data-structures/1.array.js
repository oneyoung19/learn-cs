class LinkedList {
  constructor () {}
  insert (arr, item, index) {
    // 把索引 index 以及之后的所有元素向后移动一位
    for (let i = arr.length - 1; i > index; i--) {
      arr[i] = arr[i - 1]
    }
    // 将 item 赋给 index 处的元素
    arr[index] = item
  }
  remove(arr, index) {
    // 把索引 index 之后的所有元素向前移动一位
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]
    }
  }
  access(arr) {
    // 在区间 [0, arr.length) 中随机抽取一个数字
    const random_index = Math.floor(Math.random() * arr.length)
    // 获取并返回随机元素
    const random_num = arr[random_index]
    return random_num
  }
  forEach () {}

  find(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i
    }
    return -1
  }
}
