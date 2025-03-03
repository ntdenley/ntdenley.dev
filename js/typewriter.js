document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.getElementById("typewriter-text");
    const textContent = typewriterElement.textContent.trim();
    const numCharacters = textContent.length;

    // Create a new style element
    const style = document.createElement('style');
    style.type = 'text/css';

    // Define the keyframes with the calculated steps
    const keyframes = `
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        .typewriter {
            animation: typing 3s steps(${numCharacters}, end) forwards, blink 1s step-end infinite;
        }
    `;

    // Append the keyframes to the style element
    style.innerHTML = keyframes;
    document.head.appendChild(style);
});