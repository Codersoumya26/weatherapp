const request = require('request');
const geoCode = require('./utils/geocode')

// weather api
// const weatherUrl = `http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=${location}`

// request({ url: weatherUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather Services')
//     } else if (response.body.error) {
//         console.log('Unable to Find the Location')
//     } else {
//         console.log('Here, The weather feels like ' + response.body.current.weather_descriptions[0])
//         console.log("It is currently " + response.body.current.temperature + " degrees out. But it feels like " + response.body.current.feelslike + " degrees out")
//     }
// })
const location = 'Bangalore'

geoCode(location, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data.place + ' is located in ' + data.region + ' state of ' + data.country+ '.')
        console.log('Latitude = ' + data.latitude + ' & Longitude = ' + data.longitude +'.')
    }
})