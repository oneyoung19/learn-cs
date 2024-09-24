/*
组合模式

组合模式（Composite Pattern）是一种结构型设计模式，它将对象组合成树形结构以表示“部分-整体”的层次结构。

组合模式允许客户端以统一的方式处理单个对象和组合对象。它适用于需要表示对象的层次结构，且希望客户端能够一致地处理单个对象和组合对象的场景。

- 组件（Component）：为组合中的对象声明接口。可以是抽象类或者接口，定义了客户端可以访问的操作。
- 叶子（Leaf）：表示组合中的叶子对象，叶子对象没有子对象。它实现了 Component 接口。
- 组合（Composite）：定义有子部件的那些部件的行为。它存储子组件，并实现 Component 接口中的操作
*/

// Component
class FileSystemComponent {
  add(component) {
    throw new Error('Cannot add to a file')
  }

  remove(component) {
    throw new Error('Cannot remove from a file')
  }

  getName() {
    throw new Error('Must implement getName')
  }

  display() {
    throw new Error('Must implement display')
  }
}

// Leaf
class File extends FileSystemComponent {
  constructor(name) {
    super()
    this.name = name
  }

  getName() {
    return this.name
  }

  display() {
    console.log(`File: ${this.name}`)
  }
}

// Composite
class Folder extends FileSystemComponent {
  constructor(name) {
    super()
    this.name = name
    this.children = []
  }

  add(component) {
    this.children.push(component)
  }

  remove(component) {
    this.children = this.children.filter(child => child !== component)
  }

  getName() {
    return this.name
  }

  display() {
    console.log(`Folder: ${this.name}`)
    this.children.forEach(child => child.display())
  }
}

// Usage
const rootFolder = new Folder('Root')

const file1 = new File('File1.txt')
const file2 = new File('File2.txt')

const subFolder = new Folder('SubFolder')
const file3 = new File('File3.txt')

rootFolder.add(file1)
rootFolder.add(file2)
subFolder.add(file3)
rootFolder.add(subFolder)

rootFolder.display()
// Output:
// Folder: Root
// File: File1.txt
// File: File2.txt
// Folder: SubFolder
// File: File3.txt
