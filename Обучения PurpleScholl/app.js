'use strict';
const audi = {
  make: 'Audi',
  model: 'A5',
  year: 2024,
  damages: [],
  addDamage(part, rate ) {
    console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено - повреждение : ${part} со степенью ${rate}`);
    this.damages.push({
      part,
      rate
    })
  }
};


// audi.addDamage('капот', 1);

const bmw = {
  make: 'BMW',
  model: '320i',
  year: 2022,
  damages: [],
};
bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);

const addDamageFunction = audi.addDamage;
// addDamageFunction('Бампер', 2); не работает
addDamageFunction.call(bmw , 'Бампер', 2 );
addDamageFunction.call(audi , 'капот', 1);


addDamageFunction.apply(bmw, ['капот', 3]);
addDamageFunction.apply(audi, ['бампер', 2]);















