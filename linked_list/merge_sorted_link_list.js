// 两个有序（升序）的链表合并
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 迭代法
// 利用新指针存储合并排序的节点 两个链表顺序遍历 每次往新链表插入一个最小值 将包含最小值的链表后移依次比较 直到其中一个链表没有值 然后直接将新链表的指针直接指向未完成链表的当前指针
const mergeList = function(L1, L2) {
       let l1Cur = L1;
       let l2Cur = L2;
       let newL = {
           next: null
       };
       let curN = newL;
       while (l1Cur !== null && l2Cur !== null) {
           if (l1Cur.val > l2Cur.val) {
               curN.next = l2Cur;
               l2Cur = l2Cur.next;
           } else if (l1Cur.val <= l2Cur.val) {
               curN.next = l1Cur;
               l1Cur = l1Cur.next;
           }
           curN = curN.next;
       }
        curN.next = l1Cur === null ? l2Cur : l1Cur
       return newL.next
}

// 递归法
// 比较当前头指针大小 给较小的头结点指定next即可排序
// 拆解过程：
// L1[0] < L2[0]时， mergeList1(L1,L2) = L1[0] + mergeList1(L1[1:],L2[0])  
// 否则， mergeList1(L1,L2) = L2[0] + mergeList1(L1[0],L2[1:])  
// 当任一链表为空时结束递归 将next直接指向非空的链表即可
const mergeList1 = function(L1, L2) {
    if(L1 === null) {
        return L2
    }else if(L2 === null) {
        return L1
    }else if(L1.val < L2.val) {
        L1.next = mergeList1(L1.next,L2) // 每次给值小的节点指定next并返回 最终会得到合并后完整的链表
        return L1
    } else {
        L2.next = mergeList1(L1, L2.next)
        return L2
    }
}