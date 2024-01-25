// Replace 'YOUR_API_KEY' with the API key you obtained from OpenWeatherMap
const apiKey = 'YOUR_API_KEY';
const city = 'YourCity'; // Replace with the name of your city

// Function to fetch weather data
async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    // Update the HTML with weather information
    const weatherWidget = document.getElementById('weather-widget');
    weatherWidget.innerHTML = `
      <p>Temperature: ${data.main.temp} &deg;C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data', error);
  }
}

// Call the function to get weather data when the page loads
window.addEventListener('load', getWeather);
