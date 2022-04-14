//initializing each variable and connecting it with an element in the HTML file
//use const so that it cannot be changed

const btn = document.getElementById('show-weather')
const zip = document.getElementById('zipcode')
let name = document.getElementById('city-name')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let weatherMain = document.getElementById('weather-main')
let weatherDesc = document.getElementById('weather-desc')
let windSpeed = document.getElementById('wind-speed')
let windDegree = document.getElementById('wind-degree')
let current = document.getElementById('temp-current')
let minimum = document.getElementById('temp-min')
let maximum = document.getElementById('temp-max')
let humid = document.getElementById('humidity')


//Giving the button a function
btn.addEventListener('click', () => showWeather())
async function showWeather(){

//fetching the data from the api, receiving that data in json form, calling the data according to the element
const zipcode = zip.value
console.log(zipcode)
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=ca0135fb035d730f18b29bce2846250d`)
.then ((res) => res.json())
.then ((data) =>
{console.log(data)
windSpeed.innerHTML = data.wind.speed
windDegree.innerHTML = data.wind.deg
current.innerHTML = data.main.temp
name.innerHTML = data.name
latitude.innerHTML = data.coord.lat
longitude.innerHTML = data.coord.lon
weatherMain.innerHTML = data.weather[0].main
weatherDesc.innerHTML = data.weather[0].description
minimum.innerHTML = data.main.temp_min
maximum.innerHTML = data.main.temp_max
humid.innerHTML = data.main.humidity

}

)

}
