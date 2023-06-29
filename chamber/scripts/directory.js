const url = 'json/data.json';
async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayGrid(data.businesses);
    displayList(data.businesses);
  }

  getDirectoryData(url);

  const displayGrid = (businesses) => {
    const gridD = document.querySelector('div.gridD');
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let divi = document.createElement('div');
      let h3 = document.createElement('h3');
      let image = document.createElement('img');
      let phone = document.createElement('p');
      let address = document.createElement('p');
      let website = document.createElement('a');
      let membership = document.createElement('p');
      h3.textContent = `${business.name}`;
      image.setAttribute('src', business.image);
      image.setAttribute('alt', `Image of ${business.name}`);
      image.setAttribute('loading', 'lazy');
      phone.textContent = `${business.phone}`;
      address.textContent = `${business.address}`;
      website.setAttribute('href', business.website);
      website.setAttribute('target', `_blank`);
      website.textContent = `Website`;
      membership.textContent = `${business.membership}`;
      card.appendChild(h3);
      card.appendChild(image);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(website);
      card.appendChild(divi);
      divi.appendChild(membership);
      gridD.appendChild(card);
    }) 
  } 

  const displayList = (businesses) => {
    const listD = document.querySelector('div.listD');
    businesses.forEach((business) => {
      let card = document.createElement('section');
      let divi = document.createElement('div');
      let h3 = document.createElement('h3');
      let website = document.createElement('a');
      let membership = document.createElement('p');
      h3.textContent = `${business.name}`;
      website.setAttribute('href', business.website);
      website.setAttribute('target', '_blank');
      website.textContent = `Website`;
      membership.textContent = `${business.membership}`;
      card.appendChild(h3);
      card.appendChild(website);
      card.appendChild(divi);
      divi.appendChild(membership);
      listD.appendChild(card);
    })
  } 

let viewsButtons = document.querySelectorAll('.buttons ul li');
let views = document.querySelectorAll('.views div');

viewsButtons.forEach((link) => {
  link.addEventListener('click', () => {
      viewsButtons.forEach((item) => {
          item.classList.remove('active');
      })
      link.classList.add('active');
      let dataCard = link.getAttribute('data-card');
      views.forEach((view) => {
          view.style.display = 'none';
      }) 
      if ((dataCard == 'gridD')) {
        document.querySelector('.' + dataCard).style.display = 'grid';
      } else {
        document.querySelector('.' + dataCard).style.display = 'flex';
      }
        
  })
})