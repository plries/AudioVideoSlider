const video = document.querySelector('.video')
video.volume = 0.2;

const image = document.querySelectorAll('.image')

const song = new Audio("./media/from-the-window-lamp.mp3")
song.volume = 0.1

const mute = document.querySelector('#mute')

video.addEventListener("mouseover", function playVideo() {
    video.play()
})
video.addEventListener("mouseout", function pauseVideo() {
    video.pause()
})

image.forEach((image) => {
    image.addEventListener("click", function playSong() {
        if (song.paused) {
            song.play()
        }
    })
});

mute.addEventListener("click", function mute() {
        song.pause()
        song.currentTime = 0
})
