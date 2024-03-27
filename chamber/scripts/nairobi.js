// Weather API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=32393732f6d961c430986fb41337563&units=metric';

// Function to fetch weather data
const fetchWeatherData = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateWeatherInfo(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Function to update weather information on the page
const updateWeatherInfo = (data) => {
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const weatherIconElement = document.getElementById('weatherIcon');

    if (data) {
        temperatureElement.textContent = `${data.main.temp} °C`;
        descriptionElement.textContent = data.weather[0].description;
        weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIconElement.alt = data.weather[0].main;
    } else {
        temperatureElement.textContent = 'N/A';
        descriptionElement.textContent = 'N/A';
        weatherIconElement.src = '';
        weatherIconElement.alt = '';
    }
};

// Function to update weather information periodically
const updateWeatherPeriodically = () => {
    fetchWeatherData();
    setInterval(fetchWeatherData, 600000); // Update weather every 10 minutes (600,000 milliseconds)
};

// Call the function to update weather information
updateWeatherPeriodically();
