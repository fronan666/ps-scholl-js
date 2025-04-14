'use strict';
const audi = {
  make: 'Audi',
  model: 'A5',
  damages: []
};

const carManipulation = {
  addDamage(part, rate) {
    this.damages.push({
        part,
        rate
    })
    console.log(`Добавили повреждения на ${this.make} ${this.model}`);
  }
};


const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3) ;
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi , 'Крыша');
addDamageAudiRoof(5);
console.log(audi);





















