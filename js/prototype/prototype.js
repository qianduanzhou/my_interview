// 木易杨
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};
Foo.prototype.constructor = Foo
function Bar() {}

// 设置 Bar 的 prototype 属性为 Foo 的实例对象
Bar.prototype = new Foo();


Bar.prototype.foo = 'Hello World';

console.log(Bar.prototype.constructor === Object)

// true

// 修正 Bar.prototype.constructor 为 Bar 本身
Bar.prototype.constructor = Bar;

var test = new Bar() // 创建 Bar 的一个新实例
console.log(test);


function create() {
	// 1、创建一个空的对象
    var obj = new Object()
	// 2、获得构造函数，同时删除 arguments 中第一个参数
    console.log('arguments', arguments),
    Con = [].shift.call(arguments);
	// 3、链接到原型，obj 可以访问构造函数原型中的属性
    console.log('Con', Con, arguments)
    Object.setPrototypeOf(obj, Con.prototype);
	// 4、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 5、优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};

function C(v) {
    this.v = v
}
let c = create(C, 1,2,3)
console.log(c)