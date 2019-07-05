// 利用快慢指针实现
// 快指针每次走两个
// 慢指针每次一个
// 慢指针边走边将指针逆序
// 比较时slow代表后半部分 pre代表逆序后的前半部分 依次比较
const isPalindromic = (listHead) => {
    let pre = null
    let slow = listHead
    let fast = listHead
    if(list===null || list.next === null) {
        return true
    }
    while(fast!==null&&fast.next!==null) { // 链表为偶数个时 比如 1->2->3->3->2->1->null 处理后pre为3->2->1->null slow为原链表后半部分
        fast = fast.next.next
        let next = slow.next
        slow.next = pre
        pre = slow // 保存当前slow为pre 等待下一轮指定next
        slow = next
    }

    if (fast !== null) { // 链表为奇数个时 比如 1->2->3->2->1->null fast走了两次 pre为第二个 slow为第三个 此时将slow向后移位到第四个 pre和slow此时正好对应为2 然后依次比较
        slow = slow.next
    }

    while(slow !== null) {
        if(slow.val !== pre.val) {
            return false
        }
        slow = slow.next
        pre = pre.next
    }
    return true

    
}

list = {
    val: 'sisi',
    next:  {
        val: 'nianwen',
        next:{
            val: 'dd',
            next: {
                val: 'nianwen',
                next: {
                    val: 'sisi',
                    next: null
                }
            }
        }
    }
}

console.log(isPalindromic(list))