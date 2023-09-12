const request = require('request');

// GeoCoding to convert the address into a latitude and longitude 
// Howrah map coordinates 22.595977,88.148342 / 22.615606,88.297995
const geoCodingUrl = 'http://api.positionstack.com/v1/reverse?access_key=b607430b3e3938c060a8617265357af6&query=22.595977,88.148342'
// const geoCodingUrl = 'http://api.positionstack.com/v1/forward?access_key=b607430b3e3938c060a8617265357af6&query=Howrah'

request({ url: geoCodingUrl, json: true }, (error, response) => {
    const latitude = response.body.data[0].latitude
    const longitude = response.body.data[0].longitude
    const place = response.body.data[0].name
    const region = response.body.data[0].region
    const country = response.body.data[0].country

    console.log(place + ' is located in ' + region + ' state of ' +country+ '.')
    console.log('Latitude = ' + latitude + ' & Longitude = ' + longitude +'.')
})

// weather api
const weatherUrl = 'http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=Howrah'

request({ url: weatherUrl, json: true }, (error, response) => {
    console.log('Here, The weather feels like ' + response.body.current.weather_descriptions[0])
    console.log("It is currently " + response.body.current.temperature + " degrees out. But it feels like " + response.body.current.feelslike + " degrees out")})
