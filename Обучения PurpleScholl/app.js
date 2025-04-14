'use strict';





const user = {
  login: '@fronan13',
  password: '213123131Adfsae'
};

function removePassword(reset) {
  if(reset) {
    this.password = undefined;
  
  }else {
    this.password = '1';
  }
}


const resetUserPassword = removePassword.bind(user , true);
resetUserPassword();
console.log(user);




















