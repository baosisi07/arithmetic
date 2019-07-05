// 冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
// 当某次冒泡操作已经没有数据交换时，说明已经达到完全有序，不用再继续执行后续的冒泡操作。


let arr = [1,3,2,9,4,6,7,4,0]


const bubbleSort = (arr) => {
    let n = arr.length
    if (n <= 1) return arr
    for (let i = 0; i < n; i++) {
        let flag = false
        for (let s = 0; s < (n - i - 1); s++) { // 每次冒泡完成后，最后面就多一个元素在正确的位置，这部分不需要再排序，比如：第一次冒泡是0个已排序，需要n次排序，第二次冒泡已有一个排序，需要n-1,第s次冒泡需要n-s-1次
            if (arr[s] > arr[s + 1]) { // 交换位置
                let temp = arr[s]
                arr[s] = arr[s + 1]
                arr[s + 1] = temp
                flag = true
            }
        }

        if (!flag) {
            return arr
        }
    }
}
sortArr = bubbleSort(arr)
console.log(sortArr)
