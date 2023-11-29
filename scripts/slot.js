import { attractionData } from "./constants.js";

function loadAttraction() {
    // get the query params for the attraction 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 
    let timeslot = urlParams.get('timeslot');

    // use the query params to get the data for the attraction 
    let targetAttraction = attractionData[attraction]; 

    // update the document to show the correct data
    document.getElementById('header-image').src = targetAttraction.image;
    document.getElementById('title').textContent = targetAttraction.title;
    document.getElementById('timeslot').textContent = "Start time: " + timeslot;
}

function viewSchedule() {
    const dayplanner = 'dayplanner.html'
    window.open(dayplanner, '_blank');
}

function viewAttraction() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 

    const attractionsHome = 'attractions-home.html'
    let search = "?attraction=" + attraction;
    window.location.href = attractionsHome + search;
}

loadAttraction();

window.viewAttraction = viewAttraction;
window.viewSchedule = viewSchedule;
