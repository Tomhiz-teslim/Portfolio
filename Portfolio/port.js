// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functions
function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('myModal').focus(); // Accessibility improvement
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Close modal on Escape key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Submit button clicked'); // Debugging log

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email);
    console.log('Message:', message);

    emailjs.init("qaBzeFhaISn-1gCBq"); // Replace "your_user_id" with your actual EmailJS User ID

    emailjs.send('service_2pmbgdu', 'template_k4y9axm', { email, message })
        .then(function () {
            document.getElementById('statusMessage').textContent = 'Message sent successfully!';
        })
        .catch(function (error) {
            document.getElementById('statusMessage').textContent = 'Failed to send message.';
            console.error('Error:', error);
        });
});
