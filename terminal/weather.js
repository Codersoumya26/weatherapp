const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // weather api
    // const weatherUrl = `http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=${location}`
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query='+latitude+','+longitude+'&units=m'
    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather Services !', undefined)
        } else if (response.body.error) {
            callback('Unable to Find the Location.', undefined)
        } else {
            callback(undefined, {
                weather_descriptions: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                weather_icons:  response.body.current.weather_icons,
                wind_speed: response.body.current.wind_speed,
                precip: response.body.current.precip,
                humidity: response.body.current.humidity
            })
        }
    })
}

module.exports = forecast
