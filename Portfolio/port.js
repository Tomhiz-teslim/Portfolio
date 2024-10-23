// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target element ID
        const targetElement = document.querySelector(targetId); // Find the target element

        // Scroll to the target element with smooth behavior
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to the start of the target element
            });
        }
    });
});



function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}


document.getElementById('chatForm').addEventListener('submit', function(event) {
    var userName = document.getElementById('userName').value;
    var userMessage = document.getElementById('userMessage').value;

    if (!userName || !userMessage) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});
