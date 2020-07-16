let arr = [1, 5, 5, 5,5,9, 10, 13, 19, 24, 29]

// 查找第一个值等于给定值的元素
const searchFirst = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] === value) {
            if (mid == 0 || arr[mid - 1] < value) {
                return mid
            } else {
                high = mid -1
            }
            
        } else if (arr[mid] < value) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

// 查找最后一个值等于给定值的元素
const searchLast = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] === value) {
            if (mid == 0 || arr[mid + 1] > value) {
                return mid
            } else {
                low = mid + 1
            }

        } else if (arr[mid] < value) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

// 查找第一个大于等于给定值的元素
const searchFirstGreater = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] >= value) {
            if (mid == 0 || arr[mid - 1] < value) {
                return mid
            } else {
                high = mid - 1
            }
        } else {
            low = mid + 1
        }
    }
    return -1
}

// 查找最后一个小于等于给定值的元素
const searchLastLesser = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid] <= value) {
            if (mid == n-1 || arr[mid + 1] > value) {
                return mid
            } else {
                low = mid + 1
            }
        } else {
            high = mid - 1
        }
    }
    return -1
}
// 循环有序数组查找等于给定值的元素
const search = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n - 1
    let indexArr = []
    
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]||arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) { //找出中间分界值
            let x = findEqual(arr, low, mid, value)
            if (x !== -1) {
                indexArr.push(x)
            }
            let y = findEqual(arr,mid+1,high,value)
            if (y !== -1) {
                indexArr.push(y)
            }
            return indexArr

        } else if (arr[mid - 1] < arr[mid] && arr[mid + 1] > arr[mid]) {
            low = mid + 1
        } else if (arr[mid - 1] > arr[mid] && arr[mid + 1] < arr[mid]) {
            high = mid - 1
        }
    }
}
const findEqual = (arr,low,high, value) => {
    while(low<=high) {
        let mid = low + ((high - low) >> 1)
        if (mid == 0 || arr[mid - 1] <= arr[mid]) { // mid在递增区间
            if (arr[mid] < value) {
                low = mid + 1
            } else if (arr[mid] > value) {
                high = mid -1
            } else {
                return mid
            }
        } else if (mid == high || arr[mid - 1] >= arr[mid]){  // mid在递减区间
            if (arr[mid] < value) {
                high = mid - 1
            } else if (arr[mid] > value) {
                low = mid + 1
            } else {
                return mid
            }
        }
    }
    return -1
}
let x = searchFirst(arr,5)
// let x = searchLastLesser(arr, 35)
console.log(x)
let arr1 = [3, 4, 5, 6, 4, 3, 2, 1]
let arr2 = [33, 24, 15, 6, 15, 23, 32, 41]
let arr3 = [4, 5, 6, 1, 2, 3]
// let y = search(arr2, 6)
// console.log(y)