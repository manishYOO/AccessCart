document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation between login and signup pages
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    if (signupLink) {
        signupLink.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
   

    // Handle login form submission
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form from submitting normally
            
            // Retrieve the username from the form
            const username = document.getElementById('username').value;
            
            // Save username to localStorage
            localStorage.setItem('username', username);
            
            // Redirect to main page
            window.location.href = 'main.html';
        });
    }

    // Handle signup form submission
    const signupForm = document.querySelector('.signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form from submitting normally
            
            // Implement signup logic here if needed
            // For now, just redirect to login page
            window.location.href = 'login.html';
        });
    }
});
