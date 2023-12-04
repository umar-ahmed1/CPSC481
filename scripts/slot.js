import { attractionData } from "./constants.js";


let planner_data = null;
function loadAttraction() {
    // get the query params for the attraction 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 
    let timeslot = urlParams.get('timeslot');
    let date  = urlParams.get('date');

    //get the data object
    const timeDate = document.getElementById('time-date')
    timeDate.innerHTML = `July ${date}th`

    // use the query params to get the data for the attraction 
    let targetAttraction = attractionData[attraction]; 

    // update the document to show the correct data
    document.getElementById('header-image').src = targetAttraction.image;
    document.getElementById('title').textContent = targetAttraction.title;
    document.getElementById('timeslot').textContent = "Start time: " + timeslot;
}

function viewSchedule() {
    const dayplanner = 'dayplanner.html'
    window.location.href = dayplanner, '_blank';
}

function viewAttraction() {
    const savedData = localStorage.getItem('plannerData');
    console.log("hi");
    if (savedData) {
        planner_data = JSON.parse(savedData);
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let attraction = urlParams.get('attraction'); 

    const attractionsHome = 'attractions-home.html'
    let search = "?attraction=" + attraction;

    const foo = {"zipper": "The Zipper", "nashville-north": "Nashville North", "trick-riding": "Trick Riding", "show-home": "Show Home"};
    let title = foo[attraction];
    let start = urlParams.get('timeslot');
    // remove event from planner
    for (let index = 0; index < planner_data.length; index++) {
        for (let j = 0; j < planner_data[index].events.length; j++) {
            if (planner_data[index].events[j].title == title && planner_data[index].events[j].start == start) {
                planner_data[index].events = planner_data[index].events.filter(e => e.title !== title);
            }
        }
    }
    localStorage.setItem('plannerData', JSON.stringify(planner_data));



    window.location.href = attractionsHome + search;
}

loadAttraction();

window.viewAttraction = viewAttraction;
window.viewSchedule = viewSchedule;
