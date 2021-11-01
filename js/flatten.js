const obj = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 5
        }
    },
    b: [1, 3, {
        a: 2,
        b: 3
    }],
    c: 3
}

function _isObject(val) {
    return typeof val === 'object' && val !== null
}

function flatten(val) {
    if(!_isObject(val)) {
        return;
    }
    let res = {};
    const dfs = (cur, prefix) => {
        if(_isObject(cur)) {
            if(Array.isArray(cur)) {
                cur.forEach((v, i) => {
                    dfs(v, `${prefix}[${i}]`)
                })
            } else {
                for(let k in cur) {
                    dfs(cur[k], `${prefix}${prefix === '' ? '' : '.'}${k}`)
                }
            }
        } else {
            res[prefix] = cur;
        }
    }
    dfs(val, '');
    return res
}

console.log(flatten(obj));