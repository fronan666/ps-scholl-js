let user = {
  name: 'Вася',
  age: 30,
  city: 'Moscow',

};
const {age, ...userWithouAge} = user;
console.log(age);
console.log(userWithouAge);

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCard: '2234-2344-2212-6544'

};

user = {
 ...user,
 ...additionalData
};
console.log(user)





