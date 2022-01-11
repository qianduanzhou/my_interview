/**
 * 扁平化去重且排序
 */
//1.普通方法
const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
class Main {
    constructor(arr) {
        this.arr = arr
        this.arr1 = []
    }
    bphArr(arr) {
        arr.forEach(item => {
            if(Object.prototype.toString.call(item) == '[object Array]') {
                this.bphArr(item)
            } else {
                this.arr1.push(item)
            }
        })
    }
    setArr(arr) {
        for(let i = 0; i < arr.length; i ++) {
            for(let j = i + 1; j < arr.length - i; j ++) {
                if(arr[i] == arr[j]) {
                    arr.splice(j, 1)
                    i--
                    j--
                }
            }
        }
    }
    sortArr(arr) {
        for(let i = 0; i < arr.length; i ++) {
            for(let j = 0; j < arr.length - i - 1; j ++) {
                let temp = ''
                if(arr[j] > arr[j + 1]){
                    temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
    }
    init(arr) {
        this.bphArr(arr) //扁平化
        this.setArr(this.arr1)//去重
        this.sortArr(this.arr1)//排序
    }
}
let main = new Main(arr)
main.init(main.arr)
console.log(main)
//2.es6方法
// let copyArr = JSON.parse(JSON.stringify(arr))
// console.log(Array.from(new Set(copyArr.flat(Infinity))).sort((a, b) => a - b))

/**
 * 转换树结构
 */
let treeArr = [
    {
        id: 1,
        name: 1,
        pid: 0
    },
    {
        id: 2,
        name: 2,
        pid: 1
    },
    {
        id: 3,
        name: 3,
        pid: 1
    },
    {
        id: 4,
        name: 4,
        pid: 3
    },
    {
        id: 5,
        name: 5,
        pid: 4
    },
    {
        id: 6,
        name: 6,
        pid: 0
    },
]
let tree = []
//方法一
function renderTree(arr, data, isFirst = true) {
    let copyArr = JSON.parse(JSON.stringify(arr));
    for(let i = 0; i < copyArr.length; i ++) {
        if(copyArr[i].pid === 0 && isFirst) {
            data.push(copyArr[i])
            copyArr.splice(i, 1)
            i--
        } else {
            data.some(item => {
                if(copyArr[i].pid === item.id) {
                    item.children = [...(item.children || []), copyArr[i]]
                    copyArr.splice(i, 1)
                    i--
                    renderTree(copyArr, item.children, false)
                    return true
                }
            })
        }
    }
}
// renderTree(treeArr, tree)
//方法二
let copyTreeArr = JSON.parse(JSON.stringify(treeArr))
copyTreeArr.forEach(i => i.pid ? copyTreeArr.some(j => j.id === i.pid && (j.children = [...(j.children || []), i])) : tree.push(i))
console.log('tree', JSON.stringify(tree))