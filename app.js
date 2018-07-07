"use strict";
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
var doSomething = (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
}

geocode.geocodeAddress(address, doSomething);

