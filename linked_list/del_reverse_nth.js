// 删除链表倒数第n个结点

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
// 1.需要两次遍历 添加哨兵节点 避免删除节点的判断 假设链表长度为x 删除倒数第n个节点即删除第x-n+1个节点 只要将其前一节点（x-n）指向后一节点(x-n+2)即可
const removeNthFromEnd = function(head, n) {
    let newHead = new Node(0);
    newHead.next = head;
    let first = head;
    let x = 0;
    while(first.next !== null) { // 第一次遍历获取链表长度
        x++;
        first = first.next;
    }
    x = x - n;
    first = newHead;
    while(x > 0) { // 第二次遍历删除
        x--;
        first = first.next;
    }
    first.next = first.next.next;
    return newHead.next
}
// 2.仅需一次遍历 利用双指针间隔n实现 第二个指针到达链表尾部时 此时第一个指针正好位于删除节点的前一个节点 直接删除即可
const removeNthFromEnd1 = function(head, n) {
    let newHead = new Node(0);
    newHead.next = head;
    let first = newHead;
    let second = newHead;
    while(n > 0) {
        n--;
        second = second.next;
    }
    while(second !== null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return newHead.next;
}