
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".lazy");
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute("data-src");
          
          if (src) {
            image.src = src;
            image.removeAttribute("data-src");
            image.classList.remove("lazy");
          }
          
          observer.unobserve(image);
        }
      });
    }, options);
    
    images.forEach(function(image) {
      observer.observe(image);
    });
  });