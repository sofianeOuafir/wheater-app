const axios = require('axios');

var getWeather = (lat, lng) => {
  return axios.get(`https://api.darksky.net/forecast/6416023c24df2d115a16982bbc9a310b/${lat},${lng}?units=auto`)
    .then(function fullfilled(response) {
      var { temperature, apparentTemperature } = response.data.currently;
      return Promise.resolve({
        temperature, 
        apparentTemperature
      });
    })
    .catch(function rejected(error) {
      if(error.code === 'ENOTFOUND'){
        return Promise.reject('Unable to reach Darksky servers.')
      } else {
        console.log(error.message);
      }
    });
};

module.exports = {
  getWeather
};
