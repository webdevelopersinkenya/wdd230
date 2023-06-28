document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll(".lazy");
  
  function lazyLoad() {
    lazyImages.forEach(function(image) {
      if (image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0 && getComputedStyle(image).display !== "none") {
        image.src = image.dataset.src;
        image.classList.remove("lazy");
        
        lazyImages = Array.from(lazyImages).filter(function(img) {
          return img !== image;
        });
        
        if (lazyImages.length === 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationchange", lazyLoad);
        }
      }
    });
  }
  
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});

if (typeof(Storage) !== 'undefined') {
  
  var currentTime = new Date().getTime();
  
  
  var previousVisitTime = localStorage.getItem('previousVisitTime');
  

  localStorage.setItem('previousVisitTime', currentTime);
  
  
  if (previousVisitTime) {
    var timeDiff = currentTime - parseInt(previousVisitTime);
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    var timeDiffElement = document.createElement('p');
    timeDiffElement.textContent = 'Days since your last visit: ' + daysDiff;
    document.body.appendChild(timeDiffElement);
  }
} else {
  console.log('localStorage is not supported by the browser.');
}

document.addEventListener('DOMContentLoaded', function() {
  const gridButton = document.getElementById('grid');
  const listButton = document.getElementById('list');
  const viewArticle = document.querySelector('.view');

  gridButton.addEventListener('click', function() {
    viewArticle.classList.remove('list');
    viewArticle.classList.add('grid');
  });

  listButton.addEventListener('click', function() {
    viewArticle.classList.remove('grid');
    viewArticle.classList.add('list');
  });
});
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
