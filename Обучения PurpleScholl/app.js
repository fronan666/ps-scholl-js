const roles = ['user', 'admin','manager'];
const elIndex = roles.indexOf('admin')
console.log(elIndex);
const elIndex2 = roles.indexOf('superuser')
console.log(elIndex2);

if (elIndex >= 0) {
    console.log('Доступ есть');
} else {
    console.log( 'Доступ запрещен');
}

if (roles.includes('admin')) {
    console.log('Доступ есть');
}