document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                return;
            }

            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                price: document.getElementById('price').value
            };

            // Here you can add your backend logic to send the email
            // For now, we'll just show the success message
            submitForm(formData);
        });
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const price = document.getElementById('price').value;
    const terms = document.getElementById('terms').checked;

    if (!name) {
        alert('Please enter your name');
        return false;
    }

    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!message) {
        alert('Please enter a message');
        return false;
    }

    if (!price || price < 20) {
        alert('Please enter an offer of at least $20');
        return false;
    }

    if (!terms) {
        alert('Please accept the terms and conditions');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function submitForm(formData) {
    // Disable submit button
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        // Show success message
        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Log form data (in production, send to backend)
        console.log('Form submitted:', formData);

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 3000);
    }, 1000);
}

function showTerms() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeTerms() {
    document.getElementById('termsModal').style.display = 'none';
}

function closeInfo() {
    document.getElementById('infoModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('termsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
