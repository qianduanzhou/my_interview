class EventEmitter {
    constructor() {
        this.events = {};
    }
    // 实现订阅
    on(type, callBack) {
        if (!this.events[type]) {
            this.events[type] = [callBack];
        } else {
            this.events[type].push(callBack);
        }
    }
    // 删除订阅
    off(type, callBack) {
        if (!this.events[type]) return;
        this.events[type] = this.events[type].filter((item) => {
            return item !== callBack;
        });
    }
    // 只执行一次订阅事件
    once(type, callBack) {
        function fn(...rest) {
            callBack.apply(this, rest);
            this.off(type, fn);
        }
        this.on(type, fn);
    }
    // 触发事件
    emit(type, ...rest) {
        this.events[type] &&
            this.events[type].forEach(fn => fn.apply(this, rest));
    }
}
// 使用如下
const event = new EventEmitter();

const handle = (...rest) => {
    console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", (x) => {
    console.log(x);
});
event.emit("dbClick", 55);
event.emit("dbClick");