const transactionsInUSD = [10 , -7 , 50 , -10 , 100];

const transactionInRUB = []
for (transaction of transactionsInUSD) {
    transactionInRUB.push(transaction * 89);
}
 console.log(transactionsInUSD);
// console.log(transactionInRUB);

const transactionInRUB2 =  transactionsInUSD
    .map((transaction , i) => transaction * 89 );
console.log(transactionInRUB2 );


