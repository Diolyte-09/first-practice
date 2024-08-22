// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu toggle for mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Simple form validation for "What you need" section
const form = document.querySelector('#requirements-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const errorDiv = document.querySelector('.error-message');

    // Validate inputs
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        errorDiv.textContent = 'Please fill out all fields.';
    } else {
        // Display success message
        errorDiv.textContent = 'Form submitted successfully!';
        // You can add code here to send form data to a backend server
        // Reset form inputs
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});
