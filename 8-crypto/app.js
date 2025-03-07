
function encryptPassword(password) {
    const res = [...password];
    res.reverse();
    return res.join('') ;
    
}
console.log(encryptPassword('slava010132'));


function checkPassword(encryptedPassword, originalPassword) {
    return encryptPassword(encryptedPassword)  === originalPassword;
}

console.log(checkPassword('231010avals', 'slava010132'));