

const operations = [1000 ,-700, 300, -500, 10000];
const startBalance = 100;
function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for(const element of arrayOfOperations ) {
    balance += element ;
    }

    return balance ;
}
console.log(getBalance(operations , startBalance ));

function checkOperations (arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true ;
    for(const element of arrayOfOperations ) {
        balance += element ;
        if (balance < 0 ){
            isOk = false ;
            break;
        }
    }
    return isOk ;

}
console.log(checkOperations(operations , startBalance ));


function overageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;

    for(const element of arrayOfOperations ) {
        if( element > 0) {
            positiveCount++ ;
            positiveSum += element ;
        }

            if( element < 0){

                negativeCount++ ;
                negativeSum += element ;
            }

    }
return [positiveSum / positiveCount ,negativeSum / negativeCount ];
}
console.log(overageOperations(operations));














