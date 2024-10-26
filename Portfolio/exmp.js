// Function to create the typewriter effect
function typewriterEffect(element, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    // Start typing
    type();
}

// Initialize the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
    const textElement1 = document.getElementById("typewriter");
    const textElement2 = document.getElementById("typewriter-name");
    const textElement3 = document.getElementById("typewriter-role");

    // Apply typewriter effect with different speeds
    typewriterEffect(textElement1, "HELLO, I'M", 100);
    setTimeout(() => typewriterEffect(textElement2, "SANUSI OLUWATOMIWA TESLIM", 100), 800);
    setTimeout(() => typewriterEffect(textElement3, "SOFTWARE DEVELOPER", 100), 3000);
});
