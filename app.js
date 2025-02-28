console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);

let a;
const userName = a || 'Петя';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);


