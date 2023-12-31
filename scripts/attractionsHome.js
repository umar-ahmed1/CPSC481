import { attractionData } from "./constants.js";


let planner_data = null;
let redirect = true;
let date = "09";
function joinQueue (start, end) {
    let event_obj = {
        "start": null,
        "end": null,
        "event-type": "queue",
        "title": null,
        "place": null,
        "map": null
    };
    // get planner_data from local storage
    const savedData = localStorage.getItem('plannerData');
    if (savedData) {
        planner_data = JSON.parse(savedData);
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const queue = 'slot.html'

    let timeslot = "?timeslot=" + start
    timeslot += "&attraction=" + urlParams.get('attraction'); 
    const getdate = document.getElementById("numberField").value;
    date = getdate;
    const dateparam = "&date=" + date;
    
    const foo = {"zipper": "The Zipper", "nashville-north": "Nashville North", "trick-riding": "Trick Riding", "show-home": "Show Home Tour"};
    const mapLoc = {"zipper": "zipper", "nashville-north": "nashvilleNorth", "trick-riding": "monsterEnergy", "show-home": "showHome"};
    const placeName = {"zipper": "The Zipper", "nashville-north": "Nashville North", "trick-riding": "Monster Energy Compound", "show-home": "Show Home"};
    event_obj.title = foo[urlParams.get('attraction')];
    event_obj.map = mapLoc[urlParams.get("attraction")];
    event_obj.place = placeName[urlParams.get("attraction")];
    event_obj.start = start;
    event_obj.end = end;
    
    // add to planner_data
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == date) {
            if (!checkConflict(event_obj, date)) {
                redirect = true;
                planner_data[index].events.push(event_obj);
            }
            else {
                redirect = false;
                alert("You already have an event scheduled at this time!");
                break;
            }
        }
    }
    localStorage.setItem('plannerData', JSON.stringify(planner_data));
    if (redirect) {
        window.location.href = queue + timeslot + dateparam , '_blank';
    }

}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function checkConflict(e1, date) {
    for (let index = 0; index < planner_data.length; index++) {
        let events = planner_data[index].events;
        if (planner_data[index].date === date) {
            for (let i = 0; i < events.length; i++) {
                let e2 = events[i];

                // Convert times to minutes for easier comparison
                let e1StartMinutes = timeToMinutes(e1.start);
                let e1EndMinutes = timeToMinutes(e1.end);
                let e2StartMinutes = timeToMinutes(e2.start);
                let e2EndMinutes = timeToMinutes(e2.end);
                
                if (e1.start === e2.start || e1.end === e2.end) {
                    return true;
                }
                // Check for overlap
                if (e1StartMinutes < e2EndMinutes && e1EndMinutes > e2StartMinutes) {
                    return true; // Conflict detected
                }
            }
        }
    }
    return false; // No conflict
}

function increment() {
    var numberField = document.getElementById('numberField');
    var currentValue = parseInt(numberField.value, 10);
    if (currentValue < parseInt(numberField.max, 10)) {
        numberField.value = currentValue + 1;
    }
}

function decrement() {
    var numberField = document.getElementById('numberField');
    var currentValue = parseInt(numberField.value, 10);
    if (currentValue > parseInt(numberField.min, 10)) {
        numberField.value = currentValue - 1;
    }
}

function getQueues() {
    const getdate = document.getElementById("numberField").value;
    date = getdate;
    const headerDate = document.getElementById('header-date');
    headerDate.innerHTML = `July ${date}th`
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
window.increment = increment;
window.decrement = decrement;
window.getQueues = getQueues;