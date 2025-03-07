/**
 * UPHSD-LP Campus Navigator - Login Authentication
 * Handles user login validation against student data
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessageElement = document.getElementById('error-message');
    const guestLoginBtn = document.getElementById('guest-login');
    
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Handle student login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get input values
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            
            // Clear any previous error messages
            if (errorMessageElement) {
                errorMessageElement.textContent = '';
                errorMessageElement.style.display = 'none';
            }
            
            // Validate student number format
            const studentNumberRegex = /^\d{2}-\d{4}-\d{3}$/;
            if (!studentNumberRegex.test(username)) {
                showError('Invalid student number format. Please use the format XX-XXXX-XXX');
                shakeLoginContainer();
                return;
            }
            
            // Verify if student exists in the database
            if (!studentData[username]) {
                showError('Student number not found in our records');
                shakeLoginContainer();
                return;
            }
            
            // Check password against the student's default password
            const correctPassword = studentData[username].defaultPassword;
            
            if (password !== correctPassword) {
                showError('Incorrect password. Please try again');
                shakeLoginContainer();
                return;
            }
            
            // If we reach here, login is successful
            console.log('Login successful for student ID:', username);
            
            // Store authentication data in session storage
            sessionStorage.setItem('authToken', 'student-' + Date.now());
            sessionStorage.setItem('userType', 'student');
            sessionStorage.setItem('studentId', username);
            sessionStorage.setItem('studentName', 'Student ' + studentData[username].id); // Usually would store actual name
            
            // Show success message
            showLoginSuccess();
            
            // Redirect to home page after a brief delay
            setTimeout(function() {
                window.location.href = 'home.html';
            }, 1500);
        });
    }
    
    // Handle guest login
    if (guestLoginBtn) {
        guestLoginBtn.addEventListener('click', function() {
            // Generate a guest token
            const guestToken = 'guest-' + Date.now();
            
            // Store in session storage
            sessionStorage.setItem('authToken', guestToken);
            sessionStorage.setItem('userType', 'guest');
            
            // Show success message
            showLoginSuccess('Guest');
            
            // Redirect to home page
            setTimeout(function() {
                window.location.href = 'home.html';
            }, 1500);
        });
    }
    
    // Helper function to display error messages
    function showError(message) {
        if (errorMessageElement) {
            errorMessageElement.textContent = message;
            errorMessageElement.style.display = 'block';
            errorMessageElement.style.color = '#ff0000';
        }
    }
    
    // Helper function to add shake animation to login container
    function shakeLoginContainer() {
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            loginContainer.classList.add('shake-animation');
            
            setTimeout(function() {
                loginContainer.classList.remove('shake-animation');
            }, 500);
        }
    }
    
    // Helper function to show login success message
    function showLoginSuccess(userType = 'Student') {
        // Create success message element if it doesn't exist
        let successMessage = document.getElementById('login-success');
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.id = 'login-success';
            successMessage.className = 'login-success';
            
            // Style the success message
            successMessage.style.position = 'fixed';
            successMessage.style.top = '0';
            successMessage.style.left = '0';
            successMessage.style.width = '100%';
            successMessage.style.height = '100%';
            successMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            successMessage.style.display = 'flex';
            successMessage.style.justifyContent = 'center';
            successMessage.style.alignItems = 'center';
            successMessage.style.zIndex = '9999';
            
            // Add content
            const content = document.createElement('div');
            content.style.backgroundColor = 'white';
            content.style.padding = '30px';
            content.style.borderRadius = '10px';
            content.style.textAlign = 'center';
            content.style.maxWidth = '400px';
            content.style.width = '90%';
            
            content.innerHTML = `
                <div style="color: #7F0404; font-size: 48px; margin-bottom: 20px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="color: #333; margin-bottom: 15px; font-size: 24px;">Login Successful</h3>
                <p style="color: #666; margin-bottom: 0;">Welcome, ${userType}! Redirecting to home page...</p>
            `;
            
            successMessage.appendChild(content);
            document.body.appendChild(successMessage);
        }
        
        // Show the success message
        successMessage.style.display = 'flex';
        
        // Add animation
        successMessage.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 300,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
    }
});

// Global error handler
window.addEventListener('error', function(event) {
    console.error('Unhandled error:', event.error);
});