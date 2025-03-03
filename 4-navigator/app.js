const adressLat = 10;
const addresLong = 12;
const positionLat = 7;
const positionLong = 8;

const distance = Math.sqrt(((positionLat-adressLat)**2)+((addresLong-positionLong)**2));
console.log(distance);