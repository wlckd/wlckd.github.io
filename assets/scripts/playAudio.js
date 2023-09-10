//Event listener on loaded
document.addEventListener("DOMContentLoaded", function () {
    // Function to play audio by URL
    function playAudio(audioFileUrl) {
        // Create a new audio element
        const audioElement = new Audio(audioFileUrl);

        // Play the audio
        audioElement.play();

        // Remove the audio element when playback is finished
        audioElement.addEventListener("ended", function () {
            audioElement.remove();
        });
    }

    // Add click event listeners to all elements with the "playAudio" class
    const clickableElements = document.querySelectorAll(".playAudio");
    clickableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            const audioFileUrl = element.getAttribute("data-audio");
            playAudio(audioFileUrl);
        });
    });
});
