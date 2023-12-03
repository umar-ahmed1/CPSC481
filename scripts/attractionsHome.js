import { attractionData } from "./constants.js";


function joinQueue (time) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const queue = 'slot.html'

    let timeslot = "?timeslot=" + time
    timeslot += "&attraction=" + urlParams.get('attraction'); 
    window.location.href = queue + timeslot, '_blank';
}

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
window.joinQueue = joinQueue;