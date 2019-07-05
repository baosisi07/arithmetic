// 类似插入排序， 也分已排序区间和未排序区间。 但是选择排序每次会从未排序区间中找到最小的元素， 将其放到已排序区间的末尾。
let arr = [5]

const selectionSort = (arr) => {
    let n = arr.length
    if(n<=1) return arr
    for(let i =0;i<n;i++) {
        let min = i // 最小值索引，初始赋值第一个
        for (let s = i + 1; s < n; s++) { // 未排序数组中找到最小值索引
            if (arr[s] < arr[min]) {
                min = s
            }
        }
        // 从头依次赋值
        if(arr[i] > arr[min]) { // 将最小值与头部对应位置交换
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

sortArr = selectionSort(arr)
console.log(sortArr)