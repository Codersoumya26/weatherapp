const express = require('express');
const path = require('path');
const app = express();

const port = 3000


// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public');

// setup handlebars engine and views locations
app.set('view engine', 'hbs');


// setup static directory to serve static files
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Forecast Application',
        name: 'Soumya Dipta',
    })
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
