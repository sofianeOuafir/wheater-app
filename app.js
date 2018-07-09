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

geocode.geocodeAddress(address)
  .then(function fullfilled(results){
    console.log(`Location: ${results.formatted_address}`);
    return weather.getWeather(results.lat, results.lng);
  })
  .then(function fullfilled(results){
    console.log(`Temperature: ${results.temperature}`);
    console.log(`Feels Like: ${results.apparentTemperature}`);
  })
  .catch(function rejected(errorMessage){
    console.log(errorMessage);
  });

