/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

// 链表反转 迭代法
const reverseList = (head) => {
    let cur = head;
    let pre = null;
    while (cur !== null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur; // 前驱节点向后移动
        cur = next; // 当前节点向后移动 进入下一轮循环
    }
    return pre;
}
// 链表反转 递归法
const reverseList1 = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    let cur = reverseList1(head.next); 
    // 遍历到最后一个元素（不为null的元素）才有返回值 然后才继续执行后续才做 此时cur等于最后一个元素 此时head为最后一个元素的前一个
    // 比如 1->2->3->4->5 最后有返回值的递归结果为5 参数为head.next= 5, cur = 5
    head.next.next = head; // 第一次将5->4
    head.next = null; // 将原来的4->5 变为4->null 否则会造成循环
    return cur; // 返回head（即5） 每次返回结果的next都有变化 比如第一次为 5->4 第二次为5->4->3 最后将反转结果返回
}

// 范围内的链表反转 1≤ m≤ n≤ 链表长度
// 1. 反转范围内链表 然后将反转后的链表与前后链表相连
const reverseBetween = function(head, m, n) { // 涉及四个变量 preTail(反转起点的前一个节点)、reverseHead(反转部分的第一个节点)、pre和cur(用于遍历及反转指针)
    // 初始遍历变量值
    let cur = head;
    let pre = null;
    if(cur === null) return null;
    while(m > 0){// 将用于遍历的cur和pre移动到合适的位置
        pre = cur;
        cur = cur.next;
        m--;
        n--;
    }
    // 到达适当位置时存储 反转开始的前一节点和开始节点 用于反转操作结束后修复前后指针指向
    let preTail = pre;
    let reverseHead = cur; 
    while(n > 0) { // 反转区间大于0时进行反转操作
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        n--
    }
    if(preTail !== null) {
        preTail.next = pre
    } else {
        head = pre
    }
    reverseHead.next= cur;
    return head;
};

// 2.递归方式交换范围内两端的节点 然后将两端节点向中间移动 直到端点重合或交叉
const reverseBetween1 = function(head, m, n) {
    this.left = head;
    this.stop = false;
    recursiveReverse(head, m, n);
    return head;
}
const recursiveReverse = function(right, m, n) {
    if(n ===1) { // 右节点到达n位置时结束递归
        return
    }
    if(m >1) {
        this.left = this.left.next;
    }
    right = right.next;

    recursiveReverse(right, m-1, n-1);

    // 回溯操作 交换节点直到节点重合或交叉
    if(this.left === right || this.left === right.next) {
        this.stop = true
    }
    if(!this.stop) {
        let temp = this.left.value;
        right.value = temp;
        this.left.value = temp;
        this.left = this.left.next; // 交换值后移动左节点 因为是右节点的回溯 右节点自动回退上一层
    }
}

const LList = {
    value: '11',
    next: {
        value: '22',
        next: {
            value: '33',
            next: {
                value: '44',
                next: null
            }
        }
    }
}
console.log('first reverse')
const list = reverseList(LList)
console.log(list)
console.log('second reverse')
const list1 = reverseList1(list)
console.log(list1)
console.log('between reverse while')
const list2 = reverseBetween(LList, 2, 4)
console.log(list2)
console.log('between reverse recursive')
const list3 = reverseBetween1(LList, 2, 4)
console.log(list3)
