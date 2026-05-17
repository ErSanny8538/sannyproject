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

// Form validation
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        
        if (email && password) {
            // Add success animation
            const btn = this.querySelector('.login-btn-main');
            btn.style.opacity = '0.8';
            btn.innerHTML = '<span>✓ Logging in...</span>';
            
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.innerHTML = '<span>Login</span><span class="btn-arrow">→</span>';
                // Here you would normally submit to backend
            }, 1500);
        }
    });
}
