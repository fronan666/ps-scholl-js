'use strict';

const user = {
  firstName: 'Слава',
  lastName: 'Воронцов',
  age: 20 ,
  getUserInfo:function() {
    console.log(this);
    console.log(`${this.firstName}  ${this.lastName}`);
    
    const canDrink = () => {
      if(this.age >= 18) {
        console.log('Может уже пить!');
      } else {
        console.log('Не может пить');
      }
    }
      canDrink();

  },

  getUserInfoArrow:() => {
    console.log(this);
    console.log(`${this.firstName}  ${this.lastName}`);
  },
};

user.getUserInfo();
user.getUserInfoArrow();



















