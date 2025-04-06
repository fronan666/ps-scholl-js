const userArray = ['Слава', 'Воронцов', 24];

const user = {
  name: 'Слава',
  surname: 'Воронцов',
  age: 24,
  skills:  [
    'Прграммирования',
    'Готовка'
  ],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ'
};

console.log(user);
console.log(user.skills);
console.log(user['skills']);

const levelEdu = 'Pro';
console.log(user['edu' + levelEdu]);

user.city = 'Москва';
console.log(user.city);

user.age = 30;
console.log(user.age);




