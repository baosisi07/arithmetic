// 假设你站在第一层， 往下移动， 我们把移动到最底层所经过的所有数字之和， 定义为路径的长度。 请你编程求出从最高层移动到最底层的最短路径长度
let yang = [[5],[7,8],[2,3,4],[4,9,6,1],[2,7,9,4,5]]

const getMinPath = (yang) => {
    let a = [] // 存储杨辉三角对应节点走过路径的和的最小值
    for(let i = 0; i < yang.length; i++) {
        a[i] = []
        for(let j = 0; j < i + 1; j++) {
            if(i === 0) { // 第一层直接赋值
                a[i][j] = yang[i][j]
            } else if (i === 1) { // 第二层直接叠加第一层的值
                a[i][j] = yang[i][j] + a[i-1][0]
            } else if(i > 1) {
                if(j === 0) {
                    a[i][j] = a[i-1][0] + yang[i][j] 
                } else if(j === i) {
                    a[i][j] = a[i - 1][j-1] + yang[i][j]
                } else { // 从第三层开始 除头尾节点 其余节点都有两个值 每次只保留最小的那个即可
                    let left = a[i - 1][j - 1] + yang[i][j]
                    let right = a[i - 1][j] + yang[i][j]
                    a[i][j] = Math.min(left,right)
                }
            }
        }
    }
    let s = yang.length - 1 // 获取最后一层
    let minPath = a[s][0];
    for (let i = 0; i < yang.length; i++) { // 最后一层为之前走过的路径之和 直接在这一层找最小值即可
        minPath = Math.min(a[s][i], minPath)
    }
    return minPath
}

const res = getMinPath(yang)
console.log(res)