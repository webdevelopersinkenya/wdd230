const urlSpotlight = 'https://sessionize.com/nairobi-api-festival-2023837/';

let nb1 = Math.floor(Math.random()*6); 
  let n1 = nb1;
  
let nb2 = Math.floor(Math.random()*6); 
while (nb2 == n1) {
    nb2 = Math.floor(Math.random()*6);
};
let n2 = nb2;

let nb3 = Math.floor(Math.random()*6); 
while ( nb3 == n1 || nb3 == n2) {
  nb3 = Math.floor(Math.random()*6);
};
let n3 = nb3;

async function getDirectoryData(urlSpotlight) {
  const response = await fetch(urlSpotlight);
  const data = await response.json();   
  createSpotlight(data.businesses, nb1, 'spotlight-1');
  createSpotlight(data.businesses, nb2, 'spotlight-2');
  createSpotlight(data.businesses, nb3, 'spotlight-3');
}  

function createSpotlight (businesses, n, spotlight) {
  const spotlightC = document.querySelector('article.' + spotlight);
  let h2 = document.createElement('h2');
  let image = document.createElement('img');
  let phone = document.createElement('p');
  let address = document.createElement('p');
  let website = document.createElement('a');
  let membership = document.createElement('p');
  h2.textContent = `${businesses[n].name}`;
  image.setAttribute('src', businesses[n].image);
  image.setAttribute('alt', `Image of ${businesses[n].name}`);
  image.setAttribute('loading', 'lazy');
  phone.textContent = `${businesses[n].phone}`;
  address.textContent = `${businesses[n].address}`;
  website.setAttribute('href', businesses[n].website);
  website.setAttribute('target', `_blank`);
  website.textContent = `Website`;
  membership.textContent = `${businesses[n].membership}`;
  spotlightC.appendChild(h2);
  spotlightC.appendChild(image);
  spotlightC.appendChild(phone);
  spotlightC.appendChild(address);
  spotlightC.appendChild(website);
  spotlightC.appendChild(membership); 
}

getDirectoryData(urlSpotlight);