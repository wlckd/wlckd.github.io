// Get a reference to the <h1> and <audio> elements
const h1Element = document.getElementById("play_audio");
const audioElement = document.getElementById("audio");

// Add a click event listener to the <h1> element
h1Element.addEventListener("click", function () {
    // Check if the audio is currently playing, and pause it if it is
    if (!audioElement.paused) {
        audioElement.pause();
    }
    
    // Play the audio
    audioElement.play();
});
