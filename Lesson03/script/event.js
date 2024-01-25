// Event data - replace with your actual data
const eventsData = [
    {
      image: 'event1.jpg',
      description: 'Event 1 Description',
    },
    {
      image: 'event2.jpg',
      description: 'Event 2 Description',
    },
    // Add more events as needed
  ];
  
  // Function to dynamically create event elements
  function createEventElement(event) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
  
    const imageElement = document.createElement('img');
    imageElement.src = event.image;
    imageElement.alt = event.description;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = event.description;
  
    eventElement.appendChild(imageElement);
    eventElement.appendChild(descriptionElement);
  
    return eventElement;
  }
  
  // Function to display events on the page
  function displayEvents() {
    const eventsContainer = document.getElementById('events-container');
  
    // Clear existing content
    eventsContainer.innerHTML = '';
  
    // Loop through events and append to the container
    eventsData.forEach((event) => {
      const eventElement = createEventElement(event);
      eventsContainer.appendChild(eventElement);
    });
  }
  
  // Call the displayEvents function when the page loads
  window.addEventListener('load', displayEvents);
  