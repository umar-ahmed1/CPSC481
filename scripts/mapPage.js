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
    this.classList.toggle("checked")
  });
}

document.getElementById("start-concerts-expanded").click();
document.getElementById("start-nashville-north-clicked").click();

function zoom(zoom) {
  const x_modify = 100 * zoom;
  const y_modify = 178 * zoom;
  let map = document.getElementById("map");
  let mapDiv = document.getElementById("mapContainer");
  let mapContainer = mapDiv.getBoundingClientRect();

  // Do not zoom out any more if the map dimensions are smaller than the maps container - 
  // disallows white space on the page
  if (((map.width + x_modify) > mapContainer.width) && ((map.height + y_modify) > mapContainer.height)){
    map.width += x_modify;
    map.height += y_modify;
  }
}

