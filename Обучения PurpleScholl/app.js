const cities = {
  msk: {
    temp: {
      celsia: 26,
    },
  },
  spb: {

  }
};

const city = 'spb'
if(cities[city] && cities[city].temp) {
  console.log(cities[city].temp.celsia);
}

console.log(cities[city]?.temp?.celsia);






