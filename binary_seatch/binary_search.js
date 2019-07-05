let arr = [1,4,5,9,10,13,19,24,29]

const binarySearch = (arr, value) => {
    let n = arr.length
    let low = 0
    let high = n-1
    while(low <= high) {
        let mid = low+ Math.floor((high-low)/2)
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

let x = binarySearch(arr,29)
console.log(x)