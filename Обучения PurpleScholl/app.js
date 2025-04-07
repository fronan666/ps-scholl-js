const wallet = {
  balance : 0,
  operation : [],
  increase: function(sum , reason) {
    this.balance += sum;
    this.operation.push({
      reason: reason,
      sum : sum

    });
    return true ;
  },
  decrease: function(sum , reason) {
    if(this.balance < sum) {
      console.log('Недостаточно баланса')
      return false;
    }
    this.balance -= sum;
    this.operation.push({
      reason: reason,
      sum : -sum
    });
    return true;
  },
  getOperationLength: function() {
    return this.operation.length;
  }
};

console.log(wallet.increase(1000 , 'Зарплата'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000 , 'Зарплата'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500 , 'Зарплата'));
console.log(wallet.getOperationLength());
console.log(wallet.balance);




