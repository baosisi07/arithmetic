
// 二分查找适用于范围 针对静态数据的算法 时间复杂度O(logn) 适用于”近似“查找问题
// 1.必须依赖数组
// 2.有序数组 
// 也可使用散列表或二叉查找树 但二分查找更节省内存
const binarySearch = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n-1
    while(low <= high) {
        let mid = low+ Math.floor((high-low)/2)
        // let mid = low + ((high - low) >> 1) // 位移运算右移一位等于除以2取整 位移运算结果均为整数
        if(arr[mid] === value) {
            return mid
        } else if(arr[mid] < value) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
    
}
let arr = [1, 4, 5, 9, 10, 13, 19, 24, 29]
let x = binarySearch(arr,29)
console.log(x)