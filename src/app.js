const express = require('express');

const app = express();

const port = 3000

// setup handlebars engine and views locations
app.set('view engine', 'hbs');

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
