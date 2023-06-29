const currentTemp = document.querySelector('#temperature');
const currentWind = document.querySelector('#wind-speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=45.0715&lon=7.5262&units=metric&appid=c12767dcec69b4d10efe54dc62a3825b';

async function apiFetch() {
  const response = await fetch(url);
  const data = await response.json();
  displayResults(data);
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.replace(/(^|\s)\w/g, l => l.toUpperCase()); // to capilise each word
}

apiFetch();