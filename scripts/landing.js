//get the register button
const registerButton = document.getElementById("register")
//set the register button onclick to redirect the page
registerButton.onclick = function () {
    window.location.href = 'pages/register.html'
}

//get the login button
const loginButton = document.getElementById("login")
//set the login button onclick to redirect the page
loginButton.onclick = function () {
    window.location.href = 'pages/login.html'
}


//get the map button the queue button and the planner button
const mapButton = document.getElementById("map")
const queueButton = document.getElementById("queue")
const plannerButton = document.getElementById("planner")

//make each button redirect to the required page
mapButton.onclick = function () {
    window.location.href = 'pages/map.html'
}

queueButton.onclick = function () {
    window.location.href = 'pages/attractions.html'
}

plannerButton.onclick = function () {
    window.location.href = 'pages/dayplanner.html'
}


// Check if there's a logged-in user and get the logout button
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const logoutButton = document.getElementById("logout");

//set the logout button onclick to sign out by removing loggedinuser and redirecting to main page
//also wanna update the plannerData
//when we login we update the planner data
logoutButton.onclick = function () {
    const plannerData = JSON.parse(localStorage.getItem('plannerData'));
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const email = loggedInUser.email
    //get all the users and the logged in user from that array of users
    const users = JSON.parse(localStorage.getItem('users'));
    const arrayUser = users.find(user => user.email === email)
    arrayUser.plannerData = plannerData
    // Store updated user array in local storage
    localStorage.setItem('users', JSON.stringify(users));
    //also reset the planner data
    localStorage.setItem('userPlannerData',JSON.stringify([]))
    //set the jsujt loggedout
    localStorage.setItem('justLoggedOut',JSON.stringify(true))
    //remove the logged in user and put the page to the landing page
    localStorage.removeItem('loggedInUser');
    window.location.href = "";
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