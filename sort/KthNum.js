// 查找数组中第K大的元素 事件复杂度为O(n) 利用快排思想 分治及分区
const kthNum = function(arr,k) {
    let len = arr.length
    if(k > len) {
        return -1
    }

    let p = partition(arr, 0, len-1)
    while(k !== p + 1) {
        if(k > p + 1) {
            p = partition(arr, p+1, len-1)
        } else {
            p = partition(arr, 0, p -1)
        }
    }
    return arr[p]
}

// 分界点pivot初始为最后一个元素 在最后一个之前的元素里分排序区和非排序区（即遍历区间） 排序分界点是i(初始为头部元素) 
// 小于pivot的元素与分界点i进行交换 并将分界点i和遍历索引j向后移动 
// 否则不交换 只有j继续后移
// 遍历结束后将i处的元素与初始分界点pivot进行交换 并返回i (i即问分界点）分界点左边元素小于分界点 右边元素大于分界点
const partition = function(arr, start, end) { 
    let pivot = arr[end]
    let i = start // 排序区分界点
    for(let j = start; j<end; j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr,i,end)
    return i
}

const swap = function(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [1,5,3,7,6,5,7,8,9,0]
let s = kthNum(arr,3)
console.log(s)