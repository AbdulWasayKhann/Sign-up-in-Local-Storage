// Get user data from registration form and store in local storage
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    const user = {
        name: name,
        email: email,
        password: password
    };
    
    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Push new user to array
    users.push(user);
    
    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Redirect to login page
    window.location.href = 'login.html';
});

// Validate login credentials and redirect to next page
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user exists and credentials match
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Redirect to dashboard or next page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
