function reverseArr(arr) {
  let length = arr.length;
  let mid = Math.floor(length / 2);
  for(let i = 0; i < mid; i ++) {
    let tem = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = tem;
  }
  return arr;
}
let arr = [1,2,3,4,5];
console.log(reverseArr(arr));