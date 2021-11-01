/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *  左括号必须用相同类型的右括号闭合。
 *  左括号必须以正确的顺序闭合。
    *  示例 1：
    *  输入：s = "()"
    *  输出：true
    *  示例 2：
    *  输入：s = "()[]{}"
    *  输出：true
    *  示例 3：
    *  输入：s = "(]"
    *  输出：false
 */

const str = '({[]})'
// const str = '({[}})'
// const str = '(){}[]'
// const str = ''


function isValid(str) {
    if(str.length === 0 || str.length % 2 === 1) {
        return false;
    }
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let leftArr = ['(', '[', '{']
    let flag = str.split('').find(v => {
        if(leftArr.includes(v)) {
            stack.push(v);
        } else {
            let s = stack.pop();
            if(map[s] !== v) {
                return true;
            }
        }
    });
    if(stack.length > 0) {
        return false;
    }
    return !flag;
}

console.log(isValid(str));