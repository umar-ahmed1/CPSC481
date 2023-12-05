// Function to handle resetting password
function resetPassword(event) {
    event.preventDefault();

    // Get login form details
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

    // Check if passwords match
    if (password !== rePassword) {
        alert('Passwords do not match');
        return;
    }

    // Get all existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any user in the list of users
    const user = users.find(u => u.email === email);

    //If user details correct, store the logged in user and redirect to landing page
    if (user) {
        // Display a confirmation alert
        const confirmation = window.confirm('Confirmation email sent. Click OK to redirect to home.');
        if (confirmation){
            window.location.href = '../';
        }
    // Display an error message
    } else {
        alert('Email Not Found. Please try again.');
    }
}

// Attach event listener to the form
const resetForm = document.querySelector('.reg-form');
resetForm.addEventListener('submit', resetPassword);

//get the cancel button and set its onclick to return to the main page
const cancelButton = document.getElementById('cancel')
cancelButton.onclick = function () {
    window.location.href = '../'
}

const forgotPassword = document.getElementById('forgot-password')
forgotPassword.onclick = function () {
    window.location.href = 'forgot-password.html'
}

//stub for confirming confirmation email for reset password
const confirmationEmailCheck = () => {

}

//stub for actually resetting the password after email confirmed
const confirmResetPassword = () => {

}