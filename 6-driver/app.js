const hasLicense = false;
const age = 18;
const isDrunk = false;
const operateCar = ((age >= 18) && !hasLicense && !isDrunk);

console.log(`Может ли управлять машинной: ${operateCar ?  'да' : 'нет'}`);



