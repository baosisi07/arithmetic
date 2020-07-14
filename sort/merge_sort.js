const mergeSort = function(arr) {//递归分解
    if(arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return mergeArr(mergeSort(left),mergeSort(right)) // 递归 分解 合并 返回排序数组
}

const mergeArr = function(left,right) {
    let temp = []
    let leftIndex = 0
    let rightIndex = 0
    while(left.length > leftIndex && right.length > rightIndex) { // 左右数组都不为空时 将最小的元素插入临时数组
        if(left[leftIndex] <= right[rightIndex]) { // 左边数组元素较小时插入临时数组 并将其指针后移继续比较 知道某个数组为空
            temp.push(left[leftIndex])
            leftIndex++
        } else {
            temp.push(right[rightIndex])
            rightIndex++
        }
    }
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) // 将循环后不为空的数组后半部分直接拼接到临时数组
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
const sortedArr = mergeSort(testArr);
console.log('sort', sortedArr)
