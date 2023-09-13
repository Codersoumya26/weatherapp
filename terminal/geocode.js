const request = require('request')
const geoCode = (location, callback) => {
    // GeoCoding to convert the address into a latitude and longitude 
    // Howrah map coordinates 22.595977,88.148342 / 22.615606,88.297995
    // const geoCodingUrl = 'http://api.positionstack.com/v1/reverse?access_key=b607430b3e3938c060a8617265357af6&query=22.595977,88.148342'
    // const geoCodingUrl = `http://api.positionstack.com/v1/forward?access_key=b607430b3e3938c060a8617265357af6&query=${location}`

    const url = 'http://api.positionstack.com/v1/forward?access_key=b607430b3e3938c060a8617265357af6&query=' + encodeURIComponent(location)
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to GeoCoding Services !!!', undefined)
        } else if (response.body.data && response.body.data.length === 0) {
            callback('Unable to find the location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                place: response.body.data[0].name,
                region: response.body.data[0].region,
                country: response.body.data[0].country,    
            })
        }
    })
}

module.exports = geoCode
