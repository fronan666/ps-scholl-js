//Данные
const payRateUSD = 80;
const dayHours= 5; 
const dayWork = 5;
const ProjectHours = 40; 
const ProjectDay = 11;
//Результат
const revenue = ProjectHours * payRateUSD ;
console.log ('стоймость работы: ' + revenue + ' $');

console.log('смогу ли я работать? ' + ((ProjectHours/dayHours - 2) <= ProjectDay));
