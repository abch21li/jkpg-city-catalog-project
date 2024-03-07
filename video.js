document.addEventListener('DOMContentLoaded', function(){
    const videoContainer = document.getElementById('video-container')
    const video = document.createElement('video');

    video.src = 'videos/timelapse_greyscale.mp4';
    video.autoplay = true;
    video.loop = true;

    videoContainer.appendChild(video);
});