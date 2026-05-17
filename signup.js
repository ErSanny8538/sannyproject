// Dark Mode Start code from here

const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Dark Mode end code here


// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

console.log("hamburger", hamburger);
console.log("navLinks", navLinks);

hamburger.addEventListener("click", () => {
    console.log("hamburger clicked");
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navLinks.classList.remove("active");
    }
});

// ============================= 
// PASSWORD TOGGLE
// =============================

const passwordToggles = document.querySelectorAll('.password-toggle');

passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        const fieldId = this.getAttribute('data-toggle');
        const input = document.getElementById(fieldId);
        const eyeIcon = this.querySelector('.eye-icon');
        
        if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.textContent = '👁️‍🗨️'; // Closed eye with tear
        } else {
            input.type = 'password';
            eyeIcon.textContent = '👁️'; // Open eye
        }
    });
});

// ============================= 
// Add smooth focus effects to inputs
const inputs = document.querySelectorAll('.input-group input');

inputs.forEach(input => {
    // Add blur effect on blur
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.parentElement.classList.remove('filled');
        }
    });

    // Add filled class when input has value
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.parentElement.classList.add('filled');
        } else {
            this.parentElement.classList.remove('filled');
        }
    });
});

// Password validation and confirmation
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordHint = document.querySelector('.password-hint');

if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        
        // Check password strength
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;
        
        if (!isLongEnough || !hasLetters || !hasNumbers) {
            if (passwordHint) {
                passwordHint.style.color = '#ef4444';
                passwordHint.innerHTML = '⚠️ Password must be at least 8 characters with letters & numbers';
            }
        } else {
            if (passwordHint) {
                passwordHint.style.color = '#10b981';
                passwordHint.innerHTML = '✓ Strong password';
            }
        }
        
        // Check if passwords match
        if (confirmPasswordInput.value) {
            validatePasswordMatch();
        }
    });
}

if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);
}

function validatePasswordMatch() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.style.borderColor = '#ef4444';
        confirmPasswordInput.parentElement.style.borderColor = '#ef4444';
    } else if (confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = '#10b981';
        confirmPasswordInput.parentElement.style.borderColor = '#10b981';
    }
}

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.style.borderColor = '#ef4444';
        } else if (email) {
            this.style.borderColor = '#10b981';
        }
    });
}

// Form submission with validation
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = this.querySelector('#fullname').value.trim();
        const email = this.querySelector('#email').value.trim();
        const password = this.querySelector('#password').value;
        const confirmPassword = this.querySelector('#confirm-password').value;
        const terms = this.querySelector('#terms').checked;
        
        // Validate all fields
        if (!fullname) {
            showError('Please enter your full name');
            return;
        }
        
        if (!email) {
            showError('Please enter your email address');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            return;
        }
        
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            showError('Password must contain both letters and numbers');
            return;
        }
        
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        if (!terms) {
            showError('Please agree to Terms & Conditions');
            return;
        }
        
        // All validations passed
        submitForm();
    });
}

function showError(message) {
    // Create or update error message
    let errorDiv = document.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        signupForm.insertBefore(errorDiv, signupForm.firstChild);
    }
    
    errorDiv.innerHTML = `<div style="padding: 12px 16px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 8px; color: #dc2626; font-size: 14px; font-weight: 500; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 16px;">⚠️</span>
        <span>${message}</span>
    </div>`;
    
    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv) {
            errorDiv.remove();
        }
    }, 5000);
}

function submitForm() {
    const btn = signupForm.querySelector('.signup-btn-main');
    const originalText = btn.innerHTML;
    
    // Show loading state
    btn.style.opacity = '0.8';
    btn.innerHTML = '<span>Creating account...</span>';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.innerHTML = '<span>✓ Account created!</span>';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            signupForm.reset();
            
            // Redirect to login or dashboard
            // window.location.href = '/html/login.html';
        }, 2000);
    }, 1500);
}
