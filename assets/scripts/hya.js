---
---

var intervalId;
var image = document.getElementById("banner-nobu");
var audio = new Audio('{{site.baseurl}}/assets/audio/hya.opus');

audio.preload = "auto";

var preloadImage = new Image();
preloadImage.src = "{{site.baseurl}}/assets/img/shinobu2.png";

function startChanging() {
    image.src = preloadImage.src;

    setTimeout(function () {
        stopChanging();
        audio.play();
    }, 150);
}

function stopChanging() {
    image.src = "{{site.baseurl}}/assets/img/shinobu1.png";
}