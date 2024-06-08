const videoSources = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

let currentVideoIndex = 0;

function updateVideoSource() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    updateVideoSource();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    updateVideoSource();
}

// Initial load
document.addEventListener('DOMContentLoaded', updateVideoSource);