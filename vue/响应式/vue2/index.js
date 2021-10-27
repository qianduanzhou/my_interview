// 收集依赖 和 通知依赖更新
class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }
    notify(oldValue) {
        this.subs.forEach(sub => {
            sub.update(oldValue)
        })
    }
}

// 依赖，暴露更新方法 notify
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb
        Dep.target = this
        this.oldVal = vm[key]
        Dep.target = null
    }
    update(oldValue) {
        this.oldVal = oldValue
        let newValue = this.vm.$data[this.key]
        if (newValue === this.oldVal) return;
        // 调用回调更新
        this.cb(newValue)
    }
}

//解析模板template 内容，变成dom树
class Compiler {
    constructor(vm) {
        this.vm = vm;
        this.el = vm.$el;
        this.compile(this.el)
    }
    compile(el) {
        let childrenNodes = [...el.childNodes]
        // 遍历每一个节点 针对性的解析
        childrenNodes.forEach(node => {
            if (this.isTextNode(node)) {
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                this.compileElement(node)
            }
            if (node.childNodes && node.childNodes.length) this.compile(node)
        })
    }
    // 文本节点编译
    compileText(node) {
        let reg = /\{\{(.+?)\}\}/
        let val = node.textContent
        if (reg.test(val)) {
            let key = RegExp.$1.trim()
            const value = this.vm[key];
            node.textContent = val.replace(reg, value)
            new Watcher(this.vm, key, (newVal) => {
                node.textContent = newVal
            })
        }
    }
    // 元素节点编译
    compileElement(node) {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attributes
        ![...node.attributes].forEach(attr => {
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                attrName = attrName.substring(2);
                let key = attr.value;
                this.update(node, key, attrName)
            }
        })
    }
    // 动态运行不同的更新方法
    update(node, key, attrName) {
        let updateFn = this[attrName + 'Update']
        updateFn && updateFn.call(this, node, key, this.vm[key])
    }
    // 文本节点的值有更新就会重新渲染。本质还是利用 js修改 textContent
    textUpdate(node, key, content) {
        node.textContent = content
        new Watcher(this.vm, key, newVal => {
            node.textContent = newVal
        })
    }
    // v-model 更新
    modelUpdate(node, key, value) {
        const typeAttr = node.getAttribute('type')
        // 对于输入框，做了过滤
        if (typeAttr == "text") {
            node.value = value;
            new Watcher(this.vm, key, newVal => {
                node.value = newVal
            })
            node.addEventListener('keyup', () => {
                this.vm.$data[key] = node.value
            })
        }
    }
    isDirective(attr) {
        return attr.startsWith('v-')
    }
    isTextNode(node) {
        return node.nodeType === 3
    }
    isElementNode(node) {
        return node.nodeType === 1
    }
}

/*
 将数据变为响应式对象
*/
class Observer {
    constructor(data) {
        this.walk(data);
    }
    walk(data) {
        if (!data || typeof data != 'object') return;
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        })
    }
    defineReactive(obj, key, value) {
        // 递归的将对象子属性变为响应式
        this.walk(value);
        const self = this;
        let dep = new Dep()
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                //这里 target 即为 Watcher, 存在即添加依赖
                Dep.target && dep.addSub(Dep.target)
                // 注意，这里返回 Obj[key] 会爆栈！！（死循环）
                return value
            },
            set(newValue) {
                // 旧值与新值相同则不更新
                const oldval = obj[key]
                if (newValue === obj[key]) return;
                value = newValue;
                // 如果新值是
                self.walk(newValue)
                // 更新视图
                dep.notify(oldval)
            }
        })
    }
}
class Vue {
    constructor(options) {
        this.$options = options || {}
        // 传ID或者Dom都可以。
        this.$el = typeof options.el === 'string' ?
            document.querySelector(options.el) : options.el;
        this.$data = options.data;
        // 处理data中的属性 
        this._proxyData(this.$data);
        // 将data变为响应式
        new Observer(this.$data)
        // 模板编译
        new Compiler(this)
    }
    // 将data中的属性注册到vue
    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newValue) {
                    if (newValue === data[key]) return;
                    data[key] = newValue;
                }
            })
        })
    }
}

new Vue({
    el: '#app',
    data: {
        name: 'ethan',
        sex: '男',
        text: 'text',
    }
})