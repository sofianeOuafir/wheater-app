const request = require('request');

var getWeather = (lat, lng) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/6416023c24df2d115a16982bbc9a310b/${lat},${lng}?units=auto`,
      json: true
    }, (error, response, body) => {
      if(!error && response.statusCode === 200){
        resolve({
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else{
        reject('Unable to connect with servers.');
      }
    });
  });
};

module.exports = {
  getWeather
};
