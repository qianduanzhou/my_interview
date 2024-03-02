function test(a, b, c) {
  return a + b + c
}
let addC = function (fn, ...args1) {
  let length = fn.length;
  return function res(...args2) {
    if (length === args2.length + args1.length) return fn(...args1, ...args2);
    else return (...args3) => res(...args2, ...args3)
  }
}
let c = addC(test,1,2,3)

console.log('c', c())