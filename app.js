const role = 'ceo';



switch (role) {
    case 'manager':
    case 'admin':
    console.log('Не руководитель');
    break;
    case 'ceo': 
    console.log('Руководитель');
    break;
    default:
    console.log('Мы тебя не знаем!');
}

const num = 0; 
switch(true) {
    case num > 0 : //true === num > 0
    console.log('Положительный');
    break ;
    case num < 0 :
    console.log('Отрицательный');
    break ;
    default:
        console.log('Ноль!')
}