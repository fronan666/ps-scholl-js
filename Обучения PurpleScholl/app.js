for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
        console.log(i);
    }
}
//Для уточнения, можешь привести простой пример вложенных циклов, 
//например, используя массив чисел, чтобы, скажем, найти все
// пары чисел, которые в сумме дают определённое значение?

function findPairs(numbers, targetSum) {
    const pairs = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) { // начинаем с i + 1, чтобы не повторять пары
            if (numbers[i] + numbers[j] === targetSum) {
                pairs.push([numbers[i], numbers[j]]);
            }
        }
    }
    return pairs;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
const targetSum = 5;
const result = findPairs(numbers, targetSum);
console.log(result); // Вывод: [[1, 4], [2, 3]]













