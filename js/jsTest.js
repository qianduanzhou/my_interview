/**
 * 执行顺序 promise
 */
// console.log('script start')
// let promise1 = new Promise(function (resolve) {
//     console.log('promise1')
//     resolve()
//     console.log('promise1 end')
// }).then(function () {
//     console.log('promise2')
// })

// setTimeout(function(){
//     console.log('settimeout')
// })
// console.log('script end')
/**
 * 执行顺序 async await
 */ 
//  async function async1(){
//     console.log('async1 start');
//      await async2();
//      console.log('async1 end')
//  }
//  async function async2(){
//      console.log('async2')
//  }
 
//  console.log('script start');
//  async1();
//  console.log('script end')

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');
console.log(add())
var num1 = 1,num2 = 2
function add() {
    num1 = 10,num2 = 20
    return num1 + num2
}
