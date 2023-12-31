

// Function to update the map div based on the event
function updateMapDiv(event) {
  const mapDiv = document.getElementById(event.map);
  console.log(event.title)

  // Check if the map div exists
  if (mapDiv) {
    // Set display to block
    mapDiv.style.display = "block";

    //array of title for queue
    const queueTitles = ["Trick Riding", "The Zipper", "Show Home Tour", "Nashville North"];
    //if not a queue event then no page implemented
    if (!queueTitles.includes(event.title)){
      mapDiv.onclick = function () {
        alert("This item does not have a page implemented")
      }
    }

    // Update attraction-display-name with the title of the event
    const attractionDisplayName = mapDiv.querySelector('.attraction-display-name');
    if (attractionDisplayName) {
      attractionDisplayName.textContent = event.title;
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  //get the parameters from the url
  const urlParams = new URLSearchParams(window.location.search);
  const eventsParam = urlParams.get('arg');
  const eventsArray = JSON.parse(decodeURIComponent(eventsParam));
  if (eventsArray){
    console.log("eventsarr",eventsArray)
    // Iterate through the events and update the corresponding map divs
    eventsArray.forEach(updateMapDiv);
  }

  //update the map divs for all non queue events
  const attractionsNoQueue = document.getElementsByClassName('attraction-highlight')
  Array.from(attractionsNoQueue).forEach((queue) => {
    queue.onclick = function () {
      alert("This item does not have a page implemented")
    }
  });
  
})

var toggler = document.getElementsByClassName("category");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("category-down");
  });
}

toggler = document.getElementsByClassName("unchecked");
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    if (this.classList.contains("checked")) {
      this.classList.remove("checked"); 
      this.classList.add("unchecked"); 
    } else if (this.classList.contains("unchecked")) {
      this.classList.add("checked"); 
      this.classList.remove("unchecked"); 
    }
    highlightBox = document.getElementById(this.id.replace('Selector','')); 

    if (highlightBox.style.display === "block") {
      highlightBox.style.display = "none";
    } else {
      highlightBox.style.display = "block";
    }
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('show-sidebar');
  const mapDiv = document.getElementById('mapContainer');

  if (sidebar.style.display === "block") {
    toggleButton.textContent = "Show Sidebar";
    sidebar.style.display = "none";
    
    mapDiv.style.width = '100%';
  } else {
    toggleButton.textContent = "Hide Sidebar";
    sidebar.style.display = "block";

    mapDiv.style.width = '85%';

  }
}
toggleSidebar();

function zoom(zoomFactor) {
  let mapImage = document.getElementById("mapImage");
  let map = mapImage.getBoundingClientRect();
  let mapDiv = document.getElementById("mapContainer");
  let mapContainer = mapDiv.getBoundingClientRect();

  const x_modify = (map.width * 0.069) * zoomFactor;
  const y_modify = (map.height * 0.046) * zoomFactor;

  let newWidth = map.width + x_modify;
  let newHeight = map.height + y_modify;

  // Check if new dimensions are within the limits
  if (newWidth >= mapContainer.width && newHeight >= mapContainer.height) {
      mapImage.style.width = newWidth + "px";
      mapImage.style.height = newHeight + "px";
      mapImage.style.backgroundSize = `${newWidth}px ${newHeight}px`;
    }
}
zoom(-4.5);

function redirect(param) {
  const attractionsHome = 'attractions-home.html'
  let search = "?attraction=" + param
  window.location.href = attractionsHome + search, '_blank';
}

function toggleVisibility(display) {
  //get all the items and then show them all or hide them all for attractions with a queue
  const attractionsQueue = document.getElementsByClassName('attraction-highlight-queue')
  Array.from(attractionsQueue).forEach((queue) => {
    queue.style.display = display;
  });

  const attractionsNoQueue = document.getElementsByClassName('attraction-highlight')
  Array.from(attractionsNoQueue).forEach((queue) => {
    queue.style.display = display;
  });


  selector = document.getElementsByClassName("checkbox"); 
  for (i = 0; i < selector.length; i++) {
    if (display === "block") {
      selector[i].classList.add("checked"); 
      selector[i].classList.remove("unchecked"); 
    } else if (display === "none") {
      selector[i].classList.add("unchecked"); 
      selector[i].classList.remove("checked"); 
    }
  }  
}

// Set starting position of map
document.getElementById("mapContainer").scrollTo(0, 1600);