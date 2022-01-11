# **this**全面解析

## 调用位置

this 既不指向函数自身也不指向函数的词法作用域，this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

```javascript
function baz() { 
    // 当前调用栈是：baz 
    // 因此，当前调用位置是全局作用域 
    console.log( "baz" ); 
    bar(); // <-- bar 的调用位置 
}
function bar() {
    // 当前调用栈是 baz -> bar 
    // 因此，当前调用位置在 baz 中 
    console.log( "bar" ); 
    foo(); // <-- foo 的调用位置 
}
function foo() { 
    // 当前调用栈是 baz -> bar -> foo 
    // 因此，当前调用位置在 bar 中 
    console.log( "foo" ); 
}
baz(); // <-- baz 的调用位置
```

## 绑定规则

### 默认绑定

非严格默认绑定全局。

严格模式下全局对象将无法使用默认绑定

### 隐式绑定 

另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。

```javascript
function foo() { 
    console.log( this.a ); 
}
var obj2 = { 
    a: 42, 
    foo: foo 
};
var obj1 = { 
    a: 2, obj2: obj2 
};
obj1.obj2.foo(); // 42
```

### 显式绑定

call，apply，bind

### new绑定 

使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。 

1.  创建（或者说构造）一个全新的对象。 
2.  这个新对象会被执行 [[ 原型 ]] 连接。 
3. 这个新对象会绑定到函数调用的 this。 
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。 

## 优先级

判断this 

我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断： 

1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 

​	var bar = new foo() 

2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是 指定的对象。 

​	var bar = foo.call(obj2) 

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上 下文对象。 

​	var bar = obj1.foo() 

4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 

​	var bar = foo() 

