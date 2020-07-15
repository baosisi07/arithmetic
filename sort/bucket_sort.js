// 桶排序
// 创建桶并确定区间 -> 将数组元素放入桶中 -> 桶内排序 -> 取出桶内元素顺序输出
const insertionSort = require('./insertion_sort')
const bucketSort = function(arr,size) {
    if(arr.length < 2) {
        return arr
    }
    let bucket = creatBucket(arr,size)
    return sortedArr(bucket)
}

const creatBucket = function(arr, size = 5) {
    let min = arr[0]
    let max = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    let count = (Math.floor(max-min) + 1)/size
    let bucketArr = [] // 二维数组 一维下标为桶的序号
    for(let i = 0; i < count; i++) {
        bucketArr[i] = []
    }
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(arr[i] / size)
        bucketArr[index].push(arr[i])
    }
    return bucketArr
}

const sortedArr = function(bucket) {
    let sortedArr = []
    for(let i = 0; i < bucket.length; i++) {
        if(bucket[i].length > 0) { //对非空桶内元素进行排序
            bucket[i] = insertionSort(bucket[i])
            sortedArr.push(...bucket[i])
        }
    }
    return sortedArr
}

let arr = [0.1,0.9,4.5,3.7,8,9,9.9,6.6,7.8,8.8,8.5]
let res = bucketSort(arr)
console.log(res)