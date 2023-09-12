const geoCode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = 'Howrah'

geoCode(location, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data.place + ' is located in ' + data.region + ' state of ' + data.country+ '.')
        console.log('Latitude = ' + data.latitude + ' & Longitude = ' + data.longitude +'.')
    }
})

weather(location, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Here, The weather feels like ' + data.weather_descriptions)
        console.log("It is currently " + data.temperature + " degrees out. But it feels like " + data.feelslike + " degrees out")
    }
})