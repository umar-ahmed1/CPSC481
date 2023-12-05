// Function to handle user login
function loginUser(event) {
    event.preventDefault();

    // Get login form details
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get all existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any user in the list of users
    const user = users.find(u => u.email === email && u.password === password);

    //If user details correct, store the logged in user and redirect to landing page
    //also set the plannerData in local storage to the users plannerdata
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        localStorage.setItem('plannerData',JSON.stringify(user.plannerData))
        window.location.href = '../';
    // Display an error message
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Attach event listener to the form
const loginForm = document.querySelector('.reg-form');
loginForm.addEventListener('submit', loginUser);

//get the cancel button and set its onclick to return to the main page
const cancelButton = document.getElementById('cancel')
cancelButton.onclick = function () {
    window.location.href = '../'
}

const forgotPassword = document.getElementById('forgot-password')
forgotPassword.onclick = function () {
    window.location.href = 'forgot-password.html'
}

const forgotEmail = document.getElementById('forgot-email')
forgotEmail.onclick = function () {
    alert('Feature not Implemented');
}