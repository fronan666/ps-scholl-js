


function convertCurrency(amount, fromCurrency, toCurrency) {
    const rates = {
        USD : 1,
        RUB : 0.024 ,
        EUR : 1.09 ,
        }
        if (!(fromCurrency in rates) || !(toCurrency in rates)) {
            return null;
        }
        const baseAmount = amount*rates[fromCurrency];
        const convertedAmount = baseAmount/rates[toCurrency]
        return parseFloat(convertedAmount.toFixed(2));
    
    }
    console.log(convertCurrency(1000 , 'USD' , 'RUB'))