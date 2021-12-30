Function.prototype.call2 = function (context) {
    context = context || window;
    context.fn = this;

    let args = [];
    for(let i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }
    let result = context.fn(...args)
    delete context.fn
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
obj.say.call(obj2, 2)