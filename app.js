const isAdmin = true ;
const canWrite = true;

console.log(`системный файл ${isAdmin && canWrite}`);
console.log(`обычный файл ${isAdmin || canWrite}`);
console.log(`инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;
console.log(`системный файл c редактирование ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);

let a = 22
if (a === -8 || a === 22) {
    console.log(true);
} else {
    console.log(false)
}