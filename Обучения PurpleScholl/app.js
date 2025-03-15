const arr = [2, 4, 4, 10 ];



const avg = arr.reduce((acc , el, i) => {
    if(i != arr.length -1){
        return acc + el;
    }else {
        return (acc + el)/ arr.length
    }
}, 0);

console.log(avg);



//0 - acc = 0, value = 100
//1 -acc = 100 , value = -20 и т.д