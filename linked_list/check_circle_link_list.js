// 链表中环的检测

// 方法一：利用哈希表存储遍历节点 若已存在代表存在环
const hasCycle = function (head) {
    let map = new Map();
    let cur = head;
    if (cur === null || cur.next === null) {
        return false
    }
    while (cur !== null) {
        if (map.has(cur)) {
            return true;
        }
        map.set(cur, cur);
        cur = cur.next;
    }
    return false;
};

// 方法二：利用快慢指针 如果存在环形指针 则快慢指针最终会相遇 
// 循环条件为快慢指针不相等 相等则终止循环返回true 为使循环条件成立 fast比slow快一步

const hasCycle1 = function(head) {
    if(head === null || head.next === null) {
        return false
    }
    let slow = head;
    let fast = head.next;
    while(slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true
}

// 获取环形链表入口节点 非环形返回null
// 1.利用哈希表 值为链表索引 存在重复值时 返回当前节点 即为入口节点
const getCycleEntrance = function(head) {
    let map = new Map()
    let index = 0
    let cur = head
    while (cur !== null) {
        if (map.has(cur)) {
            console.log('index ' + map.get(cur))
            return cur
        }
        map.set(cur, index);
        index++;
        cur = cur.next;

    }
    console.log('no cycle')
    return null
}
// 2.Floyd 算法(插点法) 弗洛伊德算法
// 需要两次相遇 起点到入口节点长度为C 环长度为L 那么走到节点需要步数X = C + nL

// 第一阶段相遇 利用快慢指针 fast = 2 * slow  fast = slow + nL =>  slow = nL
// 根据开头的公式 如果让slow走到入口还需C步 C即为头部到入口的距离 所以进行下一步

// 第二阶段相遇找到入口 此阶段两个指针同步移动 但fast从头部开始 再次相遇点即为入口节点
const getCycleEntrance1 = function (head) {
    let slow = head;
    let fast = head;
    while (true) {
        if (fast === null || fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};