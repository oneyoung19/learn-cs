class LinkedList {
  constructor (val, next) {
    this.val = (val === undefined ? 0 : val)       // 节点值
    this.next = (next === undefined ? null : next) // 指向下一节点的引用
  }
  insert(n0, P) {
    const n1 = n0.next
    P.next = n1
    n0.next = P
  }
  remove(n0) {
    if (!n0.next) return
    // n0 -> P -> n1
    const P = n0.next
    const n1 = P.next
    n0.next = n1
  }
  access(head, index) {
    for (let i = 0; i < index; i++) {
      if (!head) {
        return null
      }
      head = head.next
    }
    return head
  }
  find(head, target) {
    let index = 0
    while (head !== null) {
      if (head.val === target) {
        return index
      }
      head = head.next
      index += 1
    }
    return -1
  }
}
