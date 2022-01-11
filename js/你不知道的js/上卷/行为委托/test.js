let Father = {
    a: 1,
    sayA() {
        console.log(this.a)
    }
}
let Children = Object.create(Father)
Children.sayA = function() {
    console.log(this.a)
}
let c1 = Object.create(Children)
let c2 = Object.create(Children)
c1.sayA()
c2.sayA()
console.log(c1.__proto__ === Children)
console.log(Children.__proto__ === Father)
console.log(Father.__proto__ === Object.prototype)