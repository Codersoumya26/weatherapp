const geoCode = require('./utils/geocode')
const forecast = require('./utils/weather')

const location = 'Howrah'

geoCode(location, (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude,data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
 
        console.log('Weather Forecast for ' + data.place + ', ' + data.region + ', ' + data.country+ '.')
        console.log('Here, The weather feels like ' + forecastData.weather_descriptions)
        console.log("It is currently " + forecastData.temperature + " degree Celsius out. But it feels like " + forecastData.feelslike + " degrees Celsius out")
    })
})