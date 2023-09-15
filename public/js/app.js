const weatherForm = document.querySelector('form')
const search = document.querySelector('#location')
const place = document.querySelector('#place')
const weather = document.querySelector('#weather-condition')
const temperature = document.querySelector('#temperature')
const feelslike = document.querySelector('#feelslike')
const errorMessage = document.querySelector('#errorMessage')

// Get references to the weather card and error card elements
const weatherCard = document.getElementById("weatherCard");
const errorCard = document.getElementById("errorCard");
const weatherIcon = document.getElementById("weather-icon");


// Display the error card
weatherCard.style.display = "none";
errorCard.style.display = "none";

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

    fetch(`http://localhost:3000/weather?location=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            weatherCard.style.display = "none";
            errorCard.style.display = "block";
            errorMessage.textContent = data.error
        } else if(data.errorMessage) {
            weatherCard.style.display = "none";
            errorCard.style.display = "block";
            errorMessage.textContent = data.errorMessage
        } else {
            weatherCard.style.display = "block";
            errorCard.style.display = "none";

            place.textContent = `${data.place}, ${data.region}, ${data.country}`
            weather.textContent = data.weather_descriptions,
            temperature.textContent = data.temperature,
            feelslike.textContent = data.feelslike

            // Set the background image URL
            weatherIcon.style.backgroundImage = "url('" + data.weather_icons + "')";
        }
    })
})
})