let obj = {
    a: 1,
    say() {
        console.log('this', this.a)
    }
}
obj.say();
setTimeout(obj.say.bind(obj), 200);

function foo(num) {
    console.log("foo: " + num); // 记录 foo 被调用的次数
    this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i);
    }
} // foo: 6 // foo: 7 // foo: 8 // foo: 9 // foo 被调用了多少次？
console.log(foo, foo.count); // 0 -- WTF?