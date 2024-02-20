/**
 * 斐波那契数，指的是这样一个数列：1、1、2、3、5、8、13、21、……
 * 在数学上，斐波那契数列以如下被以递归的方法定义：F0=0，F1=1，Fn=Fn-1+Fn-2（n>=2，n∈N*），
 * 用文字来说，就是斐波那契数列由 0 和 1 开始，之后的斐波那契数列系数就由之前的两数相加。　　
 */
function fibonacci(n) {
  let arr = [];
  for (let i = 0; i < n; i ++) {
    if (i === 0 || i === 1) arr.push(1);
    else arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
console.log(fibonacci(30))