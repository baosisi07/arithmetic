const quickSort = function(arr, left, right) {
    if(left < right) {
        let partitionIndex = partition(arr, left, right)
        quickSort(arr,left,partitionIndex-1<left? left: partitionIndex-1)
        quickSort(arr,partitionIndex+1>right?right:partitionIndex+1,right)
    }
}

const partition = function(arr, start, end) {
    let pivot = arr[end];
    let startIndex = start;
    for(let i = start; i<end; i++) {
        if(arr[i] < pivot) {
            swap(arr, i, startIndex)
            startIndex++
        }
    }
    swap(arr,startIndex,end)
    return startIndex
}

const swap = function(arr,i,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1);
console.log('sort', testArr)