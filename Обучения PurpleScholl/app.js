const price = [[100, 200], [120, 100], [200, 350]];

const result  = price
.map(product => product[1] - product[0])
.filter(price => price > 0);
console.log(result);

