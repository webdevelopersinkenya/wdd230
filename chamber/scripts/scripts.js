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