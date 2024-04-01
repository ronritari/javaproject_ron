
    // Check if the user is authenticated
    const authenticated = sessionStorage.getItem('authenticated');


    if (!authenticated && window.location.pathname === 'adminpage/helloAdmin.html') {
        // Redirect to the login page
        window.location.href = '/';
    }

     sessionStorage.removeItem('authenticated')



