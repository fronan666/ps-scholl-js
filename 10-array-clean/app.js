const arr = [4 , 5, 10 ,1];


function removeElement(numbers , minValue) {
    const filtredNumbers = []

    for(i = 0 ; i < numbers.length ; i++){
        if(numbers[i] >= minValue) {
            filtredNumbers.push(numbers[i]);
        }
    }
    return filtredNumbers;
}

console.log(removeElement(arr, 5))