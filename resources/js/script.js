document.addEventListener('DOMContentLoaded', function () {
    var typedText = document.getElementById('typed-text');
    var backgroundMusic = document.getElementById('background-music');
    var messages = [
        "Hi, Lilienne.",
        "Before year endss..."
    ];

    // Function to simulate typing effect
    function typeWriter(text, index, callback) {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index, callback);
            }, 50); // Adjust the typing speed (milliseconds per character)
        } else {
            // After typing, you can perform any additional actions or callbacks
            if (callback) {
                setTimeout(callback, 1500); // Adjust the delay before starting the next message
            }
        }
    }

    // Function to clear the typed text
    function clearText() {
        typedText.innerHTML = '';
    }

    // Start the typing effect with the first message after 3 seconds
    setTimeout(function () {
        typeWriter(messages[0], 0, function () {
            // Start playing the background music
            backgroundMusic.play();

            // Clear the text after a delay
            setTimeout(clearText, 1500);

            // Start typing the second message after clearing
            setTimeout(function () {
                typeWriter(messages[1], 0, function () {
                    // You can continue adding more messages and actions as needed
                    // For example, clear the text after the second message
                    setTimeout(clearText, 1500);
                });
            }, 1500);
        });
    }, 3000); // 3000 milliseconds (3 seconds) delay before starting the typing effect
});
