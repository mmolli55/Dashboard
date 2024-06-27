const body = document.querySelector('body')
const imageAuthor = document.getElementById('image-author')
const timeDisplay = document.getElementById('time-display')
const weatherDisplay = document.getElementById('weather')

/* fetches data for background image */
fetch("https://api.unsplash.com/photos/random?client_id=eLxj7f6qw622wf8JPXw9cyi2-IxDONhGUj72yp8_oGs&orientation=landscape&query=space")
    .then(res => res.json())
    .then(data => {
        body.style.backgroundImage = `url(${data.urls.full})`
        imageAuthor.textContent = `Photo by: ${data.user.name}`
    })
    .catch(err => {
        body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg4MTQxNjd8&ixlib=rb-4.0.3&q=85")'
        imageAuthor.textContent = `Photo by: Pawel Nolbert`
    })


/* fetches weather data */ 


/* gets current time */
function getCurrentTime() {
    const currentTime = new Date().toLocaleTimeString("en-us", {timeStyle: "short"});
    timeDisplay.innerText = currentTime
}

setInterval(getCurrentTime, 1000)

/* get location coordinates */
if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        /* Open Weather API call */
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8d0dfd3572db483f4301b7c4a7f2661&units=imperial`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                const icon = data.weather[0].icon

                weatherDisplay.innerHTML = `
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
                    <p class="weather-temp">${Math.round(data.main.temp)}°</p>
                    <p class="weather-city">${data.name}</p>
                `
            })
            .catch(err => console.log(err))
    });
  } else {
    /* geolocation IS NOT available */
    console.log("Your geolocation is blocked in your browser settings.")
  }

