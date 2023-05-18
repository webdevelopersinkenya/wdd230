document.addEventListener("DOMContentLoaded", function() {
  var currentYearElement = document.getElementById("currentYear");
  var lastUpdatedElement = document.getElementById("lastUpdated");

  var currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  var lastUpdatedDate = new Date("2023-04-19"); // Replace with the actual last updated date
  var options = { year: "numeric", month: "short", day: "numeric" };
  lastUpdatedElement.textContent = lastUpdatedDate.toLocaleDateString(undefined, options);

});  