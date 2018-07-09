"use strict";
const request = require('request');
const axios = require('axios');

var geocodeAddress = (address) => {
  // return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCzcs2VysF0Iwa5lV4vO_sG6-SMY7qd9cc&address=${encodedAddress}`)
      .then(function fullfilled(response){
        if(response.data.status === 'ZERO_RESULTS'){
          throw new Error('Unable to find address.')
        }
        console.log(response.data);
      })
      .catch(function rejected(error){
        if(error.code === 'ENOTFOUND'){
          console.log('Unable to reach Google servers');
        } else{
          console.log(error.message);
        }
      });
    // request({
    //   url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCzcs2VysF0Iwa5lV4vO_sG6-SMY7qd9cc&address=${encodedAddress}`,
    //   json: true
    // }, (error, response, body) => {
    //   if(error){
    //     reject('Unable to reach Google servers');
    //   }else if(body.status === 'ZERO_RESULTS'){
    //     reject('Address not found');
    //   } else if(body.status === 'OK'){
    //     var lat, lng;
    //     var result = body.results[0];
    //     var formatted_address = result.formatted_address;
    //     ( {lat, lng} = result.geometry.location);
  
    //     resolve({
    //       lat, 
    //       lng,
    //       formatted_address
    //     });
    //   }
    // });
  // });
}

module.exports = {
  geocodeAddress
};

