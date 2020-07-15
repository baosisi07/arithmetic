// 将数组中的数据分为两个区间， 已排序区间和未排序区间。 初始已排序区间只有一个元素， 就是数组的第一个元素。 
// 插入算法的核心思想是取未排序区间中的元素， 在已排序区间中找到合适的插入位置将其插入， 并保证已排序区间数据一直有序。 重复这个过程， 直到未排序区间中元素为空， 算法结束。
let arr = [5, 3, 2, 9, 4, 6, 7, 4, 0]
let n = arr.length

const insertionSort = (arr) => {
    let n = arr.length
    if (n <= 1) return arr
    for (let i = 1; i < n; i++) { // 从第二个数开始作为无序数组一次插入有序数组
        let value = arr[i] // 记录插入值
        let s = i-1 // 有序数组最大索引 
        for(; s>=0; s--) { // 从后向前依次遍历有序数组 
            if (value < arr[s]) { // 插入值小于有序数组某值 则空出此位置，并向后移动数据
                arr[s+1] = arr[s]
            } else { // 与插入值比较大于时则跳出循环（因为是有序数组，没必要继续向前比较）
                break;
            }
        }
        arr[s+1] = value
    }
    return arr
}
sortArr = insertionSort(arr)
console.log(sortArr)

module.exports= insertionSort