var intervalId;
var image = document.getElementById("banner-nobu");
var audio = new Audio('/assets/audio/hya.opus');

audio.preload = "auto";

var preloadImage = new Image();
preloadImage.src = "/assets/img/shinobu2.png";

function startChanging() {
    image.src = preloadImage.src;

    setTimeout(function () {
        stopChanging();
        audio.play();
    }, 150);
}

function stopChanging() {
    image.src = "/assets/img/shinobu1.png";
}