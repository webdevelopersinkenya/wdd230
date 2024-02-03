
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the sections
    var eventsSection = document.getElementById("events");
    var weatherSection = document.getElementById("weather");
    var spotlightsSection = document.getElementById("spotlights");

    // Position the sections
    eventsSection.style.float = "left";
    weatherSection.style.float = "right";
    spotlightsSection.style.margin = "0 auto";

    // Optional: Adjust the layout for small screens
    if (window.innerWidth <= 767) {
        eventsSection.style.width = "100%";
        weatherSection.style.width = "100%";
        spotlightsSection.style.width = "100%";
        spotlightsSection.style.textAlign = "center";
    }
});
