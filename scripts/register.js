// Function to handle user registration 
function registerUser(event) {
    event.preventDefault();

    // Get form elements and their values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

    //check if passwords match
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

    // Store user details in local storage
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User registered:', user);

    //redirect the user
    window.location.href = 'landing.html'
}

// Attach event listener to the form
const registerForm = document.querySelector('.reg-form');
registerForm.addEventListener('submit', registerUser);