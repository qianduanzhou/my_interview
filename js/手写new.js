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