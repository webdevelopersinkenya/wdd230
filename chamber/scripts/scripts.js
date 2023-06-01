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