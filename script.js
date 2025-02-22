document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust scroll position (50px for some offset)
            behavior: 'smooth'
        });
    });
});

// Form validation

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in both fields before submitting the form.');
    } else {
        // In a real scenario, you can send the form data to a server or an email API here
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    }
});
