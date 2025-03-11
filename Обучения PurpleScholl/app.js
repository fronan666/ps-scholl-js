function add(a , b) {
    return a+b ;
}
function subtract(a ,b) {
    return a - b ;
}


function power(a ,b) {
    return a**b
}
//функция высшего порядка

function calculate( a ,b ,fn) {
    console.log(fn.name);
    const res = fn(a , b);
    return res ;
}

let result = calculate(3 , 5 , subtract);
console.log(result);
result = calculate(3 , 5 , add);
console.log(result);
result = calculate(3 , 5 , power);
console.log(result);














