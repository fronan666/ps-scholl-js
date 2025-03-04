function macbookCredit (age, hasJob) {
    switch(true){
        case age >= 24 && hasJob :
            return 500 ;
        case age >= 24 :
            return 100 ;
        default :
        return 0 ;
    }
}

function canBuy(productedPrice , age, money, hasJob = false ) {
    const CreditMomey = macbookCredit (age, hasJob) ;
    return productedPrice <= money + CreditMomey ;
}
console.log(canBuy(2000, 24, 1501, true))

