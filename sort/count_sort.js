// 计数排序 特殊的桶排序
// 适用于排序区间不大且值为整数的数组

const countSort = function(arr) {
    let min = arr[0]
    let max = arr[0]

    for(let i =0; i<arr.length; i++) { // 获取数组区间 从最小值开始作为数组的偏移量
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    let w = max - min
    let countArr = new Array(w+1).fill(0)
    
    for(let j = 0; j < arr.length; j++) { // 生成统计数组 下标索引为原数组的值 计数数组的值为原数组该值的个数
        countArr[arr[j] - min] = countArr[arr[j] - min] + 1
    }
    console.log(countArr)
    // 统计数组变形 值为前面值的合 方便后面的排序
    for (let c = 1; c < countArr.length; c++) {
        countArr[c] = countArr[c]  + countArr[c - 1]
    }

    // let sortArr = new Array(arr.length) // 排序数组长度等于原数组
    let sortArr = []
    for(let s = arr.length-1; s>=0; s--) { // 从后遍历原数组（为保持稳定性）越靠后排名值越大 获取计数数组的值 为方便重复值获取相应的排名 每次值减1
        sortArr[countArr[arr[s] - min] - 1] = arr[s]
        countArr[arr[s] - min] = countArr[arr[s] - min] - 1
    }
    return sortArr
}

arr = [67,88,89,98,90,97,99,91,92,93,94,95,99,95]

let res = countSort(arr)
console.log(res)