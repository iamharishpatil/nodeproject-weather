const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/be8f274c919a93bee7ef1aad58ec7bfe/'+ latitude + ',' + longitude 
    request({url, json : true},(error, response )=>{
        if (error){
            callback('unable to connect to the server',undefined)
        }else if (response.body.error){
            callback('unable to find the location', undefined)
        }
        else {
            callback(undefined, response.body.daily.data[0].summary +' its currently '+ response.body.currently.temperature + ' degrees Fahrenheit. There is '+ response.body.currently.precipProbability +'% chance of rain.' )
        }
    }),undefined
}

module.exports = forecast