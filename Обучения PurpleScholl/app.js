const users = [
    { 
      name: 'Вася', 
      surname: 'Пупкин',
      age : 30,
      skills: ['Разработка', 'Devops']
    },
    { 
      name: 'Катя', 
      surname: 'Белова',
      age : 18,
      skills: ['Design']
    }

];


const userData = users.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length
  };
});
console.log(userData);





