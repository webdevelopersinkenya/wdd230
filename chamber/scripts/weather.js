// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = '332393732f6d961c430986fb41337563';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}&units=metric`;

// Function to fetch weather data from the API
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather information from the response
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display the weather information in the designated element
        const weatherInfoElement = document.getElementById('weather-info');
        weatherInfoElement.innerHTML = `Weather: ${description}, Temperature: ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather data when the page loads
window.addEventListener('load', getWeather);
