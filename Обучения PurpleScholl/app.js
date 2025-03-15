const arr = [2, 4, 4, 10, 20];
function some(array, element) {
    const res = array.find(el => el===element)
    return res == undefined? false : true ;
}
console.log(some(arr , 2));

const result = arr.some(el => el === 2);
console.log(result);


