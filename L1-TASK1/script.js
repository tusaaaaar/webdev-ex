// Toggle icon and navbar functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll functionality
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 550;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Highlight active nav link
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) activeLink.classList.add('active');

            // Add animation class
            sec.classList.add('show-animate');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and close navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation when reaching the bottom of the page
    if (window.innerHeight + top >= document.documentElement.scrollHeight) {
        footer.classList.add('show-animate');
    }
});

// Form validation and email settings
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate each field
        if (!validateField(nameInput, 'Please enter your name.')) return;
        if (!validateField(emailInput, 'Please enter your email address.')) return;
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }
        if (!validateField(messageInput, 'Please enter your message.')) return;

        // Success message and reset form
        alert('Thank you! Your message has been sent.');
        form.reset();
    });

    // Generic field validation
    function validateField(input, errorMessage) {
        if (input.value.trim() === '') {
            alert(errorMessage);
            input.focus();
            return false;
        }
        return true;
    }

    // Simple email validation
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

// Download resume functionality
const downloadResumeBtn = document.getElementById('download-resume');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (confirm('Would you like to download my Resume?')) {
            window.location.href = 'resumeTS.pdf'; // Ensure the resume file is in the correct directory
        }
    });
}

