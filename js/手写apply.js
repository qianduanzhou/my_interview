Function.prototype.apply2 = function(context, args = []) {
    context = context || window;
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

let obj = {
    a: 1,
    say(b) {
        console.log(this.a, b)
    }
}
let obj2 = {
    a: 2
}
obj.say.apply2(obj2, [3])