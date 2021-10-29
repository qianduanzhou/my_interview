//原型链继承
function Father() {
    this.a = 1
}
Father.prototype.sayA = function() {
    return this.a
}

function Child() {
    Father.call(this)
}

/*方式一，Object.create创建原型*/
// var prototype = Object.create(Father.prototype);
// Child.prototype = prototype
// Child.prototype.constructor = Child

/*方式二，新建一个函数*/
var Func = function() {}
var prototype = Father.prototype
Func.prototype = prototype
Child.prototype = new Func()
Child.prototype.constructor = Child

var c = new Child()

console.log(c.a, c.sayA())
console.log(c.__proto__ === Child.prototype)
console.log(c instanceof Father, c instanceof Child)
console.log(Child.prototype.__proto__ === Father.prototype)

