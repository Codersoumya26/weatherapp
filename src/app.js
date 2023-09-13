const express = require('express');
const path = require('path');
const app = express();

const port = 3000


// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// setup handlebars engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);


// setup static directory to serve static files
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Forecast Application',
        name: 'Soumya Dipta',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather Forecast Application',
        name: 'Soumya Dipta',
    })
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Howrah'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
