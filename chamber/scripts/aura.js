const apiKey = 'YOUR_API_ 75974c9954d122ecf463ae1ff2542599';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi,kenya&appid=$75974c9954d122ecf463ae1ff2542599Key&units=metric`;

// Fetch weather data from OpenWeatherMap API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract required weather data
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const windSpeed = data.wind.speed;

    // Calculate wind chill if applicable
    let windChill = 'N/A';
    if (temperature < 10 && windSpeed > 4.8) {
      windChill = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }

    // Update HTML elements with weather data
    document.getElementById('temperature').textContent = `Current Temperature: ${temperature}°C`;
    document.getElementById('condition').textContent = `Current Condition: ${condition}`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} km/h`;
    document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill}`;
  })
  .catch(error => console.log('Error:', error));