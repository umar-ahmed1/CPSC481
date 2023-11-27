//get the register button
const registerButtons = document.getElementsByClassName("register-button")
//set the register button onclick to redirect the page
registerButtons[0].onclick = function () {
    window.location.href = 'register.html'
}

//get the login button
const loginButtons = document.getElementsByClassName("login-button")
//set the login button onclick to redirect the page
loginButtons[0].onclick = function () {
    window.location.href = 'login.html'
}
