//get the register button
const registerButton = document.getElementById("register")
//set the register button onclick to redirect the page
registerButton.onclick = function () {
    window.location.href = 'register.html'
}

//get the login button
const loginButton = document.getElementById("login")
//set the login button onclick to redirect the page
loginButton.onclick = function () {
    window.location.href = 'login.html'
}


//get the map button the queue button and the planner button
const mapButton = document.getElementById("map")
const queueButton = document.getElementById("queue")
const plannerButton = document.getElementById("planner")

//make each button redirect to the required page
mapButton.onclick = function () {
    window.location.href = 'map.html'
}

queueButton.onclick = function () {
    window.location.href = 'attractions.html'
}

plannerButton.onclick = function () {
    window.location.href = 'dayplanner.html'
}


// Check if there's a logged-in user and get the logout button
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const logoutButton = document.getElementById("logout");

//set the logout button onclick to sign out by removing loggedinuser and redirecting to main page
logoutButton.onclick = function () {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'landing.html';
}

// If there's a logged-in user, show the logout button and not the register/sign in button
if (loggedInUser) {
    logoutButton.style.display = "block";
    loginButton.style.display = "none";
    registerButton.style.display = "none";

} else {
    // If no logged-in user, hide the logout button and show the other two buttons
    logoutButton.style.display = "none";
    loginButton.style.display = "block";
    registerButton.style.display = "block";
}