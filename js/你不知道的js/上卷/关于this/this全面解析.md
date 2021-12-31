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

