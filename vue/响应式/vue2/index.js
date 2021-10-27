window.onload = () => {
    function defineReactive(obj, key) {
        const dep = new Dep();
        Object.defineProperties(obj, {
            key: {
                enumerable: true,
                configurable: true,
                get: function() {
                    dep.depend();
                    return obj[key];
                },
                set: function(newVal) {
                    obj[key] = newVal;
                    dep.notify();
                }
            }
        })
    }
    
    /**
     * 观察者类
     * 每个data里面的属性都会绑定一个dep
     */
    class Dep {
        static target;
        
        constructor() {
            this.subs = [];
        }
        depend() {
            if(Dep.target) {
                Dep.target.addDep();
            }
        }
        notify() {
            const subs = this.subs.slice();
            for(let i = 0, l = subs.length; i < l; i ++) {
                subs[i].update();
            }
        }
    }
    
    class Watcher {
        constructor(vm, expOrfn) {
            this.getter = expOrfn;
            Dep.target = this;
            this.update(vm)
        }
        update(vm) {
            this.getter.call(vm, vm)
        }
        addDep() {
            dep.subs.push(this)
        }
    }
    
    /**
     * 模拟一个vue组件
     */
     class Component {
        constructor (){
            this.$el = null;
            this.data = {
                a: 1
            }
            this.mixinData();
        }
        mixinData() {
            for(let key in this.data) {
                this[key] = this.data[key]
                defineReactive(this.data, key)
            }
        }
        update() {
            this._render()
        }
        _render() {
            return createElement('h1', this.a)
        }
    }
    
    function createElement(tagName, value) {
        let tag = document.createElement(tagName);
        tag.innerText = value;
        component.$el.appendChild(tag);
    }
    
    //mount阶段
    function mountComponent(vm, el) {
        vm.$el = el
        updateComponent = () => {
            vm.update()
        }
        new Watcher(vm, updateComponent);
    }
    
    
    const component = new Component();
    const el = document.querySelector('#app');
    mountComponent(component, el)
    window.component =  component
}
