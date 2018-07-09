"use strict";
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      string: true,
      describe: 'Address we want wheather for'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var address = argv.address;

geocode.geocodeAddress(address);
  // .then(function fullfilled(results){
  //   return weather.getWeather(results.lat, results.lng);
  // })
  // .then(function fullfilled(weatherResults){
  //   console.log(`Temperature: ${weatherResults.temperature} degres`);
  //   console.log(`Feels like: ${weatherResults.apparentTemperature} degres`);
  // })
  // .catch(function rejected(errorMessage){
  //   console.log(errorMessage);
  // });
