const video = document.querySelector('.video')

video.muted = true;

video.addEventListener("mouseover", function playVideo() {
    video.play()
})
video.addEventListener("mouseout", function pauseVideo() {
    video.pause()
})

video.addEventListener("click", function toggleAudio() {
    if (video.muted) {
        video.muted = false;
        
    } else {
        video.muted = true;
    }
})