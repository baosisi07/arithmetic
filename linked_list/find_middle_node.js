// 求链表的中间结点

// 利用快慢指针寻找
const middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next || fast.next;
    }
    return slow;
};