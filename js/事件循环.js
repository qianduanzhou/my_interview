//例子1
// setTimeout(function () {
//     console.log("1");
// }, 0);
// async function async1() {
//     console.log("2");
//     const data = await async2();
//     console.log("3");
//     return data;
// }
// async function async2() {
//     return new Promise((resolve) => {
//         console.log("4");
//         resolve("async2的结果");
//     }).then((data) => {
//         console.log("5");
//         return data;
//     });
// }
// async1().then((data) => {
//     console.log("6");
//     console.log(data);
// });
// new Promise(function (resolve) {
//     console.log("7");
//       resolve()
// }).then(function () {
//     console.log("8");
// });

//例子2
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(1)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})