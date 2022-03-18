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
// console.log(add())
// var num1 = 1,num2 = 2
// function add() {
//     num1 = 10,num2 = 20
//     return num1 + num2
// }

// let obj = {
//     a: 1,
//     o: {
//         b: {
//             c: 1
//         }
//     }
// }
// function defineReactive(obj) {
//     if(typeof obj === 'object') {
//         for(let key in obj) {
//             let value = obj[key]
//             defineReactive(value)
//             Object.defineProperty(obj, key, {
//                 set(newVal) {
//                     if (newVal === value) return;
//                     console.log('set', key)
//                     typeof val === 'object' && defineReactive(newVal)
//                     return newVal
//                 },
//                 get() {
//                     console.log('get', key)
//                     return value
//                 }
//             })
//         }
//     }
// }

// defineReactive(obj)
// console.log(JSON.stringify(obj.o))
// obj.o.b.c = 5
// obj.d = 5
// console.log(obj.d)

// function reactive(obj) {
//     let p = new Proxy(obj, {
//         get(target, key, receiver) {
//             if(Reflect.ownKeys(target).includes(key)) {
//                 console.log('get', key)
//                 const result = Reflect.get(target, key, receiver)
//                 return typeof result === 'object' ? reactive(result) : result
//             }
//         },
//         set(target, key, value, receiver) {
//             console.log('set', key)
//             Reflect.set(target, key, value, receiver)
//         }
//     })
//     return p
// }
// let p = reactive(obj)
// console.log(p.o.b)
// console.log(p.o)
// p.o.a = 5
// p.d = 5
// console.log(p.d)
// var a = 5;
function test(a) {
    console.log(a)
    var a = 1;
    // function a() {

    // }
    console.log(a)
}
test(5)
console.log(a)