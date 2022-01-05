console.log("page loaded...");

const videoContainer = document.querySelector('#videoContainer');
const video = document.createElement('video');

video.setAttribute("src", "./assets/pexels-vlada-karpovich-chess.mp4");
video.setAttribute("width", "720");
video.setAttribute("height", "400");
video.setAttribute("controls", "controls");

video.onmouseover = function() {
    video.play();
    video.muted = false;
}

video.onmouseout = function() {
    video.pause();
    video.muted = true;
}

videoContainer.appendChild(video);
