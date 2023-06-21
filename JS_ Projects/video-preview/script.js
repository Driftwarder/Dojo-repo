console.log("page loaded...");

function playVideo(figureElement) {
    var videoElement = figureElement.querySelector("video");
    videoElement.play();
}

function pauseVideo(figureElement) {
    var videoElement = figureElement.querySelector("video");
    videoElement.pause();
}