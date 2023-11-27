// Function to handle user registration 
function registerUser(event) {
    event.preventDefault();

    // Get form elements and their values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

    // Check if passwords match
    if (password !== rePassword) {
        alert('Passwords do not match');
        return;
    }

    // Create user
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(user);

    // Store updated user array in local storage
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User registered:', user);

    // Redirect the user
    window.location.href = 'landing.html';
}

// Attach event listener to the form
const registerForm = document.querySelector('.reg-form');
registerForm.addEventListener('submit', registerUser);
