class Node {
    constructor(ele) {
        this.element = ele
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
        while(currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    display() {
        let currentNode = this.head.next
        while(currentNode) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
    findByValue(ele) {
        let currentNode = this.head.next
        while(currentNode !== null && currentNode.element !== ele) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    findByIndex(i) {
        let currentNode = this.head.next
        let index = 0
        while(currentNode !==null && index !== i) {
            currentNode = currentNode.next
            index++
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    insert(newELe,oldEle) {
        const currentNode = this.findByValue(oldEle)
        const newNode = new Node(newELe)
        if(currentNode.next) {
            newNode.next = currentNode.next
            currentNode.next = newNode
        }
        else if(currentNode.next === null) {
            currentNode.next = newNode
        }

    }
    findPre(ele) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.element !== ele) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    remove(ele) {
        const preNode = this.findPre(ele)
        if(preNode === -1) {
            console.log('未找到元素')
            return 
        }
        preNode.next = preNode.next.next
    }
}

list = new LinkedList()
list.append('sisi')
list.append('nianwen')
list.findByIndex(0)
list.findByValue('sisi')
list.insert('hh','sisi')
list.insert('nw', 'nianwen')
console.log('preNode')
list.findPre('hh')
list.remove('sisi')
list.display()
