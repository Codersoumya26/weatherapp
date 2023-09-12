const request = require('request')

const weather = (location, callback) => {
    // weather api
    const weatherUrl = `http://api.weatherstack.com/current?access_key=240f172c8b26506cb01aaef4a6f14371&query=${location}`

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
            })
        }
    })
}

module.exports = weather
