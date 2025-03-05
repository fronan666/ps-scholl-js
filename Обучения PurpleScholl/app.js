const users = ['Аня', 'Петя', 'Вася'];
console.log(users);
users[2] = 'Кристина';
console.log(users);
users[3] = 'Слава';
console.log(users);
const arrLenght = users.push('Никита');
console.log(users);
console.log(arrLenght);

users.unshift('Вика');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift()
console.log(el2);
console.log(users);
