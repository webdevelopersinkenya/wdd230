// Fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    var apiKey = '75974c9954d122ecf463ae1ff2542599';
    var city = 'Nairobi';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Extract the required weather information from the API response
        var temperature = data.main.temp;
        var condition = data.weather[0].description;
        var weatherIcon = data.weather[0].icon;
        var windSpeed = data.wind.speed;
        var windChill = data.wind.deg;
  
        // Update the HTML elements with the weather information
        document.getElementById('temperature').textContent = 'Temperature: ' + temperature + ' °C';
        document.getElementById('condition').textContent = 'Condition: ' + condition;
        document.getElementById('weather-icon').src = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
        document.getElementById('wind-speed').textContent = 'Wind Speed: ' + windSpeed + ' m/s';
        document.getElementById('wind-chill').textContent = 'Wind Chill: ' + windChill + ' °';
  
      })
      .catch(function(error) {
        console.log('Error fetching weather data:', error);
      });
  }
  
  // Call the fetchWeatherData function to initiate the weather data retrieval
  fetchWeatherData();
  