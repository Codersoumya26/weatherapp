const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geoCode = require('../terminal/geocode')
const forecast = require('../terminal/weather')

const app = express();

const port = 3000


// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// setup static directory to serve static files
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Forecast Application',
        name: 'Codersoumya26',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Codersoumya26',
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Lets Connect',
        name: 'Codersoumya26',
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.location) {
        return res.send({
            errorMessage: 'You must provide a location'
        })
    }

    geoCode(req.query.location, (error, {
        latitude, longitude, place, region, country
    } = {}) => {
        if(error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, {
            weather_descriptions, temperature, feelslike, weather_icons
        } = {}) => {
            if(error) {
                return res.send({ error });
            }

            res.send({ 
                place,
                region,
                country,
                weather_descriptions,
                temperature,
                feelslike,
                weather_icons,
            })
        })
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        errorMessage: 'Ops!, Wrong URL!',
        name: 'Codersoumya26',
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
