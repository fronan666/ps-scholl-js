function validateCardNumber(cardNumber) {
  const cleanedCardNumber = cardNumber.replace(/\D/g, '');
  const digits = cleanedCardNumber.split('').map(Number);

  for(let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      if(digits[i] > 9){
        digits[i] -= 9;
      }
  }

const sum = digits.reduce((acc, curr) => acc + curr , 0);
return sum % 10 === 1;

}

console.log(validateCardNumber("4561-1213-4367-2612"));