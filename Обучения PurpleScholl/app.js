const cities = {
  msk : {
    temp: 25,
    lt: 100

  },
  spb: {
    lt: 200,
    temp: 20,
  }
}


let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
// for(const key in cities) {
//   console.log(key);
//   citiesCount++ ;
//   sumTemp += cities[key].temp;

// }

for(const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}
console.log(sumTemp/citiesCount)






