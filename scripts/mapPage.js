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

function redirect(param) {
  const attractionsHome = 'attractions-home.html'
  let search = "?attraction=" + param
  window.open(attractionsHome + search, '_blank');
}

function toggleVisibility(display) {
  monsterEnergy = document.getElementById("monsterEnergy");
  monsterEnergy.style.display = display;

  zipper = document.getElementById("zipper");
  zipper.style.display = display;

  nashvilleNorth = document.getElementById("nashvilleNorth");
  nashvilleNorth.style.display = display;

  showHome = document.getElementById("showHome");
  showHome.style.display = display;



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


// SCHEDULE-TO-MAP FUNCTIONS

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
  const arg = getQueryParam('arg');
  if (arg) {
      try {
          const listOfEvents = JSON.parse(decodeURIComponent(arg));
          console.log("Received events:", listOfEvents);

          // Additional logic to handle listOfEvents goes here
      } catch (e) {
          console.error("Error parsing query parameter:", e);
      }
  }
});
