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

// Course functionality on index page

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        courseCards.forEach((card) => {
            const category = card.getAttribute("data-category");

            if (filterValue === "all" || filterValue === category) {
                card.style.display = "flex";   // show
            } else {
                card.style.display = "none";   // hide
            }
        });

    });
});



