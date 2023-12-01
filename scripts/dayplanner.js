// CONSTANT
const planner_data_1 = [
    // July 09 (Monday)
    {
        "day": "Mon",
        "date": "09",
        "events": [
            { "start": "10", "end": "11", "title": "Morning Jazz Session", "event-type": "concert", "place": "Jazz Hall" },
            { "start": "1", "end": "2", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage" },
            { "start": "3", "end": "5", "title": "Rock Legends Live", "event-type": "concert", "place": "Main Arena" },
            { "start": "11", "end": "12", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring" },
            { "start": "2", "end": "3", "title": "Lasso Challenge", "event-type": "rodeo", "place": "Western Field" },
            { "start": "4", "end": "5", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena" },
            { "start": "12", "end": "1", "title": "Giant Ferris Wheel", "event-type": "queue", "place": "Fun Zone" },
            { "start": "3", "end": "4", "title": "Thunder Roller Coaster", "event-type": "queue", "place": "Adrenaline Alley" },
            { "start": "5", "end": "6", "title": "Haunted Mansion Tour", "event-type": "queue", "place": "Ghostly Hallows" }
        ]
    },
    // July 10 (Tuesday)
    {
        "day": "Tue",
        "date": "10",
        "events": [
            { "start": "10", "end": "11", "title": "Classical Melodies", "event-type": "concert", "place": "Orchestra Pit" },
            { "start": "1", "end": "2", "title": "Hip Hop Beats", "event-type": "concert", "place": "Urban Stage" },
            { "start": "4", "end": "6", "title": "Evening Blues", "event-type": "concert", "place": "Blues Corner" },
            { "start": "11", "end": "12", "title": "Rodeo Clown Show", "event-type": "rodeo", "place": "Clown Arena" },
            { "start": "2", "end": "3", "title": "Barrel Racing Bonanza", "event-type": "rodeo", "place": "Fast Track" },
            { "start": "5", "end": "6", "title": "Steer Wrestling Mania", "event-type": "rodeo", "place": "Rodeo Grounds" },
            { "start": "12", "end": "1", "title": "Crazy Carousel", "event-type": "queue", "place": "Kiddie Land" },
            { "start": "3", "end": "4", "title": "Splash Water Slide", "event-type": "queue", "place": "Water World" },
            { "start": "6", "end": "7", "title": "Sky High Ferris Wheel", "event-type": "queue", "place": "Skyline View" }
        ]
    },
    // July 11 (Wednesday)
    {
        "day": "Wed",
        "date": "11",
        "events": [
            { "start": "10", "end": "11", "title": "Folk Music Hour", "event-type": "concert", "place": "Folk Stage" },
            { "start": "2", "end": "3", "title": "Reggae Rhythms", "event-type": "concert", "place": "Beachfront" },
            { "start": "5", "end": "7", "title": "Indie Bands Live", "event-type": "concert", "place": "Indie Venue" },
            { "start": "11", "end": "12", "title": "Calf Roping Competition", "event-type": "rodeo", "place": "Rodeo Pen" },
            { "start": "1", "end": "2", "title": "Saddle Bronc Riding", "event-type": "rodeo", "place": "Open Arena" },
            { "start": "4", "end": "5", "title": "Team Roping", "event-type": "rodeo", "place": "Team Arena" },
            { "start": "12", "end": "1", "title": "Magic Carousel", "event-type": "queue", "place": "Magic Circle" },
            { "start": "3", "end": "4", "title": "Log Flume Adventure", "event-type": "queue", "place": "Adventure River" },
            { "start": "6", "end": "7", "title": "Pirate Ship Swing", "event-type": "queue", "place": "Pirate Cove" }
        ]
    },
    // July 12 (Thursday)
    {
        "day": "Thu",
        "date": "12",
        "events": [
            { "start": "10", "end": "11", "title": "Country Morning", "event-type": "concert", "place": "Country Hall" },
            { "start": "1", "end": "2", "title": "Electronic Dance Party", "event-type": "concert", "place": "Dance Arena" },
            { "start": "4", "end": "6", "title": "Soulful Evening", "event-type": "concert", "place": "Soul Stage" },
            { "start": "11", "end": "12", "title": "Bareback Horse Riding", "event-type": "rodeo", "place": "Central Rodeo" },
            { "start": "2", "end": "3", "title": "Goat Tying", "event-type": "rodeo", "place": "Goat Field" },
            { "start": "5", "end": "6", "title": "Team Penning", "event-type": "rodeo", "place": "Team Pen" },
            { "start": "12", "end": "1", "title": "Merry-Go-Round", "event-type": "queue", "place": "Family Fun Zone" },
            { "start": "3", "end": "4", "title": "Extreme Zip Line", "event-type": "queue", "place": "Thrill Park" },
            { "start": "6", "end": "7", "title": "Sky Drop Tower", "event-type": "queue", "place": "Sky High" }
        ]
    },
    // July 13 (Friday)
    {
        "day": "Fri",
        "date": "13",
        "events": [
            { "start": "10", "end": "11", "title": "Acoustic Sunrise", "event-type": "concert", "place": "Serenity Stage" },
            { "start": "2", "end": "3", "title": "Rhythm and Blues", "event-type": "concert", "place": "R&B Venue" },
            { "start": "5", "end": "7", "title": "Classic Rock Evening", "event-type": "concert", "place": "Rock Hall" },
            { "start": "11", "end": "12", "title": "Bronco Busting", "event-type": "rodeo", "place": "Bucking Arena" },
            { "start": "1", "end": "2", "title": "Rodeo Queen Contest", "event-type": "rodeo", "place": "Main Stage" },
            { "start": "4", "end": "5", "title": "Bullfighting Spectacle", "event-type": "rodeo", "place": "Arena of Bulls" },
            { "start": "12", "end": "1", "title": "Enchanted Carousel", "event-type": "queue", "place": "Enchanted Land" },
            { "start": "3", "end": "4", "title": "Space Rocket Ride", "event-type": "queue", "place": "Cosmic Zone" },
            { "start": "6", "end": "7", "title": "Dinosaur Safari", "event-type": "queue", "place": "Dino Park" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    update_planner();
    createTBodyFromArray(planner, 'stampede-planner');
    initializeCheckboxes();
});

function redrawPlanner() {
    const table = document.getElementById('stampede-planner');

    const existingTbody = table.querySelector('tbody');
    table.removeChild(existingTbody);

    update_planner();
    createTBodyFromArray(planner, 'stampede-planner');
}


// POP-UP WINDOW FUNCTIONS
function addMenu() {
    var popup = document.getElementById('add-menu');
    
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}
function closeAddMenu() {
    var popup = document.getElementById('add-menu');
    
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
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

function change(button, date, event) {
    if (button.textContent === 'ADD') { // added an event
        button.style.width = '80px';
        button.textContent = 'REMOVE';
        let event_obj = {
            "start": event.start,
            "end": event.end,
            "title": event.title,
            "event-type": event["event-type"],
            "place": event.place
        }
        addEventToPlannerData(event_obj, date);
    } else { // removed an event
        button.textContent = 'ADD';
        button.style.width = '50px';
        removeEventFromPlannerData(event, date);
    }
    // console.log(planner_data);
    redrawPlanner();
    // console.log(planner);
}

function createRodeoCard(event, date) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';

    const eventCardInfo = document.createElement('div');
    eventCardInfo.className = 'event-card-info';

    const eventCardName = document.createElement('div');
    eventCardName.className = 'event-card-name';
    eventCardName.innerHTML = `<span>Name: </span>${event.title}`;
    const eventCardTime = document.createElement('div');
    eventCardTime.className = 'event-card-time';
    eventCardTime.innerHTML = `<span>Time: </span>${event.start} - ${event.end}`;
    const eventCardLoc = document.createElement('div');
    eventCardLoc.className = 'event-card-loc';
    eventCardLoc.innerHTML = `<span>Place: </span>${event.place}`;

    eventCardInfo.appendChild(eventCardName);
    eventCardInfo.appendChild(eventCardTime);
    eventCardInfo.appendChild(eventCardLoc);
    // add button
    const button = document.createElement('button');
    button.textContent = 'ADD';
    button.className = 'event-card-btn';
    button.onclick = function() {
        change(this, date, event);
    };
    eventCard.appendChild(eventCardInfo);
    eventCard.appendChild(button);

    return eventCard;
}

function createConcertCard(event, date) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';

    const eventCardInfo = document.createElement('div');
    eventCardInfo.className = 'event-card-info';

    const eventCardName = document.createElement('div');
    eventCardName.className = 'event-card-name';
    eventCardName.innerHTML = `<span>Name: </span>${event.title}`;
    const eventCardTime = document.createElement('div');
    eventCardTime.className = 'event-card-time';
    eventCardTime.innerHTML = `<span>Time: </span>${event.start} - ${event.end}`;
    const eventCardLoc = document.createElement('div');
    eventCardLoc.className = 'event-card-loc';
    eventCardLoc.innerHTML = `<span>Place: </span>${event.place}`;

    eventCardInfo.appendChild(eventCardName);
    eventCardInfo.appendChild(eventCardTime);
    eventCardInfo.appendChild(eventCardLoc);

    // add button
    const button = document.createElement('button');
    button.textContent = 'ADD';
    button.className = 'event-card-btn';
    button.onclick = function() {
        change(this, date, event);
    };
    eventCard.appendChild(eventCardInfo);
    eventCard.appendChild(button);


    return eventCard;
}

function getEvents() {
    const results = document.getElementsByClassName("results")[0];
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
    const index = document.getElementById("numberField").value - 9;
    let events = planner_data_1[index].events;
    let rodeoEvents = [];
    let concertEvents = [];
    events.forEach(event => {
        if (event["event-type"] == "rodeo") {
            rodeoEvents.push(createRodeoCard(event, document.getElementById("numberField").value));
        } else if (event["event-type"] == "concert") {
            concertEvents.push(createConcertCard(event, document.getElementById("numberField").value));
        }
    });
    if (rodeoEvents) {
        const rodeo_heading = document.createElement('div');
        rodeo_heading.className = 'event-type-rodeo';
        rodeo_heading.innerHTML = "Rodeos";
        results.appendChild(rodeo_heading);
        for (let i = 0; i < rodeoEvents.length; i++) {
            results.appendChild(rodeoEvents[i]);
        }
    }
    if (concertEvents) {
        const concert_heading = document.createElement('div');
        concert_heading.className = 'event-type-concert';
        concert_heading.innerHTML = "Concerts";
        results.appendChild(concert_heading);
        for (let i = 0; i < concertEvents.length; i++) {
            results.appendChild(concertEvents[i]);
        }
    }

    
}




// DAY PLANNER FUNCTIONS
let planner_data = [
    {
        "day": "Mon",
        "date": "09",
        "events": []
    },
    {
        "day": "Tue",
        "date": "10",
        "events": []
    },
    {
        "day": "Wed",
        "date": "11",
        "events": []
    },
    {
        "day": "Thurs",
        "date": "12",
        "events": []
    },
    {
        "day": "Fri",
        "date": "13",
        "events": []
    }
]

function addEventToPlannerData(eventToAdd, date) {
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == date) {
            planner_data[index].events.push(eventToAdd);
        }
        
    }
}

function removeEventFromPlannerData(eventToRemove, date) {
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == date) {
            planner_data[index].events = planner_data[index].events.filter(e => e.title !== eventToRemove.title);
        }
        
    }
}


let rows = 11 * 2; // 11 slots, each representing 30 minutes
let cols = 6;
let planner = new Array(rows);



function update_planner() {
    for (let i = 0; i < rows; i++) {
        planner[i] = [];
        for (let j = 0; j < cols; j++) {
            if (j == 0) {
                let hour = Math.floor(i / 2) % 11 + 10; // Hour
                let minute = i % 2 === 0 ? '00' : '30'; // Minute
                let mer = hour < 12 ? "am" : "pm";
                hour = hour > 12 ? String(hour - 12) : hour;
                if (minute == '30') {
                    planner[i][j] = { title: hour + ":" + minute + " " + mer, styles: {"fontSize": "12px"} };
                } else {
                    planner[i][j] = { title: hour + ":" + minute + " " + mer, styles: {} };
                }
            } else {
                planner[i][j] = { title: "", styles: {} };
            }
        }
    }

    let date_conversion = {"09": "1", "10": "2", "11": "3", "12": "4", "13": "5"};
    
    planner_data.forEach(dayData => {
        const col = date_conversion[dayData.date];
        dayData.events.forEach(event => {
            let [startHour, startMinutes] = event.start.split(':').map(Number);
            let [endHour, endMinutes] = event.end.split(':').map(Number);

            // Convert to 24-hour format and adjust end time if necessary
            if (startHour < 10) startHour += 12;
            if (endHour < startHour || (endHour === startHour && endMinutes < startMinutes)) {
                endHour += 12;
            }

            let startSlot = (startHour - 10) * 2 + (startMinutes >= 30 ? 1 : 0);
            let endSlot = (endHour - 10) * 2 + (endMinutes >= 30 ? 1 : 0);
            let duration = endSlot - startSlot;

            // Fill the planner array with event data
            if (startSlot < rows && col < cols) {
                planner[startSlot][col] = {
                    title: event.title,
                    date: dayData.date,
                    start: event.start,
                    end: event.end,
                    place: event.place,
                    styles: {
                        "eventType": event["event-type"],
                        "rowspan": duration
                    }
                };
                // Mark the cells that are spanned
                for (let i = 1; i < duration; i++) {
                    if (startSlot + i < rows) {
                        planner[startSlot + i][col] = { title: "", styles: {"rowspan": -1 } };
                    }
                }
            }
        });
    });
}


function createTBodyFromArray(array, tableId) {
    const table = document.getElementById(tableId);
    const tbody = document.createElement('tbody');

    array.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach(cell => {
            // only create a cell if it's not spanned by a rowspan
            if (cell.styles.rowspan !== -1) {
                const td = document.createElement('td');
                td.textContent = cell.title;
                if (cell.styles.eventType) {
                    td.classList.add(cell.styles.eventType);
                }
                if (cell.styles.rowspan && cell.styles.rowspan > 0) {
                    td.setAttribute('rowspan', cell.styles.rowspan);
                }
                if (cell.styles.fontSize) {
                    td.style.fontSize = cell.styles.fontSize;
                }
                td.addEventListener('click', () => {
                    eventClicked(cell);
                });
                tr.appendChild(td);
            }
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
}

function eventClicked(e) {
    disableBackgroundInteraction();
    // Create the popup element
    const popup = document.createElement('div');
    popup.className = 'event-popup'; // Add a class for styling

    const eventPopupInfo = document.createElement('div');
    eventPopupInfo.className = 'event-popup-info';

    const eventPopupName = document.createElement('div');
    eventPopupName.className = 'event-popup-name';
    eventPopupName.innerHTML = `<span>Name: </span>${e.title}`;
    const eventPopupTime = document.createElement('div');
    eventPopupTime.className = 'event-popup-time';
    eventPopupTime.innerHTML = `<span>Time: </span>${e.start} - ${e.end}`;
    const eventPopupLoc = document.createElement('div');
    eventPopupLoc.className = 'event-popup-loc';
    eventPopupLoc.innerHTML = `<span>Place: </span>${e.place}`;

    eventPopupInfo.appendChild(eventPopupName);
    eventPopupInfo.appendChild(eventPopupTime);
    eventPopupInfo.appendChild(eventPopupLoc);

    const btnFlex = document.createElement('div');
    btnFlex.className = 'btn-flex';

    // Add a close button to the popup
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'event-popup-btn';
    closeButton.onclick = function() {
        popup.remove();
    };
    // Add a remove button to the popup
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'event-popup-btn';
    removeButton.onclick = function() {
        popup.remove()
        removeEventFromPlannerData(e, e.date);
        redrawPlanner();
    };
    popup.appendChild(eventPopupInfo);
    btnFlex.appendChild(closeButton);
    btnFlex.appendChild(removeButton);

    popup.appendChild(btnFlex)
    // Add the popup to the body of the document
    document.body.appendChild(popup);

    // Style the popup 
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.border = '1px solid black';
    popup.style.zIndex = '1000'; // Ensure it's above other elements
    btnFlex.style.display = 'flex';
    btnFlex.style.justifyContent = 'space-around';
    btnFlex.style.flexDirection = 'row';
    closeButton.style.marginTop = '10px';
    removeButton.style.marginTop = '10px';
}






// SIDE BAR FUNCTIONS
function redirectToAttractions() {
    window.location.href = 'attractions.html'
}
function redirectToLanding() {
    window.location.href = 'landing.html'
}


function initializeCheckboxes() {
    // Select all checkboxes with the class 'hidden-checkbox'
    var checkboxes = document.querySelectorAll('.hidden-checkbox');

    // Iterate over each checkbox and attach an event listener
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            filterEvents(this);
        });
    });
}


let planner_data_backup = JSON.parse(JSON.stringify(planner_data)); // Backup original planner data
function filterEvents(checkbox) {
    if (checkbox.checked) {
        for (let index = 0; index < planner_data.length; index++) {
            let date = planner_data[index].date;
            let events = planner_data[index].events;
            for (let j = 0; j < events.length; j++) {
                if (events[j]['event-type'] !== checkbox.id) {
                    removeEventFromPlannerData(events[j], date);
                }
                
            }
            
        }
    } else {
        // Restore original planner data when a checkbox is unchecked
        planner_data = JSON.parse(JSON.stringify(planner_data_backup));
    }
    redrawPlanner();
}

