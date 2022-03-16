let arr = ['{', '(', '[', ']', ')', '}'];

function check(data) {
    if(data.length % 2 !== 0) {
        return false;
    }
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = [];
    for(let i = 0; i < data.length; i ++) {
        let ch = data[i];
        if(map[ch]) {
            stack.push(ch);
        } else {
            if(!stack.length || map[stack.pop()] !== ch) {
                return false
            }
        }
    }
    return !stack.length;
}

console.log(check(arr))