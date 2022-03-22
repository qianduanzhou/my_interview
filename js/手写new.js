/**
 * 步骤：
 * 1.首先创建了一个新的空对象
 * 2.设置原型，将对象的原型设置为函数的prototype对象。
 * 3.让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 * 4.判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 */

function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype);
    let res = fn.call(obj, ...args);
    if (res && (typeof res === "object" || typeof res === "function")) {
        return res;
    }
    return obj;
}
//   用法如下：
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
// let p1 = new Person("lihua", 18);
console.log(p1.name);
console.log(p1.__proto__.__proto__);
p1.say();