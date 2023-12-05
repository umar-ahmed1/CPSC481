// CONSTANT
const planner_data_1 = [
    // July 09 (Monday)
    {
        "day": "Mon",
        "date": "09",
        "events": [
            { "start": "10:00", "end": "11:30", "sMer": "am", "eMer": "am", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "4:00", "end": "7:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Calf Roping Competition", "event-type": "rodeo", "place": "Agriculture Building","map":"agriculture"},
            { "start": "2:00", "end": "3:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Lasso Challenge", "event-type": "rodeo", "place": "Western Field","map":"northern" },
            { "start": "1:00", "end": "3:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
        ]
    },
    // July 10 (Tuesday)
    {
        "day": "Tue",
        "date": "10",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    // July 11 (Wednesday)
    {
        "day": "Wed",
        "date": "11",
        "events": [
            { "start": "11:30", "end": "1:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    // July 12 (Thursday)
    {
        "day": "Thurs",
        "date": "12",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    // July 13 (Friday)
    {
        "day": "Fri",
        "date": "13",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    {
        "day": "Sat",
        "date": "14",
        "events": [
            { "start": "12:00", "end": "2:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Pop Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "10:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "1:00", "end": "3:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    {
        "day": "Sun",
        "date": "15",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    {
        "day": "Mon",
        "date": "16",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    {
        "day": "Tue",
        "date": "17",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    },
    {
        "day": "Wed",
        "date": "18",
        "events": [
            { "start": "11:00", "end": "12:00", "sMer": "am", "eMer": "pm", "added": "false", "title": "Pop Power Hour", "event-type": "concert", "place": "Pop Stage","map":"coca"},
            { "start": "12:30", "end": "1:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Morning Jazz", "event-type": "concert", "place": "Fun Zone","map":"saddledome"},
            { "start": "2:00", "end": "4:00", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Bull Riding Showdown", "event-type": "rodeo", "place": "Rodeo Ring","map":"infield"},
            { "start": "5:00", "end": "6:30", "sMer": "pm", "eMer": "pm", "added": "false", "title": "Wild Horse Taming", "event-type": "rodeo", "place": "Dusty Arena","map":"trailblazer" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const userSavedData = localStorage.getItem('userPlannerData')
    const uSavedData = JSON.parse(userSavedData)
    if (uSavedData.length !== 0){
        planner_data = uSavedData
        console.log("here")
    } else{
        const savedData = localStorage.getItem('plannerData');
        if (savedData) {
            planner_data = JSON.parse(savedData);
        }
    }
    update_planner();

    var checkboxes = document.querySelectorAll('.hidden-checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            setVar(this); 
        });
    });

    // Set up event listeners for all clickable images
    document.querySelectorAll('.schedule-to-map').forEach(img => {
        img.addEventListener('click', function() {
            const arg = this.getAttribute('data-arg');
            onImageClick(arg);
        });
    });
    window.addEventListener('storage', function(event) {
        if (event.key === 'plannerData') {
            update_planner();
        }
    });
});


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

function eventInPlanner(e) {
    for (let i = 0; i < planner_data.length; i++) {
        let events = planner_data[i].events;
        for (let j = 0; j < events.length; j++) {
            if (e.title === events[j].title) {
                return true;
            }
        }
    }
    return false;
}

function change(button, date, event) {
    if (event.added === "false") { // added an event
        event.added = "true";
        button.textContent = 'REMOVE';
        let event_obj = {
            "start": event.start,
            "end": event.end,
            "title": event.title,
            "event-type": event["event-type"],
            "place": event.place,
            "map":event.map,
        }
        addEventToPlannerData(event_obj, date);
    } else { // removed an event
        event.added = "false";
        button.textContent = 'ADD';
        removeEventFromPlannerData(event, date);
    }
    update_planner()
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
    eventCardTime.innerHTML = `<span>Time: </span>${event.start}${event.sMer} - ${event.end}${event.eMer}`;
    const eventCardLoc = document.createElement('div');
    eventCardLoc.className = 'event-card-loc';
    eventCardLoc.innerHTML = `<span>Place: </span>${event.place}`;

    eventCardInfo.appendChild(eventCardName);
    eventCardInfo.appendChild(eventCardTime);
    eventCardInfo.appendChild(eventCardLoc);
    // add button
    const button = document.createElement('button');
    button.textContent = event.added === "false" ? 'ADD': 'REMOVE';
    button.style.width = "30%";
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
    eventCardTime.innerHTML = `<span>Time: </span>${event.start}${event.sMer} - ${event.end}${event.eMer}`;
    const eventCardLoc = document.createElement('div');
    eventCardLoc.className = 'event-card-loc';
    eventCardLoc.innerHTML = `<span>Place: </span>${event.place}`;

    eventCardInfo.appendChild(eventCardName);
    eventCardInfo.appendChild(eventCardTime);
    eventCardInfo.appendChild(eventCardLoc);

    // add button
    const button = document.createElement('button');
    button.textContent = event.added === "false" ? 'ADD': 'REMOVE';
    button.style.width = "30%";
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
        let date = document.getElementById("numberField").value;
        if (event["event-type"] == "rodeo") {
            rodeoEvents.push(createRodeoCard(event, date === "9" ? "09": date));
        } else if (event["event-type"] == "concert") {
            concertEvents.push(createConcertCard(event, date === "9" ? "09": date));
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
    },
    {
        "day": "Sat",
        "date": "14",
        "events": []
    },
    {
        "day": "Sun",
        "date": "15",
        "events": []
    },
    {
        "day": "Mon",
        "date": "16",
        "events": []
    },
    {
        "day": "Tue",
        "date": "17",
        "events": []
    },
    {
        "day": "Wed",
        "date": "18",
        "events": []
    }
    
]

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

                // Check for overlap
                if (e1StartMinutes < e2EndMinutes && e1EndMinutes > e2StartMinutes) {
                    return true; // Conflict detected
                }
            }
        }
    }
    return false; // No conflict
}

function addEventToPlannerData(eventToAdd, date) {
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == date) {
            if (!checkConflict(eventToAdd, date)) {
                planner_data[index].events.push(eventToAdd);
            }
            else {
                alert("You already have an event scheduled at this time!");
                break;
            }
        }
    }
    update_planner();
}

function removeEventFromPlannerData(eventToRemove, date) {
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == date) {
            planner_data[index].events = planner_data[index].events.filter(e => e.title !== eventToRemove.title);
        }     
    }
    update_planner();
}


let rows = 11 * 2; // 11 slots, each representing 30 minutes
let cols = 11;
let planner = new Array(rows);



function update_planner(filteredData = planner_data) {
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

    let date_conversion = {"09": "1", "10": "2", "11": "3", "12": "4", "13": "5", "14": "6", "15": "7", "16": "8", "17": "9", "18": "10"};
    
    filteredData.forEach(dayData => {
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
            let sMer = startHour < 12 ? "am" : "pm"; 
            let eMer = endHour < 12 ? "am" : "pm"; 

            // Fill the planner array with event data
            if (startSlot < rows && col < cols) {
                planner[startSlot][col] = {
                    title: event.title,
                    date: dayData.date,
                    start: event.start + sMer,
                    end: event.end + eMer,
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
    localStorage.setItem('plannerData', JSON.stringify(planner_data));
    createTBodyFromArray(planner, "stampede-planner");
}


function createTBodyFromArray(array, tableId) {
    const table = document.getElementById(tableId);
    
    if (table.querySelector('tbody')) {
        table.removeChild(table.querySelector('tbody'));
    }
    
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
    // Create the popup element
    const popup = document.createElement('div');
    popup.className = 'event-popup'; // Add a class for styling
    //if invalid then return
    if(!e.start) return;
    console.log(e)
    
    //if the event is a queue we will also add a view slot button
    const slotButton = document.createElement('button');
    slotButton.textContent = 'View Slot';
    slotButton.className = 'event-popup-btn';
    slotButton.onclick = function() {
        const foo = {"The Zipper":"zipper","Nashville North": "nashville-north","Trick Riding": "trick-riding","Show Home":"show-home"};
        const queue = "slot.html";
        let timeslot = "?timeslot=" + e.start.replace(/\s?[ap]m/i, "");
        timeslot += "&attraction=" + foo[e.title];
        const date = e.date;
        const dateparam = "&date=" + date;
        window.location.href = queue + timeslot + dateparam , '_blank';
    };
    slotButton.style.width = "75%";
    slotButton.style.marginTop = "10px";

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
    //if its a queue add the slotButton
    if (e.styles.eventType === "queue"){
        eventPopupInfo.appendChild(slotButton)
    }

    const btnFlex = document.createElement('div');
    btnFlex.className = 'btn-flex';
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.alignItems = "flex-start";
    popup.style.justifyContent = "center";

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
        planner_data_1.forEach(day => {
            day.events.forEach(ev => {
                if (ev.title === e.title) {
                    ev.added = "false";
                }
            })
        });
        getEvents();
        update_planner();
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

let all = true;
let queue = false;
let concert = false;
let rodeo = false;

function setVar(cb) {
    switch (cb.id) {
        case 'all':
            all = cb.checked;
            // If 'All' is checked, uncheck other filters
            if (all) {
                queue = concert = rodeo = false;
                updateCheckboxState();
            }
            break;
        case 'queue':
            queue = cb.checked;
            break;
        case 'concert':
            concert = cb.checked;
            break;
        case 'rodeo':
            rodeo = cb.checked;
            break;
    }

    // Reset 'All' if any specific filter is checked
    if (queue || concert || rodeo) {
        all = false;
        updateCheckboxState();
    }

    // Now call the function to update the planner view based on these filters
    updateUI();

}

function updateCheckboxState() {
    document.getElementById('all').checked = all;
    document.getElementById('queue').checked = queue;
    document.getElementById('concert').checked = concert;
    document.getElementById('rodeo').checked = rodeo;
}

function getFilteredEvents() {
    let filteredEvents = [];

    // If 'all' is checked, return all events
    if (all) {
        return planner_data;
    }

    // Filter events based on checkbox state
    planner_data.forEach(day => {
        let filteredDayEvents = day.events.filter(event => {
            return (queue && event["event-type"] === "queue") ||
                   (concert && event["event-type"] === "concert") ||
                   (rodeo && event["event-type"] === "rodeo");
        });

        if (filteredDayEvents.length > 0) {
            filteredEvents.push({ ...day, events: filteredDayEvents });
        }
    });

    return filteredEvents;
}

function updateUI() {
    let filteredData = getFilteredEvents();
    update_planner(filteredData);  // Pass filtered data to update the planner view
}



// Function to be called when an image is clicked
function onImageClick(arg) {
    let listOfEvents = [];
    for (let index = 0; index < planner_data.length; index++) {
        if (planner_data[index].date == arg) {
            listOfEvents = listOfEvents.concat(planner_data[index].events);
        }
    }
    const serializedEvents = JSON.stringify(listOfEvents);
    window.location.href = `map.html?arg=${encodeURIComponent(serializedEvents)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the Clear Schedule button
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', clearSchedule);
    
    function clearSchedule() {
        var confirmation = window.confirm("Are you sure you want to clear the schedule?");
        if (confirmation) {
            planner_data.forEach(day => {
                day.events = [];
            });
            planner_data_1.forEach(day => {
                day.events.forEach(e => {
                    e.added = "false";
                })
            });
            getEvents();
            update_planner();
        }
    }
})
