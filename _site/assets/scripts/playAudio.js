document.addEventListener("DOMContentLoaded", function () {
    // Get the audio file URL from the first element with the "playAudio" class
    const audioElement = new Audio(document.querySelector(".playAudio").getAttribute("data-audio"));

    // Preload the audio file on page load
    audioElement.preload = "auto";

    // Add click event listener to play the audio
    document.querySelector(".playAudio").addEventListener("click", function () {
        // Play the audio
        audioElement.play();
    });

    // Remove the audio element when playback is finished
    audioElement.addEventListener("ended", function () {
        audioElement.remove();
    });
});
