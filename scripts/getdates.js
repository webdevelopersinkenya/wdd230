// getdates.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the copyright year dynamically
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Get the last modified date and update the second paragraph dynamically
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
