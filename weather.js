const showWeather = document.getElementbyId('show-Weather')
const zip = document.getElementbyId('zipcode')
let name = document.getElementbyId('city-name')
let latitude = document.getElementbyId('lat')
let longitude = document.getElementbyId('lon')
let weatherMain = document.getElementbyId('weather-main')
let weatherDesc = document.getElementbyId('weather-desc')
let windSpeed = document.getElementbyId('wind-speed')
let windDegree = document.getElementbyId('wind-degree')
let current = document.getElementbyId('temp-current')
let minimum = document.getElementbyId('temp-min')
let maximum = document.getElementbyId('temp-max')
let humid = document.getElementbyId('humidity')








//const url = https:`{zip code},{country code}&appid={b5dc3fac118c37e47059c324d3b6e0aa}
//`;

function getWeather(zip) {
	var key = '{b5dc3fac118c37e47059c324d3b6e0aa}';
	fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=' + key)
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		console.log(data);
	})

  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  getWeather( 6167865 );
}
