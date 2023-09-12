const chalk = require('chalk');
const geoCode = require('./utils/geocode')
const forecast = require('./utils/weather')

const location = process.argv[2]

geoCode(location, (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude,data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
 
        console.log('Weather Forecast for '+ chalk.blue( data.place + ', ' + data.region + ', ' + data.country+ '.'))
        console.log('Here, The weather feels like ' + chalk.red(forecastData.weather_descriptions))
        console.log("It is currently " + chalk.yellow(forecastData.temperature) + " degree Celsius out. But it feels like " + chalk.green(forecastData.feelslike) + " degrees Celsius out")
    })
})