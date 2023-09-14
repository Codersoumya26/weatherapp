console.log("Client Side javascript file is loaded")

const weatherForm = document.querySelector('form')
const search = document.querySelector('#location')
const place = document.querySelector('#place')
const weather = document.querySelector('#weather-condition')
const temperature = document.querySelector('#temperature')
const feelslike = document.querySelector('#feelslike')

place.textContent = ''

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

    fetch(`http://localhost:3000/weather?location=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else if(data.errorMessage) {
            console.log(data.errorMessage)
        } else {
            console.log(data)
            place.textContent = `${data.place}, ${data.region}, ${data.country}`
            weather.textContent = data.weather_descriptions,
            temperature.textContent = data.temperature,
            feelslike.textContent = data.feelslike
        }
    })
})
})