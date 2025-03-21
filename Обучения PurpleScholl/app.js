const fullUserName = 'Вася aka terminator Пупкин';

const userName =  fullUserName.slice(0 , fullUserName.indexOf(' '));
console.log(userName);

const userSurname = fullUserName.slice(fullUserName.lastIndexOf ('П'), fullUserName.length );
console.log(userSurname);


