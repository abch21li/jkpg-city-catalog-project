// ----- Event listener triggering landing page video to loop once the page is loaded 
document.addEventListener('DOMContentLoaded', function(){
    const videoContainer = document.getElementById('video-container')
    const video = document.createElement('video');

    video.src = 'videos/timelapse_greyscale.mp4';
    video.autoplay = true;
    video.loop = true;

    videoContainer.appendChild(video);
});