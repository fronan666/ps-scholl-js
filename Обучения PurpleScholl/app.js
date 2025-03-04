function canAccessWebsite(age) {
    if (age < 18) {
        return 'нет';
    }
    return 'да';
}
console.log(canAccessWebsite(17));


const canAccessWebsite2 = age => age < 18 ? 'нет' : 'Да'

console.log(canAccessWebsite2(18));

