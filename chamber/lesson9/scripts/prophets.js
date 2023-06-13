

const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log("Error fetching data:", error);
  }
}

function displayProphets(prophetsData) {
    const cardContainer = document.querySelector('.cards');
    
    prophetsData.forEach(prophet => {
      const cardSection = document.createElement('section');
      
      const heading = document.createElement('h2');
      heading.textContent = prophet.name;
      
      const description = document.createElement('p');
      description.textContent = prophet.description;
      
      const image = document.createElement('img');
      image.src = prophet.imageUrl;
      image.alt = prophet.name;
      
      cardSection.appendChild(heading);
      cardSection.appendChild(description);
      cardSection.appendChild(image);
      
      cardContainer.appendChild(cardSection);
    });
  }
fetchData();