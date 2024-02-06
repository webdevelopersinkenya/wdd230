// Fetch weather data from the API
fetch('https://api.weatherapi.com/v1/current.json?key=332393732f6d961c430986fb41337563')
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        const weatherHtml = `
            <h2>Weather in Nairobi</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
        weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => console.error('Error fetching weather data:', error));
