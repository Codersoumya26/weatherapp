const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=Howrah'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
    console.log("Main WeatherStack Information")
    console.log(data.current)
})