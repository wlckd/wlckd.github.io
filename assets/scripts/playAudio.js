const h1Element = document.getElementById("playAudio");
const audioElement = document.getElementById("audio");

h1Element.addEventListener("click", function () {
    if (!audioElement.paused) {
        audioElement.pause();
    }
    audioElement.play();
});
