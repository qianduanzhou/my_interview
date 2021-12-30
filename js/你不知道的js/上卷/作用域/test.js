a = 2;
console.log('a', a)
// console.log('b', b)//会抛出ReferenceError异常，因为RHS查询在所有作用域中找不到该变量

/**
 * 块级作用域
 */
if(true) {//不是块作用域
    var c = 1;
}
for(var i = 1; i < 10; i ++) {//不是块作用域

}
console.log('c', c, i)

var foo = 2
if (foo) { 
    { // <-- 显式的块
        let bar = foo * 2; 
        console.log( bar ); 
    } 
}
// console.log( bar ); // ReferenceError