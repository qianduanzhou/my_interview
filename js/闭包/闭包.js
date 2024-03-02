var a = 5;
function sayA() {
    console.log(a);
    a = 6;
}
sayA();

function closeFuc() {
    let a = 5
    return function() {
        a ++;
        console.log(a);
    }
}
let close = closeFuc();
close();
close();
close();
