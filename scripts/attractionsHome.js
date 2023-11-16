import { attractionData } from "./constants.js";


function loadAttraction() {
    // get the query params for the attraction 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 

    // use the query params to get the data for the attraction 
    let targetAttraction = attractionData[attraction]; 

    // update the document to show the correct data
    document.getElementById('header-image').src = targetAttraction.image;
    document.getElementById('title').textContent = targetAttraction.title;
    document.getElementById('description').textContent = targetAttraction.description;
    document.getElementById('waitTime').textContent = targetAttraction.waitTime;
}

loadAttraction();