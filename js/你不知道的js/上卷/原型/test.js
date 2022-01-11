function Foo() { /* .. */ } 
Foo.prototype = { /* .. */ }; // 创建一个新原型对象
var a1 = new Foo(); 
console.log(a1.constructor === Foo); // false! 
console.log(a1.constructor === Foo.prototype.constructor, a1.constructor === Object); // true!
console.log(a1.__proto__ === Foo.prototype); // true!