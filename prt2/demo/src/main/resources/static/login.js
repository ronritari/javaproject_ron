document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const credentials = {
            username: usernameInput.value,
            passwordHash: passwordInput.value
        };

        // Use fetch or any other AJAX library to send the credentials to the server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(response => {
            if (response.ok) {
                // Set a flag in sessionStorage to indicate authentication
                sessionStorage.setItem('authenticated', 'true');
                window.location.href = 'adminpage/helloAdmin.html';
            } else {
                console.error('Login failed');
            }
        })
        .catch(error => console.error('Error during login:', error));
    });
});
