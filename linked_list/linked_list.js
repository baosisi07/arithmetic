class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        
        this.head = new Node('head')
    }
    append(ele) {
        const newNode = new Node(ele)
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    // 遍历显示所有节点
    display() {
        let currentNode = this.head.next
        while(currentNode) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
    findByValue(ele) {
        let currentNode = this.head.next
        while(currentNode!==null && currentNode.element !== ele) {
            currentNode = currentNode.next 
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    findByIndex(i) {
        let currentNode = this.head.next
        let currentIndex = 0
        while (currentNode !== null && currentIndex !== i) {
            currentNode = currentNode.next
            currentIndex++
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    insert(ele,afterEle) {
        const newNode = new Node(ele)
        const currentNode = this.findByValue(afterEle)
        if(currentNode === -1) {
            console.log('未找到插入位置')
            return
        }
        newNode.next = currentNode.next
        currentNode.next = newNode
        
    }
    findPrev(ele) {
        let currentNode = this.head
        
        while (currentNode.next !== null && currentNode.next.element !== ele) {
            currentNode = currentNode.next
        }
        if (currentNode.next === null) {
            return -1
        }
        console.log(currentNode)
        return currentNode
    }
    remove(ele) {
        const preNode = this.findPrev(ele)
        if (preNode === -1) {
            console.log('未找到元素')
            return
        }
        preNode.next = preNode.next.next
        
    }
}
// Test
const LList = new LinkedList()
LList.append('chen')
LList.append('curry')

LList.insert('sisi', 'curry')

LList.display()

LList.findByValue('curry')
LList.findByIndex(0)
LList.findPrev('sisi')
LList.remove('sisi')
LList.display()