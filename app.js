const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=Howrah'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log("It is currently " + response.body.current.temperature + " degrees out. But it feels like " + response.body.current.feelslike + " degrees out")
    console.log('The weather feels like ' + response.body.current.weather_descriptions[0])
})
