function displayHeader() {
    var header = document.getElementById("header");
    var image = document.createElement("img");
    image.src = "person.jpg";
    image.alt = "Person";
    var name = document.createElement("h1");
    name.textContent = "John Doe";
    header.appendChild(image);
    header.appendChild(name);
  }
  

  function displayBody() {
    var body = document.getElementById("body");
    var lessons = ["Lesson 1", "Lesson 2", "Lesson 3"];
    var list = document.createElement("ul");
    for (var i = 0; i < lessons.length; i++) {
      var item = document.createElement("li");
      item.textContent = lessons[i];
      list.appendChild(item);
    }
    body.appendChild(list);
  }
  function displayFooter() {
    var footer = document.getElementById("footer");
    var year = new Date().getFullYear();
    var teacher = "Jane Smith";
    var text = document.createTextNode(year + " - " + teacher);
    footer.appendChild(text);
  }
  
   // Get references to the image and text elements in the header
   const headerImg = document.querySelector("#header img");
   const headerText = document.querySelector("#header h1");
   
   // Adjust the margins to reduce the space between the image and text
   headerImg.style.marginRight = "10px";
   headerText.style.marginLeft = "10px";

    // Get references to all h3 elements on the page
    const h3Elements = document.querySelectorAll("h3");
      
    // Loop through the h3 elements and set their color to red
    for (let i = 0; i < h3Elements.length; i++) {
      h3Elements[i].style.color = "red";
    }
  
  displayHeader();
  displayBody();
  displayFooter();